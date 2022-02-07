import client from '../../client';
import { protectResolver } from '../../user/user.utils';

export default {
    Mutation: {
        changeDay3: protectResolver(async(_, __, { loggedUser}) => {
            //1.가족찾고
            const family = await client.familyCode.findFirst({
                where: {
                    users: {
                        some: {
                            id: loggedUser.id,
                        }
                    }
                }
            })
            //2.가족 시간 가져오기
            const hours = family.hours;
            const minutes = family.minutes;

            const newDay3 = new Date();
            newDay3.setDate(newDay3.getDate() + 1);
            newDay3.setHours(hours);
            newDay3.setMinutes(minutes);
            
            await client.familyCode.update({
                where: {
                    id: family.id
                },
                data: {
                    day3: newDay3,
                }

            })
            console.log(family.day3)
            return {
                ok: true,
                error: null
            }
        })
    }
}