import client from '../client'

export default {
    Question: {
        familyCode: async({ familyCodeId }) => {
            return await client.familyCode.findFirst({
                where: {
                    id: familyCodeId
                }
            })
        },
        answers: async({id})=> await client.answer.findMany({where:{questionId:id}}) 
    }
}