import client from '../../client';

export default {
    Answer: {
        user: ({ id }) => client.user.findFirst({
            where: {
                Answer: {
                    some: {
                        id,
                    }
                }
        }})
    }
}