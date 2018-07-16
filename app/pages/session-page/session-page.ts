import { Page, EventData, NavigatedData } from 'ui/page';
import { Button } from 'ui/button';
import { Label } from 'ui/label';
import { ScrollView } from 'ui/scroll-view';
import { GestureEventData } from 'ui/gestures';

import * as navigationModule from '~/shared/navigation';
import * as animationHelperModule from '~/shared/animation-helper';
import { SessionViewModel } from './session-view-model';

let sessionViewModel: SessionViewModel;
let page: Page;

export function navigatingTo(args: NavigatedData) {
    page = <Page> args.object;
    sessionViewModel = args.context;
    page.bindingContext = sessionViewModel;
}

export function toggleFavorite(args) {
    const gridLayout = <any> args.object;
    const img = gridLayout.getViewById('imgFav');

    animationHelperModule.popAnimate(img).then(() => sessionViewModel.toggleFavorite());
}

export function toggleDescription(args: EventData) {
    const btn = <Button> args.object;
    const txtDesc = <Label> page.getViewById('txtDescription');
    const scroll = <ScrollView> page.getViewById('scroll');

    if (btn.text === 'MORE') {
        btn.text = 'LESS';
        txtDesc.text = sessionViewModel.description;
    } else {
        btn.text = 'MORE';
        txtDesc.text = sessionViewModel.descriptionShort;
        scroll.scrollToVerticalOffset(0, false);
    }
}

export function backTap(agrs: GestureEventData) {
    navigationModule.goBack();
}

export function showMapTap(args: GestureEventData) {
    navigationModule.goToRoomMapPage(sessionViewModel);
}