import client from '../../client';
import { protectResolver } from '../../user/user.utils';

export default {
    Mutation: {
        deleteAnswer: protectResolver(async (_, { id }) => {
            await client.answer.delete({
                where: {
                    id,
                },
            })
            return {
                ok: true,
                error: null,
            }
        })
    }
}