"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var favouriteServiceModule = require("~/services/favorite-service");
var SessionViewModel = /** @class */ (function (_super) {
    __extends(SessionViewModel, _super);
    function SessionViewModel(source) {
        var _this = _super.call(this) || this;
        if (source) {
            _this._session = source;
            _this._startDate = _this.fixDate(new Date(source.start));
            _this._endDate = _this.fixDate(new Date(source.end));
        }
        return _this;
    }
    SessionViewModel.prototype.toggleFavorite = function () {
        this.favorite = !this.favorite;
        if (!this.favorite) {
            favouriteServiceModule.addToFavourites(this);
        }
        else {
            favouriteServiceModule.removeFromFavourites(this);
        }
    };
    SessionViewModel.prototype.fixDate = function (date) {
        return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
    };
    Object.defineProperty(SessionViewModel.prototype, "id", {
        get: function () {
            return this._session.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SessionViewModel.prototype, "title", {
        get: function () {
            return this._session.title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SessionViewModel.prototype, "start", {
        get: function () {
            return this._session.start;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SessionViewModel.prototype, "end", {
        get: function () {
            return this._session.end;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SessionViewModel.prototype, "startDate", {
        get: function () {
            return this._startDate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SessionViewModel.prototype, "endDate", {
        get: function () {
            return this._endDate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SessionViewModel.prototype, "range", {
        get: function () {
            var startMinutes = this.startDate.getMinutes() + '';
            var endMinutes = this.endDate.getMinutes() + '';
            var startAM = this.startDate.getHours() < 12 ? 'am' : 'pm';
            var endAM = this.endDate.getHours() < 12 ? 'am' : 'pm';
            var startHours = (this.startDate.getHours() <= 12 ? this.startDate.getHours() : this.startDate.getHours() - 12) + '';
            var endHours = (this.endDate.getHours() <= 12 ? this.endDate.getHours() : this.endDate.getHours() - 12) + '';
            return (startHours.length === 1 ? '0' + startHours : startHours) + ':' + (startMinutes.length === 1 ? '0' + startMinutes : startMinutes) + startAM +
                ' - ' + (endHours.length === 1 ? '0' + endHours : endHours) + ':' + (endMinutes.length === 1 ? '0' + endMinutes : endMinutes) + endAM;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SessionViewModel.prototype, "room", {
        get: function () {
            if (this._session.room) {
                return this._session.room;
            }
            if (this._session.roomInfo) {
                return this._session.roomInfo.name;
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SessionViewModel.prototype, "roomInfo", {
        get: function () {
            return this._session.roomInfo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SessionViewModel.prototype, "speakers", {
        get: function () {
            return this._session.speakers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SessionViewModel.prototype, "description", {
        get: function () {
            return this._session.description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SessionViewModel.prototype, "descriptionShort", {
        get: function () {
            if (this.description.length > 160) {
                return this.description.substr(0, 160) + '...';
            }
            else {
                return this.description;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SessionViewModel.prototype, "calendarEventId", {
        get: function () {
            return this._session.calendarEventId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SessionViewModel.prototype, "isBreak", {
        get: function () {
            return this._session.isBreak;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SessionViewModel.prototype, "favorite", {
        get: function () {
            return this._favorite;
        },
        set: function (value) {
            if (this._favorite !== value && !this._session.isBreak) {
                this._favorite = value;
                this.notify({
                    object: this,
                    eventName: observable_1.Observable.propertyChangeEvent,
                    propertyName: 'favorite',
                    value: this._favorite
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    return SessionViewModel;
}(observable_1.Observable));
exports.SessionViewModel = SessionViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2Vzc2lvbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTZDO0FBRzdDLG9FQUFzRTtBQUV0RTtJQUFzQyxvQ0FBVTtJQU81QywwQkFBWSxNQUFnQjtRQUE1QixZQUNJLGlCQUFPLFNBUVY7UUFORyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ1QsS0FBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7WUFFdkIsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3ZELEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN2RCxDQUFDOztJQUNMLENBQUM7SUFFTSx5Q0FBYyxHQUFyQjtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBRS9CLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDakIsc0JBQXNCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pELENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLHNCQUFzQixDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RELENBQUM7SUFDTCxDQUFDO0lBRU8sa0NBQU8sR0FBZixVQUFnQixJQUFVO1FBQ3RCLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQ2xKLENBQUM7SUFFRCxzQkFBSSxnQ0FBRTthQUFOO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO1FBQzVCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksbUNBQUs7YUFBVDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztRQUMvQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLG1DQUFLO2FBQVQ7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFDL0IsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxpQ0FBRzthQUFQO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDO1FBQzdCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksdUNBQVM7YUFBYjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNCLENBQUM7OztPQUFBO0lBRUQsc0JBQUkscUNBQU87YUFBWDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3pCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksbUNBQUs7YUFBVDtZQUNJLElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLEdBQUcsRUFBRSxDQUFDO1lBQ3RELElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLEdBQUcsRUFBRSxDQUFDO1lBQ2xELElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUM3RCxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFFekQsSUFBTSxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDdkgsSUFBTSxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUM7WUFFL0csTUFBTSxDQUFDLENBQUMsVUFBVSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsR0FBRyxPQUFPO2dCQUMxSSxLQUFLLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUNsSixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGtDQUFJO2FBQVI7WUFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUM5QixDQUFDO1lBRUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUN6QixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ3ZDLENBQUM7WUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksc0NBQVE7YUFBWjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztRQUNsQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHNDQUFRO2FBQVo7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7UUFDbEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSx5Q0FBVzthQUFmO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDO1FBQ3JDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksOENBQWdCO2FBQXBCO1lBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDaEMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7WUFDbkQsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQzVCLENBQUM7UUFDTCxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDZDQUFlO2FBQW5CO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDO1FBQ3pDLENBQUM7OztPQUFBO0lBQ0Qsc0JBQUkscUNBQU87YUFBWDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztRQUNqQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHNDQUFRO2FBQVo7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDO2FBRUQsVUFBYSxLQUFjO1lBQ3ZCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEtBQUssS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNyRCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztnQkFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQztvQkFDUixNQUFNLEVBQUUsSUFBSTtvQkFDWixTQUFTLEVBQUUsdUJBQVUsQ0FBQyxtQkFBbUI7b0JBQ3pDLFlBQVksRUFBRSxVQUFVO29CQUN4QixLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVM7aUJBQ3hCLENBQUMsQ0FBQztZQUNQLENBQUM7UUFDTCxDQUFDOzs7T0FaQTtJQWFMLHVCQUFDO0FBQUQsQ0FBQyxBQTNIRCxDQUFzQyx1QkFBVSxHQTJIL0M7QUEzSFksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XHJcblxyXG5pbXBvcnQgeyBTZXNzaW9uLCBTcGVha2VyLCBSb29tSW5mbyB9IGZyb20gJy4uLy4uL3NoYXJlZC9pbnRlcmZhY2VzJztcclxuaW1wb3J0ICogYXMgZmF2b3VyaXRlU2VydmljZU1vZHVsZSBmcm9tICd+L3NlcnZpY2VzL2Zhdm9yaXRlLXNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNlc3Npb25WaWV3TW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIGltcGxlbWVudHMgU2Vzc2lvbiB7XHJcblxyXG4gICAgcHJpdmF0ZSBfc2Vzc2lvbjogU2Vzc2lvbjtcclxuICAgIHByaXZhdGUgX2Zhdm9yaXRlOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBfc3RhcnREYXRlOiBEYXRlO1xyXG4gICAgcHJpdmF0ZSBfZW5kRGF0ZTogRGF0ZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihzb3VyY2U/OiBTZXNzaW9uKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgaWYgKHNvdXJjZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9zZXNzaW9uID0gc291cmNlO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fc3RhcnREYXRlID0gdGhpcy5maXhEYXRlKG5ldyBEYXRlKHNvdXJjZS5zdGFydCkpO1xyXG4gICAgICAgICAgICB0aGlzLl9lbmREYXRlID0gdGhpcy5maXhEYXRlKG5ldyBEYXRlKHNvdXJjZS5lbmQpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvZ2dsZUZhdm9yaXRlKCkge1xyXG4gICAgICAgIHRoaXMuZmF2b3JpdGUgPSAhdGhpcy5mYXZvcml0ZTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmZhdm9yaXRlKSB7XHJcbiAgICAgICAgICAgIGZhdm91cml0ZVNlcnZpY2VNb2R1bGUuYWRkVG9GYXZvdXJpdGVzKHRoaXMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZhdm91cml0ZVNlcnZpY2VNb2R1bGUucmVtb3ZlRnJvbUZhdm91cml0ZXModGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZml4RGF0ZShkYXRlOiBEYXRlKTogRGF0ZSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUuZ2V0VVRDRnVsbFllYXIoKSwgZGF0ZS5nZXRVVENNb250aCgpLCBkYXRlLmdldFVUQ0RhdGUoKSwgZGF0ZS5nZXRVVENIb3VycygpLCBkYXRlLmdldFVUQ01pbnV0ZXMoKSwgZGF0ZS5nZXRVVENTZWNvbmRzKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpZCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXNzaW9uLmlkO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB0aXRsZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXNzaW9uLnRpdGxlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXQgc3RhcnQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2Vzc2lvbi5zdGFydDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZW5kKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Nlc3Npb24uZW5kO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzdGFydERhdGUoKTogRGF0ZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXJ0RGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZW5kRGF0ZSgpOiBEYXRlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZW5kRGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcmFuZ2UoKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCBzdGFydE1pbnV0ZXMgPSB0aGlzLnN0YXJ0RGF0ZS5nZXRNaW51dGVzKCkgKyAnJztcclxuICAgICAgICBjb25zdCBlbmRNaW51dGVzID0gdGhpcy5lbmREYXRlLmdldE1pbnV0ZXMoKSArICcnO1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0QU0gPSB0aGlzLnN0YXJ0RGF0ZS5nZXRIb3VycygpIDwgMTIgPyAnYW0nIDogJ3BtJztcclxuICAgICAgICBjb25zdCBlbmRBTSA9IHRoaXMuZW5kRGF0ZS5nZXRIb3VycygpIDwgMTIgPyAnYW0nIDogJ3BtJztcclxuXHJcbiAgICAgICAgY29uc3Qgc3RhcnRIb3VycyA9ICh0aGlzLnN0YXJ0RGF0ZS5nZXRIb3VycygpIDw9IDEyID8gdGhpcy5zdGFydERhdGUuZ2V0SG91cnMoKSA6IHRoaXMuc3RhcnREYXRlLmdldEhvdXJzKCkgLSAxMikgKyAnJztcclxuICAgICAgICBjb25zdCBlbmRIb3VycyA9ICh0aGlzLmVuZERhdGUuZ2V0SG91cnMoKSA8PSAxMiA/IHRoaXMuZW5kRGF0ZS5nZXRIb3VycygpIDogdGhpcy5lbmREYXRlLmdldEhvdXJzKCkgLSAxMikgKyAnJztcclxuXHJcbiAgICAgICAgcmV0dXJuIChzdGFydEhvdXJzLmxlbmd0aCA9PT0gMSA/ICcwJyArIHN0YXJ0SG91cnMgOiBzdGFydEhvdXJzKSArICc6JyArIChzdGFydE1pbnV0ZXMubGVuZ3RoID09PSAxID8gJzAnICsgc3RhcnRNaW51dGVzIDogc3RhcnRNaW51dGVzKSArIHN0YXJ0QU0gK1xyXG4gICAgICAgICAgICAgICAgJyAtICcgKyAoZW5kSG91cnMubGVuZ3RoID09PSAxID8gJzAnICsgZW5kSG91cnMgOiBlbmRIb3VycykgKyAnOicgKyAoZW5kTWludXRlcy5sZW5ndGggPT09IDEgPyAnMCcgKyBlbmRNaW51dGVzIDogZW5kTWludXRlcykgKyBlbmRBTTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcm9vbSgpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICh0aGlzLl9zZXNzaW9uLnJvb20pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Nlc3Npb24ucm9vbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9zZXNzaW9uLnJvb21JbmZvKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zZXNzaW9uLnJvb21JbmZvLm5hbWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcm9vbUluZm8oKTogUm9vbUluZm8ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXNzaW9uLnJvb21JbmZvO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzcGVha2VycygpOiBBcnJheTxTcGVha2VyPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Nlc3Npb24uc3BlYWtlcnM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGRlc2NyaXB0aW9uKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Nlc3Npb24uZGVzY3JpcHRpb247XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGRlc2NyaXB0aW9uU2hvcnQoKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAodGhpcy5kZXNjcmlwdGlvbi5sZW5ndGggPiAxNjApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb24uc3Vic3RyKDAsIDE2MCkgKyAnLi4uJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNhbGVuZGFyRXZlbnRJZCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXNzaW9uLmNhbGVuZGFyRXZlbnRJZDtcclxuICAgIH1cclxuICAgIGdldCBpc0JyZWFrKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXNzaW9uLmlzQnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGZhdm9yaXRlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9mYXZvcml0ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgZmF2b3JpdGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAodGhpcy5fZmF2b3JpdGUgIT09IHZhbHVlICYmICF0aGlzLl9zZXNzaW9uLmlzQnJlYWspIHtcclxuICAgICAgICAgICAgdGhpcy5fZmF2b3JpdGUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5ub3RpZnkoe1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLFxyXG4gICAgICAgICAgICAgICAgZXZlbnROYW1lOiBPYnNlcnZhYmxlLnByb3BlcnR5Q2hhbmdlRXZlbnQsXHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eU5hbWU6ICdmYXZvcml0ZScsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5fZmF2b3JpdGVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19