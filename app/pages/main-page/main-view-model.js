"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var session_view_model_1 = require("../session-page/session-view-model");
var sessions_service_1 = require("~/services/sessions.service");
var static_data_1 = require("~/shared/static-data");
var MainViewModel = /** @class */ (function (_super) {
    __extends(MainViewModel, _super);
    function MainViewModel() {
        var _this = _super.call(this) || this;
        _this._allSessions = new Array();
        _this.selectedIndex = 0;
        _this.selectedViewIndex = 1;
        _this._sessionService = new sessions_service_1.SessionsService();
        _this.set('isLoading', true);
        _this.set('isSessionPage', true);
        _this.init();
        return _this;
    }
    MainViewModel.prototype.init = function () {
        var _this = this;
        this._sessionService.loadSessions()
            .then(function (result) {
            _this.pushSessions(result);
            _this.onDataLoaded();
        });
    };
    MainViewModel.prototype.pushSessions = function (sessions) {
        for (var i = 0; i < sessions.length; i++) {
            var newSession = new session_view_model_1.SessionViewModel(sessions[i]);
            this._allSessions.push(newSession);
        }
    };
    MainViewModel.prototype.onDataLoaded = function () {
        this.set('isLoading', false);
        this.filter();
    };
    MainViewModel.prototype.filter = function () {
        var _this = this;
        this._filteredSessions = this._allSessions.filter(function (session) {
            return session.startDate.getDate() === static_data_1.conferenceDays[_this.selectedIndex].date.getDate();
        });
        if (this.selectedViewIndex === 0) {
            this._filteredSessions = this._filteredSessions.filter(function (session) {
                return session.favorite || session.isBreak;
            });
        }
        this.notify({
            object: this,
            eventName: observable_1.Observable.propertyChangeEvent,
            propertyName: 'sessions',
            value: this._filteredSessions
        });
    };
    MainViewModel.prototype.selectView = function (index, titleText) {
        this.selectedViewIndex = index;
        if (this.selectedViewIndex < 2) {
            this.filter();
        }
        this.notify({
            object: this,
            eventName: observable_1.Observable.propertyChangeEvent,
            propertyName: 'selectedViewIndex',
            value: this.selectedViewIndex
        });
        this.set('actionBarTitle', titleText);
        this.set('isSessionPage', this.selectedViewIndex < 2);
    };
    Object.defineProperty(MainViewModel.prototype, "sessions", {
        get: function () {
            return this._filteredSessions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MainViewModel.prototype, "confDayOptions", {
        get: function () {
            return static_data_1.conferenceDays;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MainViewModel.prototype, "selectedIndex", {
        get: function () {
            return this._selectedIndex;
        },
        set: function (value) {
            if (this._selectedIndex !== value) {
                this._selectedIndex = value;
                this.notify({
                    object: this,
                    eventName: observable_1.Observable.propertyChangeEvent,
                    propertyName: 'selectedIndex',
                    value: value
                });
                this.set('dayHeader', static_data_1.conferenceDays[value].desc);
                this.filter();
            }
        },
        enumerable: true,
        configurable: true
    });
    return MainViewModel;
}(observable_1.Observable));
exports.MainViewModel = MainViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTZDO0FBRTdDLHlFQUFzRTtBQUN0RSxnRUFBOEQ7QUFFOUQsb0RBQXNEO0FBRXREO0lBQW1DLGlDQUFVO0lBUXpDO1FBQUEsWUFDSSxpQkFBTyxTQVNWO1FBaEJPLGtCQUFZLEdBQTRCLElBQUksS0FBSyxFQUFvQixDQUFDO1FBUTFFLEtBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLEtBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLENBQUM7UUFFM0IsS0FBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLGtDQUFlLEVBQUUsQ0FBQztRQUM3QyxLQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1QixLQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVoQyxLQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7O0lBQ2hCLENBQUM7SUFFTSw0QkFBSSxHQUFYO1FBQUEsaUJBTUM7UUFMRyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBa0I7YUFDOUMsSUFBSSxDQUFDLFVBQUMsTUFBc0I7WUFDekIsS0FBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMxQixLQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRU8sb0NBQVksR0FBcEIsVUFBcUIsUUFBd0I7UUFDekMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDdkMsSUFBTSxVQUFVLEdBQUcsSUFBSSxxQ0FBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FB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QUFDO2dCQUNsRCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDbEIsQ0FBQztRQUNMLENBQUM7OztPQWZBO0lBZ0JMLG9CQUFDO0FBQUQsQ0FBQyxBQXZHRCxDQUFtQyx1QkFBVSxHQXVHNUM7QUF2R1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcblxuaW1wb3J0IHsgU2Vzc2lvblZpZXdNb2RlbCB9IGZyb20gJy4uL3Nlc3Npb24tcGFnZS9zZXNzaW9uLXZpZXctbW9kZWwnO1xuaW1wb3J0IHsgU2Vzc2lvbnNTZXJ2aWNlIH0gZnJvbSAnfi9zZXJ2aWNlcy9zZXNzaW9ucy5zZXJ2aWNlJztcbmltcG9ydCB7IFNlc3Npb24sIENvbmZlcmVuY2VEYXkgfSBmcm9tICd+L3NoYXJlZC9pbnRlcmZhY2VzJztcbmltcG9ydCB7IGNvbmZlcmVuY2VEYXlzIH0gZnJvbSAnfi9zaGFyZWQvc3RhdGljLWRhdGEnO1xuXG5leHBvcnQgY2xhc3MgTWFpblZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuICAgIHByaXZhdGUgX3NlbGVjdGVkSW5kZXg7XG4gICAgcHJpdmF0ZSBfYWxsU2Vzc2lvbnM6IEFycmF5PFNlc3Npb25WaWV3TW9kZWw+ID0gbmV3IEFycmF5PFNlc3Npb25WaWV3TW9kZWw+KCk7XG4gICAgcHJpdmF0ZSBfZmlsdGVyZWRTZXNzaW9uczogQXJyYXk8U2Vzc2lvblZpZXdNb2RlbD47XG4gICAgcHJpdmF0ZSBfc2Vzc2lvblNlcnZpY2U6IFNlc3Npb25zU2VydmljZTtcblxuICAgIHB1YmxpYyBzZWxlY3RlZFZpZXdJbmRleDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IDA7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRWaWV3SW5kZXggPSAxO1xuXG4gICAgICAgIHRoaXMuX3Nlc3Npb25TZXJ2aWNlID0gbmV3IFNlc3Npb25zU2VydmljZSgpO1xuICAgICAgICB0aGlzLnNldCgnaXNMb2FkaW5nJywgdHJ1ZSk7XG4gICAgICAgIHRoaXMuc2V0KCdpc1Nlc3Npb25QYWdlJywgdHJ1ZSk7XG5cbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIGluaXQoKSB7XG4gICAgICAgIHRoaXMuX3Nlc3Npb25TZXJ2aWNlLmxvYWRTZXNzaW9uczxBcnJheTxTZXNzaW9uPj4oKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdDogQXJyYXk8U2Vzc2lvbj4pID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnB1c2hTZXNzaW9ucyhyZXN1bHQpO1xuICAgICAgICAgICAgICAgIHRoaXMub25EYXRhTG9hZGVkKCk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHB1c2hTZXNzaW9ucyhzZXNzaW9uczogQXJyYXk8U2Vzc2lvbj4pOiB2b2lkIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZXNzaW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgbmV3U2Vzc2lvbiA9IG5ldyBTZXNzaW9uVmlld01vZGVsKHNlc3Npb25zW2ldKTtcbiAgICAgICAgICAgIHRoaXMuX2FsbFNlc3Npb25zLnB1c2gobmV3U2Vzc2lvbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uRGF0YUxvYWRlZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZXQoJ2lzTG9hZGluZycsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5maWx0ZXIoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGZpbHRlcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fZmlsdGVyZWRTZXNzaW9ucyA9IHRoaXMuX2FsbFNlc3Npb25zLmZpbHRlcihzZXNzaW9uID0+IHtcbiAgICAgICAgICAgIHJldHVybiBzZXNzaW9uLnN0YXJ0RGF0ZS5nZXREYXRlKCkgPT09IGNvbmZlcmVuY2VEYXlzW3RoaXMuc2VsZWN0ZWRJbmRleF0uZGF0ZS5nZXREYXRlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkVmlld0luZGV4ID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLl9maWx0ZXJlZFNlc3Npb25zID0gdGhpcy5fZmlsdGVyZWRTZXNzaW9ucy5maWx0ZXIoc2Vzc2lvbiA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlc3Npb24uZmF2b3JpdGUgfHwgc2Vzc2lvbi5pc0JyZWFrO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm5vdGlmeSh7XG4gICAgICAgICAgICBvYmplY3Q6IHRoaXMsXG4gICAgICAgICAgICBldmVudE5hbWU6IE9ic2VydmFibGUucHJvcGVydHlDaGFuZ2VFdmVudCxcbiAgICAgICAgICAgIHByb3BlcnR5TmFtZTogJ3Nlc3Npb25zJyxcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLl9maWx0ZXJlZFNlc3Npb25zXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZWxlY3RWaWV3KGluZGV4OiBudW1iZXIsIHRpdGxlVGV4dDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRWaWV3SW5kZXggPSBpbmRleDtcblxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZFZpZXdJbmRleCA8IDIpIHtcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm5vdGlmeSh7XG4gICAgICAgICAgICBvYmplY3Q6IHRoaXMsXG4gICAgICAgICAgICBldmVudE5hbWU6IE9ic2VydmFibGUucHJvcGVydHlDaGFuZ2VFdmVudCxcbiAgICAgICAgICAgIHByb3BlcnR5TmFtZTogJ3NlbGVjdGVkVmlld0luZGV4JyxcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLnNlbGVjdGVkVmlld0luZGV4XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2V0KCdhY3Rpb25CYXJUaXRsZScsIHRpdGxlVGV4dCk7XG4gICAgICAgIHRoaXMuc2V0KCdpc1Nlc3Npb25QYWdlJywgdGhpcy5zZWxlY3RlZFZpZXdJbmRleCA8IDIpO1xuICAgIH1cblxuICAgIGdldCBzZXNzaW9ucygpOiBBcnJheTxTZXNzaW9uVmlld01vZGVsPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9maWx0ZXJlZFNlc3Npb25zO1xuICAgIH1cblxuICAgIGdldCBjb25mRGF5T3B0aW9ucygpOiBBcnJheTxDb25mZXJlbmNlRGF5PiB7XG4gICAgICAgIHJldHVybiBjb25mZXJlbmNlRGF5cztcbiAgICB9XG5cbiAgICBnZXQgc2VsZWN0ZWRJbmRleCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWRJbmRleDtcbiAgICB9XG5cbiAgICBzZXQgc2VsZWN0ZWRJbmRleCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLl9zZWxlY3RlZEluZGV4ICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fc2VsZWN0ZWRJbmRleCA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnkoe1xuICAgICAgICAgICAgICAgIG9iamVjdDogdGhpcyxcbiAgICAgICAgICAgICAgICBldmVudE5hbWU6IE9ic2VydmFibGUucHJvcGVydHlDaGFuZ2VFdmVudCxcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eU5hbWU6ICdzZWxlY3RlZEluZGV4JyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLnNldCgnZGF5SGVhZGVyJywgY29uZmVyZW5jZURheXNbdmFsdWVdLmRlc2MpO1xuICAgICAgICAgICAgdGhpcy5maWx0ZXIoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==