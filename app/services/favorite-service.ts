import { FavouriteSession } from '../shared/interfaces';
import { SessionViewModel } from '../pages/session-page/session-view-model';
import * as appSettingsModule from 'application-settings';

const FAVOURITES = 'FAVORITES';

export let favourites: Array<FavouriteSession>;

try {
    favourites = <Array<FavouriteSession>>JSON.parse(appSettingsModule.getString(FAVOURITES));
}
catch {
    favourites = new Array<FavouriteSession>();
}

export function addToFavourites(session: SessionViewModel) {
    if (findSessionIndexInFavourites(session.id) >= 0) {
        // Session already added to favourites
        return;
    }

    persistSessionToFavourites(session);
}

export function removeFromFavourites(session: SessionViewModel) {
    const index = findSessionIndexInFavourites(session.id);

    if (index >= 0) {
        favourites.splice(index, 1);
        updateFavourites();
    }
}

function findSessionIndexInFavourites(sessionId: string): number {
    for (let i = 0; i < favourites.length; i++) {
        if (favourites[i].sessionId === sessionId) {
            return i;
        }
    }

    return -1;
}

function persistSessionToFavourites(session: SessionViewModel) {
    favourites.push({
        sessionId: session.id,
        calendarEventId: session.calendarEventId
    });

    updateFavourites();
}

function updateFavourites() {
    const newValue = JSON.stringify(favourites);
    appSettingsModule.setString(FAVOURITES, newValue);
}