import axios from 'axios';
import { Platform } from 'react-native';

let url;

/**
 * Необходимо разные адреса к api для разных OS
 */
if (Platform.OS !== 'ios') {
    url = 'http://10.0.3.2:3000/api';
} else {
    url = 'http://localhost:3000/api';
}

axios.defaults.baseURL = url;

const fakeGroupId = '58e9de2d7bd9ac1feb96edd4';

class MeetupApi {
    constructor() {
        this.groupId = fakeGroupId;
        this.path = `/groups/${this.groupId}/meetups`;
    }

    async fetchGroupMeetups() {
        try {
            const {data} = await axios.get(this.path);

            return data.meetups;
        }catch(e) {
            throw e;
        }
    }

    async createGroupMeetups(args) {
        try {
            const res = await axios.post(`${this.path}/new`, { ...args });
            return res;
        } catch (e) {
            throw e;
        }
    }
}

export {
    MeetupApi
};

class UserApi {
    constructor() {
        this.path = '/users';
    }

    async login(args) {
        try {
            const { data } = await axios.post(`${this.path}/auth0`, args);
            return data;
        } catch (e) {
            throw e;
        }
    }
}

export const User = new UserApi();