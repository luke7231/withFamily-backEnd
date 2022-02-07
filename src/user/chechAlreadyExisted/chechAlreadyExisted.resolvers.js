import client from '../../client'

export default {
    Query: {
        chechAlreadyExisted: async (_, { username }) => {
            const exUser = await client.user.findFirst({
                where: {
                    username,
                }
            })
            if (exUser) {
                return {
                    ok: false,
                    error:"Already Existed Username"
                }
            } else {
                return {
                    ok: true,
                }
            }
        }
    }
}