import client from '../../client';
import { checkElapsed } from '../../shared/checkElapsed';
import { protectResolver } from '../../user/user.utils';

export default {
    Query: {
        seePromiseFeed: protectResolver(async (_, __, { loggedUser }) => {
            const family = await client.familyCode.findFirst({
                where: {
                    users: {
                        some: {
                            id: loggedUser.id
                        }
                    }
                },
            })
            const promises = await client.promise.findMany({
                where: {
                    familyCodeId: family.id
                }, orderBy: {
                    createdAt: "desc"
                }
            })
            
            const newArr = promises.map((exData) => {
                if (checkElapsed(exData.date)) {
                    return {
                        ...exData,
                        elapsed: true,
                    }
                } return {
                    ...exData,
                    elapsed: false,
                }
            })
            console.log(newArr, "newOne")
            console.log(promises)
            return newArr;
        })
    }
}