import { Page, NavigatedData } from 'ui/page';
import { GestureEventData, SwipeGestureEventData, SwipeDirection } from 'ui/gestures';
import { RoomInfo } from '~/shared/interfaces';
import { MapViewModel } from './map-view-model';

import * as roomMapServiceModule from '~/services/room-map-service';
import * as navigationModule from '~/shared/navigation';
import * as animationHelperModule from '~/shared/animation-helper';

let mapViewModel: MapViewModel;

export function navigatingTo(args: NavigatedData) {
    let page = <Page> args.object;

    if (page && page.navigationContext) {
        mapViewModel = new MapViewModel(<RoomInfo>page.navigationContext.roomInfo);
    }

    const img = <any>page.getViewById('imgMap');
    img.style.opacity = 0.2;
    img.scaleX = 0.2;
    img.scaleY = 0.2;
    mapViewModel.isLoading = true;

    roomMapServiceModule.getRoomImage(mapViewModel.roomInfo, (imageSource) => {
        mapViewModel.set('image', imageSource);
        mapViewModel.isLoading = false;
        
        animationHelperModule.fadeZoom(img);
    });

    page.bindingContext = mapViewModel;
}

export function backTap(args: GestureEventData) {
    navigationModule.goBack();
}

export function backSwipe(args: SwipeGestureEventData) {
    if (args.direction == SwipeDirection.right) {
        navigationModule.goBack();
    }
}
