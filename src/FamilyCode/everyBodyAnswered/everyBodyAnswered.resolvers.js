import client from '../../client';
import { protectResolver } from '../../user/user.utils';

export default {
    Query: {
        everyBodyAnswered: protectResolver(async(_, __, { loggedUser }) => {
            //1.가족 찾기
            const family = await client.familyCode.findFirst({
                where: {
                    users: {
                        some: {
                            id: loggedUser.id
                        }
                    },
                },
            });
            //2. 가족수세기
            const numberOfFamily = await client.user.count({
                where: {
                    familyCodeId: family.id,
                }
            })
            console.log(numberOfFamily)
            //3. 질문찾기
            const question = await client.question.findMany({
                where: {
                    familyCodeId: family.id
                },
                orderBy: {
                    createdAt: "desc"
                },
                take: 1,
                select: {
                    answers: true
                }
            })
            if (question.length == 0) {
                return {
                    ok: true,
                    error: null
                }
            }
            //4.질문에 달린 답변의 개수와 가족 인원수 가 같은지, 같으면 true 틀리면 false
            if (numberOfFamily <= question[0].answers.length) {
                return {
                    ok: true,
                    error: null
                }
            } else {
                return {
                    ok: false,
                    error: "답변이 다 달리지 않았습니다."
                }
            }
            

        })
    }
}