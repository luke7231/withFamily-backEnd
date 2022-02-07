import client from '../../client';
import randomCode from '../../shared/familyCodeMaker';
import { protectResolver } from '../user.utils';

export default {
    Mutation: {
        createFamilyCode: protectResolver(async(_, { familyCode }, { loggedUser }) => {
            const newFamily = await client.familyCode.create({
                data: {
                    code: familyCode,
                    users: {
                        connect: {
                            id: loggedUser.id
                        }
                    }
                }
            })
            
            return newFamily;
        })
    }
}