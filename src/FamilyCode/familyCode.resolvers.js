import client from '../client'

export default {
    FamilyCode: {
        users: async ({ id }) => await client.user.findMany({ where: { familyCodeId: id } }),
        questions: async ({id}) => await client.question.findMany({where:{familyCodeId:id}}),
    }
}