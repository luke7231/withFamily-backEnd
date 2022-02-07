import client from '../client';

export default {
    TodayTalkContainer: {
        todayTalks: ({ id }) => client.todayTalk.findMany({
            where: {
            todayTalkContainerId: id
        }})
    }
}