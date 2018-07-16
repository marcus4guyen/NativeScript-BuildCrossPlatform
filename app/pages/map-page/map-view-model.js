"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var MapViewModel = /** @class */ (function (_super) {
    __extends(MapViewModel, _super);
    function MapViewModel(roomInfo) {
        var _this = _super.call(this) || this;
        _this._isLoading = false;
        _this._roomInfo = roomInfo;
        return _this;
    }
    Object.defineProperty(MapViewModel.prototype, "roomInfo", {
        get: function () {
            return this._roomInfo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapViewModel.prototype, "name", {
        get: function () {
            return this._roomInfo.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapViewModel.prototype, "isLoading", {
        get: function () {
            return this._isLoading;
        },
        set: function (value) {
            this._isLoading = value;
            this.notify({
                object: this,
                eventName: observable_1.Observable.propertyChangeEvent,
                propertyName: 'isLoading',
                value: this._isLoading
            });
        },
        enumerable: true,
        configurable: true
    });
    return MapViewModel;
}(observable_1.Observable));
exports.MapViewModel = MapViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLXZpZXctbW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYXAtdmlldy1tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUE2QztBQUk3QztJQUFrQyxnQ0FBVTtJQUN4QyxzQkFBWSxRQUFrQjtRQUE5QixZQUNJLGlCQUFPLFNBRVY7UUFHTyxnQkFBVSxHQUFZLEtBQUssQ0FBQztRQUpoQyxLQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQzs7SUFDOUIsQ0FBQztJQU1ELHNCQUFJLGtDQUFRO2FBQVo7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDhCQUFJO2FBQVI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7UUFDL0IsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxtQ0FBUzthQUFiO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDM0IsQ0FBQzthQUVELFVBQWMsS0FBYztZQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDO2dCQUNSLE1BQU0sRUFBRSxJQUFJO2dCQUNaLFNBQVMsRUFBRSx1QkFBVSxDQUFDLG1CQUFtQjtnQkFDekMsWUFBWSxFQUFFLFdBQVc7Z0JBQ3pCLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVTthQUN6QixDQUFDLENBQUM7UUFDUCxDQUFDOzs7T0FWQTtJQVdMLG1CQUFDO0FBQUQsQ0FBQyxBQS9CRCxDQUFrQyx1QkFBVSxHQStCM0M7QUEvQlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgSW1hZ2VTb3VyY2UgfSBmcm9tICdpbWFnZS1zb3VyY2UnO1xyXG5pbXBvcnQgeyBSb29tSW5mbyB9IGZyb20gJ34vc2hhcmVkL2ludGVyZmFjZXMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1hcFZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xyXG4gICAgY29uc3RydWN0b3Iocm9vbUluZm86IFJvb21JbmZvKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl9yb29tSW5mbyA9IHJvb21JbmZvO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3Jvb21JbmZvOiBSb29tSW5mbztcclxuICAgIHByaXZhdGUgX2lzTG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHVibGljIGltYWdlOiBJbWFnZVNvdXJjZTtcclxuXHJcbiAgICBnZXQgcm9vbUluZm8oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jvb21JbmZvO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBuYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jvb21JbmZvLm5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlzTG9hZGluZygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXNMb2FkaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBpc0xvYWRpbmcodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9pc0xvYWRpbmcgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLm5vdGlmeSh7XHJcbiAgICAgICAgICAgIG9iamVjdDogdGhpcyxcclxuICAgICAgICAgICAgZXZlbnROYW1lOiBPYnNlcnZhYmxlLnByb3BlcnR5Q2hhbmdlRXZlbnQsXHJcbiAgICAgICAgICAgIHByb3BlcnR5TmFtZTogJ2lzTG9hZGluZycsXHJcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLl9pc0xvYWRpbmdcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSJdfQ==