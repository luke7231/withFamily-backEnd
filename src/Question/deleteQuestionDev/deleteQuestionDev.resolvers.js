import client from '../../client';

export default {
    Mutation: {
        deleteQuestionDev: async (_, { id, masterId }) => {
            const masterKey = 7299;
            if (masterKey == masterId) {
                await client.questionList.delete({
                    where: {
                        id
                    }
                });
                return {
                    ok: true,
                    error: null,
                }
                
            } else {
                return {
                    ok: false,
                    error: "MasterId is not correct"
                }
            }
        }
    }
}