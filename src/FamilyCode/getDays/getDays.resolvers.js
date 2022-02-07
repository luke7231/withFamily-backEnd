import client from '../../client';
import { protectResolver } from '../../user/user.utils';

export default {
    Query: {
        getDays: protectResolver(async(_, __, { loggedUser }) => {
            const family = await client.familyCode.findFirst({
                where: {
                    users: {
                        some: {
                            id: loggedUser.id
                        }
                    },
                }
            })
            
            if (!family) {
                return {
                    ok: false,
                    error: 'Cannot find familycode'
                }
            }
            return {
                ok: true,
                day1: family.day1,
                day2: family.day2,
                day3: family.day3
            }

        })
    }
}