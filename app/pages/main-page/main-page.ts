/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { StackLayout } from 'ui/layouts/stack-layout';
import { Button } from 'ui/button';
import { Label } from 'ui/label';
import { GestureEventData } from 'ui/gestures';
import { ItemEventData } from 'ui/list-view';

import { MainViewModel } from './main-view-model';
import { SessionViewModel } from '../session-page/session-view-model';
import * as navigationModule from '~/shared/navigation';
import * as animationHelperModule from '~/shared/animation-helper';

const mainViewModel = new MainViewModel();
let page: Page;
const SIDE_DRAWER_ID = 'SideDrawer';

// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {
    /*
    This gets a reference this page’s <Page> UI component. You can
    view the API reference of the Page to see what’s available at
    https://docs.nativescript.org/api-reference/classes/_ui_page_.page.html
    */
    page = <Page>args.object;
    
    /*
    A page’s bindingContext is an object that should be used to perform
    data binding between XML markup and TypeScript code. Properties
    on the bindingContext can be accessed using the {{ }} syntax in XML.
    In this example, the {{ message }} and {{ onTap }} bindings are resolved
    against the object returned by createViewModel().

    You can learn more about data binding in NativeScript at
    https://docs.nativescript.org/core-concepts/data-binding.
    */
    page.bindingContext = mainViewModel;
}

export function toggleFavorite(args: GestureEventData) {
    const session = <SessionViewModel> args.view.bindingContext;

    const gridLayout = <any> args.object;
    const img = gridLayout.getViewById('imgFav');
    animationHelperModule.popAnimate(img).then(() => session.toggleFavorite());
}

export function selectSession(args: ItemEventData) {
    const session = <SessionViewModel> args.view.bindingContext;

    if (!session.isBreak) {
        navigationModule.gotoSessionPage(session);
    }
}

export function showSlideout(args: GestureEventData) {
    const slideBar = <any> page.getViewById(SIDE_DRAWER_ID);
    slideBar.showDrawer();
}

export function selectView(args: EventData) {
    const btn = <Button> args.object;
    const slideBar = <any>page.getViewById(SIDE_DRAWER_ID);
    slideBar.closeDrawer();

    const viewIndex = parseInt((<any>btn).tag);

    if (viewIndex === 3) {
        goToAcknowledgementPage();
    } else {
        mainViewModel.selectView(viewIndex, btn.text);
    }
}

function goToAcknowledgementPage() {
    navigationModule.goToPageByFunction(navFactoryFunc);
}

function navFactoryFunc() {
    const label = new Label();
    label.text = 'App created by Marcus';

    const btnBack = new Button();
    btnBack.text = 'Back';
    btnBack.on('tap', navigationModule.goBack);

    const stackLayout = new StackLayout();
    stackLayout.addChild(label);
    stackLayout.addChild(btnBack);

    const dynamicPage = new Page();
    dynamicPage.content = stackLayout;

    return dynamicPage;
}
