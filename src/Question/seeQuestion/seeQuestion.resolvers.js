import client from '../../client';
import { protectResolver } from '../../user/user.utils';

export default {
    Query: {
        seeQuestion: protectResolver(async (_, { id }) => {
            return await client.question.findFirst({
                where: {
                    id,
                }
            })
        })
    }
}