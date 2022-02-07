import client from '../../client';
import { protectResolver } from '../../user/user.utils';

export default {
    Query: {
        checkTimeExist: protectResolver(async (_,__,{loggedUser}) => {
            const family = await client.familyCode.findFirst({
                where: {
                    users: {
                        some: {
                            id: loggedUser.id,
                        }
                    },
                },
            })

            const hours = family.hours
            if (hours) {
                return true;
            } else {
                return false;
            }

        })
    }
}