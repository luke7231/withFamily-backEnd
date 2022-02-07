import client from '../../client'
import { protectResolver } from '../user.utils'

export default {
    Mutation: {
        connectFamily: protectResolver(async (_, { familyCode },{ loggedUser }) => {
            const existed = await client.familyCode.findFirst({
                where: {
                    code: familyCode,
                }
            })
            if (!existed) {
                return {
                    ok: false,
                    error: "존재하지 않는 코드입니다."
                }
            }
            await client.familyCode.update({
                where: {
                    code: familyCode
                },
                data: {
                    users: {
                        connect: {
                            id: loggedUser.id
                        }
                    }
                }
            })
            return {
                ok: true,
            }
        
        })
    }
}