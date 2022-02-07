import client from '../../client';
import { protectResolver } from '../../user/user.utils';

export default {
    Mutation: {
        setDayAtFirst: protectResolver(async (_, { hours, minutes, day1, day2, day3 }, { loggedUser }) => {
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
            if (!family) {
                return {
                    ok: false,
                    error: "가족 찾을 수 없음"
                }
            }
            //2. 그 가족에 day 설정
            await client.familyCode.update({
                where: {
                    id: loggedUser.familyCodeId
                },
                data: {
                    hours,
                    minutes,
                    day1,
                    day2,
                    day3,
                }
            })
            console.log(hours,minutes)
            return {
                ok: true,
                hours,
                minutes,
                error: null
            }
        })
    }
}