import { Observable } from 'data/observable';

import { Session, Speaker, RoomInfo } from '../../shared/interfaces';
import * as favouriteServiceModule from '~/services/favorite-service';

export class SessionViewModel extends Observable implements Session {

    private _session: Session;
    private _favorite: boolean;
    private _startDate: Date;
    private _endDate: Date;

    constructor(source?: Session) {
        super();

        if (source) {
            this._session = source;

            this._startDate = this.fixDate(new Date(source.start));
            this._endDate = this.fixDate(new Date(source.end));
        }
    }

    public toggleFavorite() {
        this.favorite = !this.favorite;

        if (!this.favorite) {
            favouriteServiceModule.addToFavourites(this);
        } else {
            favouriteServiceModule.removeFromFavourites(this);
        }
    }

    private fixDate(date: Date): Date {
        return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
    }

    get id(): string {
        return this._session.id;
    }

    get title(): string {
        return this._session.title;
    }
    
    get start(): string {
        return this._session.start;
    }

    get end(): string {
        return this._session.end;
    }

    get startDate(): Date {
        return this._startDate;
    }

    get endDate(): Date {
        return this._endDate;
    }

    get range(): string {
        const startMinutes = this.startDate.getMinutes() + '';
        const endMinutes = this.endDate.getMinutes() + '';
        const startAM = this.startDate.getHours() < 12 ? 'am' : 'pm';
        const endAM = this.endDate.getHours() < 12 ? 'am' : 'pm';

        const startHours = (this.startDate.getHours() <= 12 ? this.startDate.getHours() : this.startDate.getHours() - 12) + '';
        const endHours = (this.endDate.getHours() <= 12 ? this.endDate.getHours() : this.endDate.getHours() - 12) + '';

        return (startHours.length === 1 ? '0' + startHours : startHours) + ':' + (startMinutes.length === 1 ? '0' + startMinutes : startMinutes) + startAM +
                ' - ' + (endHours.length === 1 ? '0' + endHours : endHours) + ':' + (endMinutes.length === 1 ? '0' + endMinutes : endMinutes) + endAM;
    }

    get room(): string {
        if (this._session.room) {
            return this._session.room;
        }

        if (this._session.roomInfo) {
            return this._session.roomInfo.name;
        }

        return null;
    }

    get roomInfo(): RoomInfo {
        return this._session.roomInfo;
    }

    get speakers(): Array<Speaker> {
        return this._session.speakers;
    }

    get description(): string {
        return this._session.description;
    }

    get descriptionShort(): string {
        if (this.description.length > 160) {
            return this.description.substr(0, 160) + '...';
        } else {
            return this.description;
        }
    }

    get calendarEventId(): string {
        return this._session.calendarEventId;
    }
    get isBreak(): boolean {
        return this._session.isBreak;
    }

    get favorite(): boolean {
        return this._favorite;
    }

    set favorite(value: boolean) {
        if (this._favorite !== value && !this._session.isBreak) {
            this._favorite = value;
            this.notify({
                object: this,
                eventName: Observable.propertyChangeEvent,
                propertyName: 'favorite',
                value: this._favorite
            });
        }
    }
}