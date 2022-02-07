import client from '../client';
import { protectResolver } from '../user/user.utils';

export default {
    Mutation: {
        requestQuetion: protectResolver(async(_,__,{loggedUser}) => {
            //1. 가족찾기
            const family = await client.familyCode.findFirst({
                where: {
                    users: {
                        some: {
                            id: loggedUser.id
                        }
                    }
                }
            })
            //2. 이미 갖고있는 질문 몇갠지 세기
            const numberOfExQuestion = await client.question.count({
                where: {
                    familyCodeId: family.id
                }
            })
            console.log('갖고있는 수:', numberOfExQuestion); 
            
            //3. 리스트에서 질문가져오기
            const questionPayload = await client.questionList.findFirst({
                skip: numberOfExQuestion
            })
            console.log('갖고온 질문:', questionPayload)
            
            //4. 질문만들기
            const question = await client.question.create({
                data: {
                    payload: questionPayload.payloads,
                    FamilyCode: {
                        connect: {
                            id: family.id
                        }
                    }
                }
            })
            return question;
        })
    }
}