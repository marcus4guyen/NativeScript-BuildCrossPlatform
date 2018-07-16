import { RoomInfo } from '~/shared/interfaces';
import * as imageSourceModule from 'image-source';

export const defaultImageSource = imageSourceModule.fromFile('~/images/rooms/conf-map.png');

export function getRoomImage(roomInfo: RoomInfo, update: (iamge: imageSourceModule.ImageSource) => void) {
    // simulate image loading from remote source
    setTimeout(() => {
        update(defaultImageSource);
    }, 2000);
}
