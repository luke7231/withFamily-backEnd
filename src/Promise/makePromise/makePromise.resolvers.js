import client from '../../client';
import { protectResolver } from '../../user/user.utils';

export default {
    Mutation: {
        makePromise: protectResolver(async (_, { participants,payload, title, date },{loggedUser}) => {
            const family = await client.familyCode.findFirst({
                where: {
                    users: {
                        some: {
                            id: loggedUser.id
                        }
                    }
                }
            })

            const newPromise = await client.promise.create({
                data: {
                    title,
                    date,
                    payload,
                    familyCode: {
                        connect: {
                            id: family.id
                        }
                    },
                    user: {
                        connect: {
                            id: loggedUser.id
                        }
                    },
                    timeOver: false,
                    participants,
                }
            })
            return {
                ok: true,
                error: null,
            };
        })
    }
}