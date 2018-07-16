"use strict";
/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/
Object.defineProperty(exports, "__esModule", { value: true });
var page_1 = require("ui/page");
var stack_layout_1 = require("ui/layouts/stack-layout");
var button_1 = require("ui/button");
var label_1 = require("ui/label");
var main_view_model_1 = require("./main-view-model");
var navigationModule = require("~/shared/navigation");
var animationHelperModule = require("~/shared/animation-helper");
var mainViewModel = new main_view_model_1.MainViewModel();
var page;
var SIDE_DRAWER_ID = 'SideDrawer';
// Event handler for Page "navigatingTo" event attached in main-page.xml
function navigatingTo(args) {
    /*
    This gets a reference this page’s <Page> UI component. You can
    view the API reference of the Page to see what’s available at
    https://docs.nativescript.org/api-reference/classes/_ui_page_.page.html
    */
    page = args.object;
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
exports.navigatingTo = navigatingTo;
function toggleFavorite(args) {
    var session = args.view.bindingContext;
    var gridLayout = args.object;
    var img = gridLayout.getViewById('imgFav');
    animationHelperModule.popAnimate(img).then(function () { return session.toggleFavorite(); });
}
exports.toggleFavorite = toggleFavorite;
function selectSession(args) {
    var session = args.view.bindingContext;
    if (!session.isBreak) {
        navigationModule.gotoSessionPage(session);
    }
}
exports.selectSession = selectSession;
function showSlideout(args) {
    var slideBar = page.getViewById(SIDE_DRAWER_ID);
    slideBar.showDrawer();
}
exports.showSlideout = showSlideout;
function selectView(args) {
    var btn = args.object;
    var slideBar = page.getViewById(SIDE_DRAWER_ID);
    slideBar.closeDrawer();
    var viewIndex = parseInt(btn.tag);
    if (viewIndex === 3) {
        goToAcknowledgementPage();
    }
    else {
        mainViewModel.selectView(viewIndex, btn.text);
    }
}
exports.selectView = selectView;
function goToAcknowledgementPage() {
    navigationModule.goToPageByFunction(navFactoryFunc);
}
function navFactoryFunc() {
    var label = new label_1.Label();
    label.text = 'App created by Marcus';
    var btnBack = new button_1.Button();
    btnBack.text = 'Back';
    btnBack.on('tap', navigationModule.goBack);
    var stackLayout = new stack_layout_1.StackLayout();
    stackLayout.addChild(label);
    stackLayout.addChild(btnBack);
    var dynamicPage = new page_1.Page();
    dynamicPage.content = stackLayout;
    return dynamicPage;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OztFQUlFOztBQUdGLGdDQUErQjtBQUMvQix3REFBc0Q7QUFDdEQsb0NBQW1DO0FBQ25DLGtDQUFpQztBQUlqQyxxREFBa0Q7QUFFbEQsc0RBQXdEO0FBQ3hELGlFQUFtRTtBQUVuRSxJQUFNLGFBQWEsR0FBRyxJQUFJLCtCQUFhLEVBQUUsQ0FBQztBQUMxQyxJQUFJLElBQVUsQ0FBQztBQUNmLElBQU0sY0FBYyxHQUFHLFlBQVksQ0FBQztBQUVwQyx3RUFBd0U7QUFDeEUsc0JBQTZCLElBQWU7SUFDeEM7Ozs7TUFJRTtJQUNGLElBQUksR0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBRXpCOzs7Ozs7Ozs7TUFTRTtJQUNGLElBQUksQ0FBQyxjQUFjLEdBQUcsYUFBYSxDQUFDO0FBQ3hDLENBQUM7QUFuQkQsb0NBbUJDO0FBRUQsd0JBQStCLElBQXNCO0lBQ2pELElBQU0sT0FBTyxHQUFzQixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUU1RCxJQUFNLFVBQVUsR0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JDLElBQU0sR0FBRyxHQUFHLFVBQVUsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDN0MscUJBQXFCLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFNLE9BQUEsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUF4QixDQUF3QixDQUFDLENBQUM7QUFDL0UsQ0FBQztBQU5ELHdDQU1DO0FBRUQsdUJBQThCLElBQW1CO0lBQzdDLElBQU0sT0FBTyxHQUFzQixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUU1RCxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ25CLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5QyxDQUFDO0FBQ0wsQ0FBQztBQU5ELHNDQU1DO0FBRUQsc0JBQTZCLElBQXNCO0lBQy9DLElBQU0sUUFBUSxHQUFTLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDeEQsUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQzFCLENBQUM7QUFIRCxvQ0FHQztBQUVELG9CQUEyQixJQUFlO0lBQ3RDLElBQU0sR0FBRyxHQUFZLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDakMsSUFBTSxRQUFRLEdBQVEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUN2RCxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7SUFFdkIsSUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFPLEdBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUUzQyxFQUFFLENBQUMsQ0FBQyxTQUFTLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQix1QkFBdUIsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUNKLGFBQWEsQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsRCxDQUFDO0FBQ0wsQ0FBQztBQVpELGdDQVlDO0FBRUQ7SUFDSSxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUN4RCxDQUFDO0FBRUQ7SUFDSSxJQUFNLEtBQUssR0FBRyxJQUFJLGFBQUssRUFBRSxDQUFDO0lBQzFCLEtBQUssQ0FBQyxJQUFJLEdBQUcsdUJBQXVCLENBQUM7SUFFckMsSUFBTSxPQUFPLEdBQUcsSUFBSSxlQUFNLEVBQUUsQ0FBQztJQUM3QixPQUFPLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztJQUN0QixPQUFPLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUUzQyxJQUFNLFdBQVcsR0FBRyxJQUFJLDBCQUFXLEVBQUUsQ0FBQztJQUN0QyxXQUFXLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLFdBQVcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFOUIsSUFBTSxXQUFXLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztJQUMvQixXQUFXLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQztJQUVsQyxNQUFNLENBQUMsV0FBVyxDQUFDO0FBQ3ZCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuSW4gTmF0aXZlU2NyaXB0LCBhIGZpbGUgd2l0aCB0aGUgc2FtZSBuYW1lIGFzIGFuIFhNTCBmaWxlIGlzIGtub3duIGFzXG5hIGNvZGUtYmVoaW5kIGZpbGUuIFRoZSBjb2RlLWJlaGluZCBpcyBhIGdyZWF0IHBsYWNlIHRvIHBsYWNlIHlvdXIgdmlld1xubG9naWMsIGFuZCB0byBzZXQgdXAgeW91ciBwYWdl4oCZcyBkYXRhIGJpbmRpbmcuXG4qL1xuXG5pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tICdkYXRhL29ic2VydmFibGUnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3VpL3BhZ2UnO1xuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tICd1aS9sYXlvdXRzL3N0YWNrLWxheW91dCc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICd1aS9idXR0b24nO1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tICd1aS9sYWJlbCc7XG5pbXBvcnQgeyBHZXN0dXJlRXZlbnREYXRhIH0gZnJvbSAndWkvZ2VzdHVyZXMnO1xuaW1wb3J0IHsgSXRlbUV2ZW50RGF0YSB9IGZyb20gJ3VpL2xpc3Qtdmlldyc7XG5cbmltcG9ydCB7IE1haW5WaWV3TW9kZWwgfSBmcm9tICcuL21haW4tdmlldy1tb2RlbCc7XG5pbXBvcnQgeyBTZXNzaW9uVmlld01vZGVsIH0gZnJvbSAnLi4vc2Vzc2lvbi1wYWdlL3Nlc3Npb24tdmlldy1tb2RlbCc7XG5pbXBvcnQgKiBhcyBuYXZpZ2F0aW9uTW9kdWxlIGZyb20gJ34vc2hhcmVkL25hdmlnYXRpb24nO1xuaW1wb3J0ICogYXMgYW5pbWF0aW9uSGVscGVyTW9kdWxlIGZyb20gJ34vc2hhcmVkL2FuaW1hdGlvbi1oZWxwZXInO1xuXG5jb25zdCBtYWluVmlld01vZGVsID0gbmV3IE1haW5WaWV3TW9kZWwoKTtcbmxldCBwYWdlOiBQYWdlO1xuY29uc3QgU0lERV9EUkFXRVJfSUQgPSAnU2lkZURyYXdlcic7XG5cbi8vIEV2ZW50IGhhbmRsZXIgZm9yIFBhZ2UgXCJuYXZpZ2F0aW5nVG9cIiBldmVudCBhdHRhY2hlZCBpbiBtYWluLXBhZ2UueG1sXG5leHBvcnQgZnVuY3Rpb24gbmF2aWdhdGluZ1RvKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgIC8qXG4gICAgVGhpcyBnZXRzIGEgcmVmZXJlbmNlIHRoaXMgcGFnZeKAmXMgPFBhZ2U+IFVJIGNvbXBvbmVudC4gWW91IGNhblxuICAgIHZpZXcgdGhlIEFQSSByZWZlcmVuY2Ugb2YgdGhlIFBhZ2UgdG8gc2VlIHdoYXTigJlzIGF2YWlsYWJsZSBhdFxuICAgIGh0dHBzOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL2FwaS1yZWZlcmVuY2UvY2xhc3Nlcy9fdWlfcGFnZV8ucGFnZS5odG1sXG4gICAgKi9cbiAgICBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgXG4gICAgLypcbiAgICBBIHBhZ2XigJlzIGJpbmRpbmdDb250ZXh0IGlzIGFuIG9iamVjdCB0aGF0IHNob3VsZCBiZSB1c2VkIHRvIHBlcmZvcm1cbiAgICBkYXRhIGJpbmRpbmcgYmV0d2VlbiBYTUwgbWFya3VwIGFuZCBUeXBlU2NyaXB0IGNvZGUuIFByb3BlcnRpZXNcbiAgICBvbiB0aGUgYmluZGluZ0NvbnRleHQgY2FuIGJlIGFjY2Vzc2VkIHVzaW5nIHRoZSB7eyB9fSBzeW50YXggaW4gWE1MLlxuICAgIEluIHRoaXMgZXhhbXBsZSwgdGhlIHt7IG1lc3NhZ2UgfX0gYW5kIHt7IG9uVGFwIH19IGJpbmRpbmdzIGFyZSByZXNvbHZlZFxuICAgIGFnYWluc3QgdGhlIG9iamVjdCByZXR1cm5lZCBieSBjcmVhdGVWaWV3TW9kZWwoKS5cblxuICAgIFlvdSBjYW4gbGVhcm4gbW9yZSBhYm91dCBkYXRhIGJpbmRpbmcgaW4gTmF0aXZlU2NyaXB0IGF0XG4gICAgaHR0cHM6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvY29yZS1jb25jZXB0cy9kYXRhLWJpbmRpbmcuXG4gICAgKi9cbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gbWFpblZpZXdNb2RlbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUZhdm9yaXRlKGFyZ3M6IEdlc3R1cmVFdmVudERhdGEpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gPFNlc3Npb25WaWV3TW9kZWw+IGFyZ3Mudmlldy5iaW5kaW5nQ29udGV4dDtcblxuICAgIGNvbnN0IGdyaWRMYXlvdXQgPSA8YW55PiBhcmdzLm9iamVjdDtcbiAgICBjb25zdCBpbWcgPSBncmlkTGF5b3V0LmdldFZpZXdCeUlkKCdpbWdGYXYnKTtcbiAgICBhbmltYXRpb25IZWxwZXJNb2R1bGUucG9wQW5pbWF0ZShpbWcpLnRoZW4oKCkgPT4gc2Vzc2lvbi50b2dnbGVGYXZvcml0ZSgpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdFNlc3Npb24oYXJnczogSXRlbUV2ZW50RGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSA8U2Vzc2lvblZpZXdNb2RlbD4gYXJncy52aWV3LmJpbmRpbmdDb250ZXh0O1xuXG4gICAgaWYgKCFzZXNzaW9uLmlzQnJlYWspIHtcbiAgICAgICAgbmF2aWdhdGlvbk1vZHVsZS5nb3RvU2Vzc2lvblBhZ2Uoc2Vzc2lvbik7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd1NsaWRlb3V0KGFyZ3M6IEdlc3R1cmVFdmVudERhdGEpIHtcbiAgICBjb25zdCBzbGlkZUJhciA9IDxhbnk+IHBhZ2UuZ2V0Vmlld0J5SWQoU0lERV9EUkFXRVJfSUQpO1xuICAgIHNsaWRlQmFyLnNob3dEcmF3ZXIoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdFZpZXcoYXJnczogRXZlbnREYXRhKSB7XG4gICAgY29uc3QgYnRuID0gPEJ1dHRvbj4gYXJncy5vYmplY3Q7XG4gICAgY29uc3Qgc2xpZGVCYXIgPSA8YW55PnBhZ2UuZ2V0Vmlld0J5SWQoU0lERV9EUkFXRVJfSUQpO1xuICAgIHNsaWRlQmFyLmNsb3NlRHJhd2VyKCk7XG5cbiAgICBjb25zdCB2aWV3SW5kZXggPSBwYXJzZUludCgoPGFueT5idG4pLnRhZyk7XG5cbiAgICBpZiAodmlld0luZGV4ID09PSAzKSB7XG4gICAgICAgIGdvVG9BY2tub3dsZWRnZW1lbnRQYWdlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbWFpblZpZXdNb2RlbC5zZWxlY3RWaWV3KHZpZXdJbmRleCwgYnRuLnRleHQpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ29Ub0Fja25vd2xlZGdlbWVudFBhZ2UoKSB7XG4gICAgbmF2aWdhdGlvbk1vZHVsZS5nb1RvUGFnZUJ5RnVuY3Rpb24obmF2RmFjdG9yeUZ1bmMpO1xufVxuXG5mdW5jdGlvbiBuYXZGYWN0b3J5RnVuYygpIHtcbiAgICBjb25zdCBsYWJlbCA9IG5ldyBMYWJlbCgpO1xuICAgIGxhYmVsLnRleHQgPSAnQXBwIGNyZWF0ZWQgYnkgTWFyY3VzJztcblxuICAgIGNvbnN0IGJ0bkJhY2sgPSBuZXcgQnV0dG9uKCk7XG4gICAgYnRuQmFjay50ZXh0ID0gJ0JhY2snO1xuICAgIGJ0bkJhY2sub24oJ3RhcCcsIG5hdmlnYXRpb25Nb2R1bGUuZ29CYWNrKTtcblxuICAgIGNvbnN0IHN0YWNrTGF5b3V0ID0gbmV3IFN0YWNrTGF5b3V0KCk7XG4gICAgc3RhY2tMYXlvdXQuYWRkQ2hpbGQobGFiZWwpO1xuICAgIHN0YWNrTGF5b3V0LmFkZENoaWxkKGJ0bkJhY2spO1xuXG4gICAgY29uc3QgZHluYW1pY1BhZ2UgPSBuZXcgUGFnZSgpO1xuICAgIGR5bmFtaWNQYWdlLmNvbnRlbnQgPSBzdGFja0xheW91dDtcblxuICAgIHJldHVybiBkeW5hbWljUGFnZTtcbn1cbiJdfQ==