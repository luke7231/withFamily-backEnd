import client from '../../client'
import { uploadToS3 } from '../../shared/shared.utils'

export default {
    Mutation: {
        answering: async (_, { payload, file, questionId }, { loggedUser }) => {
            let fileUrl = null
            if (file) {
                fileUrl = await uploadToS3(file, loggedUser.id, "PhotoOfAnswer")
            }
            
            await client.answer.create({
                data: {
                    payload,
                    question: {
                        connect: {
                            id: questionId,
                        }
                    },
                    file: fileUrl,
                    user: {
                        connect: {
                            id: loggedUser.id,
                        }
                    }
                }
            })
            return {
                ok: true,
                error: null
            }
        }
    }
}