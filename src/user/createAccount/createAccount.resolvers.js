import client from '../../client'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export default {
    Mutation: {
        createAccount: async (_, { userId, username, password, avatar, bio }) => {
            const exUser = await client.user.findFirst({
                where: {
                    userId,
                }
            })
            console.log(exUser)
            if (exUser) {
                return {
                    ok: false,
                    error: "이미 존재하는 아이디입니다.",
                    token: null
                }
            }
            const hashPassword = await bcrypt.hash(password, 10)
            
            const newUser = await client.user.create({
                data: {
                    userId,
                    username,
                    password: hashPassword,
                    avatar,
                    bio,
                }
            })
            const token = await jwt.sign({ id: newUser.id }, process.env.SECRET_KEY)
            return {
                ok: true,
                token,
            }
        }
    }
}