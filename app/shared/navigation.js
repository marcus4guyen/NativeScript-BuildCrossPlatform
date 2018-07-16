"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var frameModule = require("ui/frame");
function startingPage() {
    return 'pages/main-page/main-page';
}
exports.startingPage = startingPage;
function gotoSessionPage(session) {
    frameModule.topmost().navigate({
        moduleName: 'pages/session-page/session-page',
        context: session
    });
}
exports.gotoSessionPage = gotoSessionPage;
function goBack() {
    frameModule.topmost().goBack();
}
exports.goBack = goBack;
function goToPageByFunction(factoryFunc) {
    frameModule.topmost().navigate(factoryFunc);
}
exports.goToPageByFunction = goToPageByFunction;
function goToRoomMapPage(sessionViewModel) {
    frameModule.topmost().navigate({
        moduleName: 'pages/map-page/map-page',
        context: sessionViewModel,
        transition: {
            name: 'fade',
            duration: 1000,
            curve: 'easeIn'
        }
    });
}
exports.goToRoomMapPage = goToRoomMapPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5hdmlnYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0M7QUFFeEM7SUFDSSxNQUFNLENBQUMsMkJBQTJCLENBQUM7QUFDdkMsQ0FBQztBQUZELG9DQUVDO0FBRUQseUJBQWdDLE9BQU87SUFDbkMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztRQUMzQixVQUFVLEVBQUUsaUNBQWlDO1FBQzdDLE9BQU8sRUFBRSxPQUFPO0tBQ25CLENBQUMsQ0FBQztBQUNQLENBQUM7QUFMRCwwQ0FLQztBQUVEO0lBQ0ksV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ25DLENBQUM7QUFGRCx3QkFFQztBQUVELDRCQUFtQyxXQUFXO0lBQzFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDaEQsQ0FBQztBQUZELGdEQUVDO0FBRUQseUJBQWdDLGdCQUFnQjtJQUM1QyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDO1FBQzNCLFVBQVUsRUFBRSx5QkFBeUI7UUFDckMsT0FBTyxFQUFFLGdCQUFnQjtRQUN6QixVQUFVLEVBQUU7WUFDUixJQUFJLEVBQUUsTUFBTTtZQUNaLFFBQVEsRUFBRSxJQUFJO1lBQ2QsS0FBSyxFQUFFLFFBQVE7U0FDbEI7S0FDSixDQUFDLENBQUE7QUFDTixDQUFDO0FBVkQsMENBVUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBmcmFtZU1vZHVsZSBmcm9tICd1aS9mcmFtZSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRpbmdQYWdlKCkge1xyXG4gICAgcmV0dXJuICdwYWdlcy9tYWluLXBhZ2UvbWFpbi1wYWdlJztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdvdG9TZXNzaW9uUGFnZShzZXNzaW9uKSB7XHJcbiAgICBmcmFtZU1vZHVsZS50b3Btb3N0KCkubmF2aWdhdGUoe1xyXG4gICAgICAgIG1vZHVsZU5hbWU6ICdwYWdlcy9zZXNzaW9uLXBhZ2Uvc2Vzc2lvbi1wYWdlJyxcclxuICAgICAgICBjb250ZXh0OiBzZXNzaW9uXHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdvQmFjaygpIHtcclxuICAgIGZyYW1lTW9kdWxlLnRvcG1vc3QoKS5nb0JhY2soKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdvVG9QYWdlQnlGdW5jdGlvbihmYWN0b3J5RnVuYykge1xyXG4gICAgZnJhbWVNb2R1bGUudG9wbW9zdCgpLm5hdmlnYXRlKGZhY3RvcnlGdW5jKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdvVG9Sb29tTWFwUGFnZShzZXNzaW9uVmlld01vZGVsKSB7XHJcbiAgICBmcmFtZU1vZHVsZS50b3Btb3N0KCkubmF2aWdhdGUoe1xyXG4gICAgICAgIG1vZHVsZU5hbWU6ICdwYWdlcy9tYXAtcGFnZS9tYXAtcGFnZScsXHJcbiAgICAgICAgY29udGV4dDogc2Vzc2lvblZpZXdNb2RlbCxcclxuICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdmYWRlJyxcclxuICAgICAgICAgICAgZHVyYXRpb246IDEwMDAsXHJcbiAgICAgICAgICAgIGN1cnZlOiAnZWFzZUluJ1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuIl19