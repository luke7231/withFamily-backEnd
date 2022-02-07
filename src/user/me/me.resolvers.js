import client from '../../client';

export default {
    Query: {
        Me: async (_,__, { loggedUser }) => await client.user.findUnique({
            where: {
                id: loggedUser.id
            }
        })
    }
}