import * as httpModule from 'http';
import * as constantsModule from '../shared/constants';
import * as fakeDataService from './fake-data.service';

export class SessionsService {

    private _useHttpService: boolean = true;

    public loadSessions<T>(): Promise<T> {
        if (this._useHttpService) {
            return this.loadSessionsViaHttp<T>();
        } else {
            return this.loadSessionsViaFaker<T>();
        }
    }

    private loadSessionsViaHttp<T>(): Promise<T> {
        const reqParams = {
            url: constantsModule.AZURE_URL + constantsModule.AZURE_TABLE_PATH + constantsModule.AZURE_TABLE_NAME + '?$orderby=start',
            method: 'GET',
            headers: constantsModule.AZURE_VERSION_HEADER
        };

        return httpModule.getJSON<T>(reqParams);
    }

    private loadSessionsViaFaker<T>(): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            const speakers = fakeDataService.generateSpeakers();
            const roomInfos = fakeDataService.generateRoomInfos();
            const sessions = <any> fakeDataService.generateSessions(speakers, roomInfos);

            resolve(sessions);
        });
    }
}
