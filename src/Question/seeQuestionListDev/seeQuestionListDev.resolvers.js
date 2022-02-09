import client from '../../client';

export default {
    Query: {
        seeQuestionListDev: async (_, { masterId, page }) => {
            const masterKey = 7299;
            const allQuestion = await client.questionList.findMany({
                skip: ((page - 1) * 20),
                take: 20,
            })
            if (masterKey == masterId) {
                return allQuestion;
            } else {
                return null;
            }
        }
    }
}