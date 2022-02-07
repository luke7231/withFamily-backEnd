import client from '../../client';
import { checkElapsed } from '../../shared/checkElapsed';
import { checkOverElapsed } from '../../shared/checkOverElapsed';
import { protectResolver } from '../../user/user.utils';

export default {
    Query: {
        seeQuestionList: protectResolver(async (_, __, { loggedUser }) => {
            let elapsed = false;
            let overElapsed = false;
            // 1. 가족먼저 찾기
            const family = await client.familyCode.findFirst({
                where: {
                    users: {
                        some: {
                            id: loggedUser.id,
                        }
                    }
                }
            })
            // *. 시간 지났는지 체크하기
            const firstQuestion = family.questions[0];
            const hours = family.hours;
            const minutes = family.minutes;
            const day1 = family.day1;
            
            
            if (day1) {
                elapsed = checkElapsed(day1);
            } else {
                elapsed = true;
            }
            
            if (!firstQuestion) {
                elapsed = true;
            }
            // *. 오버하게 지났으면 3일차를 바꿔주기
            const day3 = family.day3
            if (day3) {
                overElapsed = checkOverElapsed(day3);
            }
            if (overElapsed) {
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
            }
            
            // 2. 가족의 질문 리스트 찾기
            const list = await client.question.findMany({
                where: {
                    familyCodeId: family.id,
                }, orderBy: {
                    createdAt:"desc"
                }
            })
            return {
                questions: list,
                elapsed,
                changeDay3: overElapsed,
            };
        })
    
    }
}