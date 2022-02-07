import client from '../../client';

export default {
    Query: {
        SeeUser: (_, { id }) => client.user.findFirst({
            where: {
                id,
            }
        })
    }
}