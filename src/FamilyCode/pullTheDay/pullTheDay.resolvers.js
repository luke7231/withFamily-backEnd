import client from '../../client';
import { protectResolver } from '../../user/user.utils';

export default {
    Mutation: {
        pullTheDay: protectResolver(async (_, __, { loggedUser }) => {
            //1.가족 찾기
            const family = await client.familyCode.findFirst({
                where: {
                    users: {
                        some: {
                            id: loggedUser.id
                        }
                    }
                }
            });
            console.log(family)
            if (!family) {
                return {
                    ok: false,
                    error: "가족 찾을 수 없음"
                }
            }
            //2. 새로운 셋째날 설정.
            const newDay3 = new Date(family.day3);
            newDay3.setDate(newDay3.getDate() + 1);
            newDay3.setHours(newDay3.getHours());
            newDay3.setMinutes(newDay3.getMinutes());
            
            //3. 그 가족에 day 설정
            await client.familyCode.update({
                where: {
                    id: loggedUser.familyCodeId
                },
                data: {
                    day1: family.day2,
                    day2: family.day3,
                    day3: newDay3,
                }
            })
            return {
                ok: true,
            }
        })
    }
}