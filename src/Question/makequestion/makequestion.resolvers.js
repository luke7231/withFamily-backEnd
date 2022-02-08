import client from '../../client'

export default {
    Mutation: {
        makequestion: async (_,{payloads}) => {
            const newQuestion = await client.questionList.create({
                data: {
                    payloads: payloads
                }
            })
            if (newQuestion) {
                return {
                    ok: true,
                    error: null,
                }
            } else {
                return {
                    ok: false,
                    error: "에러"
                }
            }
        }
    }
}