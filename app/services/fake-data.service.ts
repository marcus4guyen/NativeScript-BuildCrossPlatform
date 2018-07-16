import * as fileSystemModule from 'file-system';
import * as faker from 'faker';

import { Session, Speaker, RoomInfo, ConferenceDay, ConferenceTimeSlot } from "~/shared/interfaces";
import { conferenceDays } from '~/shared/static-data';

const NUM_SPEAKERS = 40;
const NUM_ROOM_INFOS = 10;
const SESSION_LENGTH = 60;

export function generateSpeakers(): Array<Speaker> {
    const speakerList: Array<Speaker> = [];
    const avartarsMen = getSpeakerAvatars('images/speakers/base64/men.txt');
    const avatarsWomen = getSpeakerAvatars('images/speakers/base64/women.txt');
    
    for (let i = 0; i <= NUM_SPEAKERS; i++) {
        const genderBool = faker.random.boolean();
        const genderInt = parseInt(genderBool + '');
        const firstName = faker.name.firstName(genderInt);
        const lastName = faker.name.lastName(genderInt);
        const picture = genderBool ? avartarsMen[faker.random.number(avartarsMen.length - 1)] : avatarsWomen[faker.random.number(avatarsWomen.length - 1)];

        const speaker: Speaker = {
            id: faker.random.uuid(),
            name: firstName + ' ' + lastName,
            title: faker.name.jobTitle(),
            company: faker.company.companyName(),
            picture: picture,
            twitterName: '@' + faker.internet.userName(firstName, lastName)
        };

        speakerList.push(speaker);
    }

    return speakerList;
    
}

export function generateRoomInfos(): Array<RoomInfo> {
    const roomInfoList: Array<RoomInfo> = [];

    for (let i = 0; i <= NUM_ROOM_INFOS; i++) {
        const roomInfo: RoomInfo = {
            roomId: faker.random.uuid(),
            name: faker.address.streetName() + ' ' + faker.random.number(10),
            url: faker.internet.domainName(),
            theme: faker.lorem.words(1)
        };

        roomInfoList.push(roomInfo);
    }

    return roomInfoList;
}

export function generateSessions(speakers: Array<Speaker>, roomInfos: Array<RoomInfo>): Array<Session> {
    const sessionList: Array<Session> = [];
    let idSeed = 1000;

    for (let conferenceDay of conferenceDays) {
        const timeSlots = generateTimeSlots(conferenceDay);

        for (let conferenceTimeSlot of timeSlots) {
            if (conferenceTimeSlot.isBreak) {
                // break session
                const session: Session = {
                    id: (idSeed++).toString(),
                    title: toTitleCase(conferenceTimeSlot.title),
                    isBreak: true,
                    start: conferenceTimeSlot.start.toString(),
                    end: conferenceTimeSlot.end.toString(),
                    room: '',
                    roomInfo: null,
                    speakers: [],
                    description: '',
                    descriptionShort: '',
                    calendarEventId: ''
                };

                sessionList.push(session);
            } else {
                //speaker session
                const subSpeakers = getRandomArrayElements(speakers, faker.random.number(3));
                const roomInfo = roomInfos[faker.random.number(roomInfos.length - 1)];

                const session: Session = {
                    id: (idSeed++).toString(),
                    title: toTitleCase(faker.company.bs()),
                    isBreak: false,
                    start: conferenceTimeSlot.start.toString(),
                    end: conferenceTimeSlot.end.toString(),
                    room: roomInfo.name,
                    roomInfo: roomInfo,
                    speakers: subSpeakers,
                    description: faker.lorem.paragraph(),
                    descriptionShort: faker.lorem.sentence(),
                    calendarEventId: faker.random.uuid()
                };

                sessionList.push(session);
            }
        }
    }

    return sessionList;
}

function getSpeakerAvatars(path) {
    const avatarList: Array<string> = [];
    const currentAppFoler = fileSystemModule.knownFolders.currentApp();
    const menAvatarsFile = currentAppFoler.getFile(path);
    const fileText = menAvatarsFile.readTextSync();

    const lines = fileText.split('\n');

    for (let i = 0; i < lines.length; i++) {
        avatarList.push('data:image/png;base64,' + lines[i]);
    }

    return avatarList;
}

function generateTimeSlots(conferenceDay: ConferenceDay): Array<ConferenceTimeSlot> {
    const timeSlotList: Array<ConferenceTimeSlot> = [];
    const startTimeList = getTimeRange(addMinutes(conferenceDay.date, 240), addMinutes(conferenceDay.date, 780), SESSION_LENGTH);

    for (let startTime of startTimeList) {
        let isBreak = false;
        let sessionTitle = '';

        if (startTime.getHours() === 4) {
            isBreak = true;
            sessionTitle = 'Welcome Message';
        } else if (startTime.getHours() === 8) {
            isBreak = true;
            sessionTitle = 'Lunch Break';
        }

        const cTimeSlot: ConferenceTimeSlot = {
            title: sessionTitle,
            isBreak: isBreak,
            start: startTime,
            end: addMinutes(startTime, SESSION_LENGTH)
        };

        timeSlotList.push(cTimeSlot);
    }


    return timeSlotList;
}

function getTimeRange(startTime: Date, endTime: Date, minutesBetween: number): Array<Date> {
    const startTimeList: Array<Date> = [];
    const diffInMinutes = Math.round((endTime.getTime() - startTime.getTime()) / 60000);
    const periods: number = diffInMinutes / minutesBetween;

    for (let i = 0; i <= periods; i++) {
        const periodStart = addMinutes(startTime, (minutesBetween * i));
        startTimeList.push(periodStart);
    }

    return startTimeList;
}

function addMinutes(date: Date, minutes: number) {
    return new Date(date.getTime() + minutes * 60000);
}

function getRandomArrayElements(arr, count) {
    let shuffled = arr.slice(0),
    i = arr.length,
    min = i - count,
    temp,
    index;

    while(i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }

    return shuffled.slice(min);
}

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}