import client from '../client';
import { protectResolver } from '../user/user.utils';

export default {
    Query: {
        checkFamilyCode: async(_, __, { loggedUser }) => {
            if (!loggedUser) {
                return false;
            }
            const familyCode = await client.familyCode.findFirst({
                where: {
                    users: {
                        some: {
                            id: loggedUser.id,
                        }
                    }
                }
            })
            if (familyCode) {
                return true;
            }
            

        } 
    }
}