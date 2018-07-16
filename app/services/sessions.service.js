"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var httpModule = require("http");
var constantsModule = require("../shared/constants");
var fakeDataService = require("./fake-data.service");
var SessionsService = /** @class */ (function () {
    function SessionsService() {
        this._useHttpService = true;
    }
    SessionsService.prototype.loadSessions = function () {
        if (this._useHttpService) {
            return this.loadSessionsViaHttp();
        }
        else {
            return this.loadSessionsViaFaker();
        }
    };
    SessionsService.prototype.loadSessionsViaHttp = function () {
        var reqParams = {
            url: constantsModule.AZURE_URL + constantsModule.AZURE_TABLE_PATH + constantsModule.AZURE_TABLE_NAME + '?$orderby=start',
            method: 'GET',
            headers: constantsModule.AZURE_VERSION_HEADER
        };
        return httpModule.getJSON(reqParams);
    };
    SessionsService.prototype.loadSessionsViaFaker = function () {
        return new Promise(function (resolve, reject) {
            var speakers = fakeDataService.generateSpeakers();
            var roomInfos = fakeDataService.generateRoomInfos();
            var sessions = fakeDataService.generateSessions(speakers, roomInfos);
            resolve(sessions);
        });
    };
    return SessionsService;
}());
exports.SessionsService = SessionsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbnMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlc3Npb25zLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpQ0FBbUM7QUFDbkMscURBQXVEO0FBQ3ZELHFEQUF1RDtBQUV2RDtJQUFBO1FBRVksb0JBQWUsR0FBWSxJQUFJLENBQUM7SUE2QjVDLENBQUM7SUEzQlUsc0NBQVksR0FBbkI7UUFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztZQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFLLENBQUM7UUFDekMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osTUFBTSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBSyxDQUFDO1FBQzFDLENBQUM7SUFDTCxDQUFDO0lBRU8sNkNBQW1CLEdBQTNCO1FBQ0ksSUFBTSxTQUFTLEdBQUc7WUFDZCxHQUFHLEVBQUUsZUFBZSxDQUFDLFNBQVMsR0FBRyxlQUFlLENBQUMsZ0JBQWdCLEdBQUcsZUFBZSxDQUFDLGdCQUFnQixHQUFHLGlCQUFpQjtZQUN4SCxNQUFNLEVBQUUsS0FBSztZQUNiLE9BQU8sRUFBRSxlQUFlLENBQUMsb0JBQW9CO1NBQ2hELENBQUM7UUFFRixNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBSSxTQUFTLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRU8sOENBQW9CLEdBQTVCO1FBQ0ksTUFBTSxDQUFDLElBQUksT0FBTyxDQUFJLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDbEMsSUFBTSxRQUFRLEdBQUcsZUFBZSxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDcEQsSUFBTSxTQUFTLEdBQUcsZUFBZSxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFDdEQsSUFBTSxRQUFRLEdBQVMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztZQUU3RSxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQUFDLEFBL0JELElBK0JDO0FBL0JZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgaHR0cE1vZHVsZSBmcm9tICdodHRwJztcclxuaW1wb3J0ICogYXMgY29uc3RhbnRzTW9kdWxlIGZyb20gJy4uL3NoYXJlZC9jb25zdGFudHMnO1xyXG5pbXBvcnQgKiBhcyBmYWtlRGF0YVNlcnZpY2UgZnJvbSAnLi9mYWtlLWRhdGEuc2VydmljZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgU2Vzc2lvbnNTZXJ2aWNlIHtcclxuXHJcbiAgICBwcml2YXRlIF91c2VIdHRwU2VydmljZTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgcHVibGljIGxvYWRTZXNzaW9uczxUPigpOiBQcm9taXNlPFQ+IHtcclxuICAgICAgICBpZiAodGhpcy5fdXNlSHR0cFNlcnZpY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9hZFNlc3Npb25zVmlhSHR0cDxUPigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxvYWRTZXNzaW9uc1ZpYUZha2VyPFQ+KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbG9hZFNlc3Npb25zVmlhSHR0cDxUPigpOiBQcm9taXNlPFQ+IHtcclxuICAgICAgICBjb25zdCByZXFQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIHVybDogY29uc3RhbnRzTW9kdWxlLkFaVVJFX1VSTCArIGNvbnN0YW50c01vZHVsZS5BWlVSRV9UQUJMRV9QQVRIICsgY29uc3RhbnRzTW9kdWxlLkFaVVJFX1RBQkxFX05BTUUgKyAnPyRvcmRlcmJ5PXN0YXJ0JyxcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgaGVhZGVyczogY29uc3RhbnRzTW9kdWxlLkFaVVJFX1ZFUlNJT05fSEVBREVSXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGh0dHBNb2R1bGUuZ2V0SlNPTjxUPihyZXFQYXJhbXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbG9hZFNlc3Npb25zVmlhRmFrZXI8VD4oKTogUHJvbWlzZTxUPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPFQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc3BlYWtlcnMgPSBmYWtlRGF0YVNlcnZpY2UuZ2VuZXJhdGVTcGVha2VycygpO1xyXG4gICAgICAgICAgICBjb25zdCByb29tSW5mb3MgPSBmYWtlRGF0YVNlcnZpY2UuZ2VuZXJhdGVSb29tSW5mb3MoKTtcclxuICAgICAgICAgICAgY29uc3Qgc2Vzc2lvbnMgPSA8YW55PiBmYWtlRGF0YVNlcnZpY2UuZ2VuZXJhdGVTZXNzaW9ucyhzcGVha2Vycywgcm9vbUluZm9zKTtcclxuXHJcbiAgICAgICAgICAgIHJlc29sdmUoc2Vzc2lvbnMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==