import { Observable } from 'data/observable';

import { SessionViewModel } from '../session-page/session-view-model';
import { SessionsService } from '~/services/sessions.service';
import { Session, ConferenceDay } from '~/shared/interfaces';
import { conferenceDays } from '~/shared/static-data';

export class MainViewModel extends Observable {
    private _selectedIndex;
    private _allSessions: Array<SessionViewModel> = new Array<SessionViewModel>();
    private _filteredSessions: Array<SessionViewModel>;
    private _sessionService: SessionsService;

    public selectedViewIndex: number;

    constructor() {
        super();
        this.selectedIndex = 0;
        this.selectedViewIndex = 1;

        this._sessionService = new SessionsService();
        this.set('isLoading', true);
        this.set('isSessionPage', true);

        this.init();
    }

    public init() {
        this._sessionService.loadSessions<Array<Session>>()
            .then((result: Array<Session>) => {
                this.pushSessions(result);
                this.onDataLoaded();
            });
    }

    private pushSessions(sessions: Array<Session>): void {
        for (let i = 0; i < sessions.length; i++) {
            const newSession = new SessionViewModel(sessions[i]);
            this._allSessions.push(newSession);
        }
    }

    private onDataLoaded(): void {
        this.set('isLoading', false);
        this.filter();
    }

    private filter(): void {
        this._filteredSessions = this._allSessions.filter(session => {
            return session.startDate.getDate() === conferenceDays[this.selectedIndex].date.getDate();
        });

        if (this.selectedViewIndex === 0) {
            this._filteredSessions = this._filteredSessions.filter(session => {
                return session.favorite || session.isBreak;
            });
        }

        this.notify({
            object: this,
            eventName: Observable.propertyChangeEvent,
            propertyName: 'sessions',
            value: this._filteredSessions
        });
    }

    public selectView(index: number, titleText: string) {
        this.selectedViewIndex = index;

        if (this.selectedViewIndex < 2) {
            this.filter();
        }

        this.notify({
            object: this,
            eventName: Observable.propertyChangeEvent,
            propertyName: 'selectedViewIndex',
            value: this.selectedViewIndex
        });

        this.set('actionBarTitle', titleText);
        this.set('isSessionPage', this.selectedViewIndex < 2);
    }

    get sessions(): Array<SessionViewModel> {
        return this._filteredSessions;
    }

    get confDayOptions(): Array<ConferenceDay> {
        return conferenceDays;
    }

    get selectedIndex(): number {
        return this._selectedIndex;
    }

    set selectedIndex(value: number) {
        if (this._selectedIndex !== value) {
            this._selectedIndex = value;
            this.notify({
                object: this,
                eventName: Observable.propertyChangeEvent,
                propertyName: 'selectedIndex',
                value: value
            });

            this.set('dayHeader', conferenceDays[value].desc);
            this.filter();
        }
    }
}
