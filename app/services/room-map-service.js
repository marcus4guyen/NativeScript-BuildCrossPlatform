"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var imageSourceModule = require("image-source");
exports.defaultImageSource = imageSourceModule.fromFile('~/images/rooms/conf-map.png');
function getRoomImage(roomInfo, update) {
    // simulate image loading from remote source
    setTimeout(function () {
        update(exports.defaultImageSource);
    }, 2000);
}
exports.getRoomImage = getRoomImage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vbS1tYXAtc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJvb20tbWFwLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxnREFBa0Q7QUFFckMsUUFBQSxrQkFBa0IsR0FBRyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsNkJBQTZCLENBQUMsQ0FBQztBQUU1RixzQkFBNkIsUUFBa0IsRUFBRSxNQUFzRDtJQUNuRyw0Q0FBNEM7SUFDNUMsVUFBVSxDQUFDO1FBQ1AsTUFBTSxDQUFDLDBCQUFrQixDQUFDLENBQUM7SUFDL0IsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ2IsQ0FBQztBQUxELG9DQUtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm9vbUluZm8gfSBmcm9tICd+L3NoYXJlZC9pbnRlcmZhY2VzJztcclxuaW1wb3J0ICogYXMgaW1hZ2VTb3VyY2VNb2R1bGUgZnJvbSAnaW1hZ2Utc291cmNlJztcclxuXHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0SW1hZ2VTb3VyY2UgPSBpbWFnZVNvdXJjZU1vZHVsZS5mcm9tRmlsZSgnfi9pbWFnZXMvcm9vbXMvY29uZi1tYXAucG5nJyk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um9vbUltYWdlKHJvb21JbmZvOiBSb29tSW5mbywgdXBkYXRlOiAoaWFtZ2U6IGltYWdlU291cmNlTW9kdWxlLkltYWdlU291cmNlKSA9PiB2b2lkKSB7XHJcbiAgICAvLyBzaW11bGF0ZSBpbWFnZSBsb2FkaW5nIGZyb20gcmVtb3RlIHNvdXJjZVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdXBkYXRlKGRlZmF1bHRJbWFnZVNvdXJjZSk7XHJcbiAgICB9LCAyMDAwKTtcclxufVxyXG4iXX0=