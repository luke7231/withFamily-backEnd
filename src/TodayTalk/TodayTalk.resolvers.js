import client from '../client';

export default {
    TodayTalk: {
        user: async ({ id }) => client.user.findFirst({
            where: {
                TodayTalk: {
                    some: {
                        id,
                    }
                }
            }
        })
    }
}