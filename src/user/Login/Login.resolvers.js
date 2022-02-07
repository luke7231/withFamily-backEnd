import client from '../../client'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
export default {
    Mutation: {
        Login: async (_, { userId, password }) => {
            const user = await client.user.findFirst({
                where: {
                    userId,
                }
            })
            if (!user) {
                return {
                    ok: false,
                    error: "유저네임 또는 비밀번호가 일치하지 않습니다."
                }
            }
            const passwordOk = await bcrypt.compare(password, user.password)
            if (!passwordOk) {
                return {
                    ok: false,
                    error: '유저네임 또는 비밀번호가 일치하지 않습니다.'
                }
            }
            const token = await jwt.sign({ id: user.id }, process.env.SECRET_KEY)
            
            return {
                ok: true,
                token  
            }
            
        }
    }
}