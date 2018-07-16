import * as frameModule from 'ui/frame';

export function startingPage() {
    return 'pages/main-page/main-page';
}

export function gotoSessionPage(session) {
    frameModule.topmost().navigate({
        moduleName: 'pages/session-page/session-page',
        context: session
    });
}

export function goBack() {
    frameModule.topmost().goBack();
}

export function goToPageByFunction(factoryFunc) {
    frameModule.topmost().navigate(factoryFunc);
}

export function goToRoomMapPage(sessionViewModel) {
    frameModule.topmost().navigate({
        moduleName: 'pages/map-page/map-page',
        context: sessionViewModel,
        transition: {
            name: 'fade',
            duration: 1000,
            curve: 'easeIn'
        }
    })
}
