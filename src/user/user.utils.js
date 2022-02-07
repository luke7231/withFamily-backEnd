import jwt from 'jsonwebtoken'
import client from '../client'


export const getUser = async(token) => {
    if (!token) {
        return null;
    }
    try {
        const { id } = await jwt.verify(token, process.env.SECRET_KEY)
        const user = await client.user.findUnique({ where: { id } })
        if (user) {
            return user
        } else {
            return null;
        }
    } catch {
        return null;
    }
}
export const getFamily = async (code) => {
    if (!code) {
        return null;
    }
    
}

export function protectResolver(ourResolver){
    return function (root, args, context, info) {
        const query = info.operation.operation === "query"
        if (query) {
            if (!context.loggedUser) {
                throw new Error("로그인을 하셔야만 권한이 생깁니다.")
            }
        } else {
            if (!context.loggedUser) {
                return {
                    ok: false,
                    error: "로그인을 하셔야만 권한이 생깁니다.",
                }
            }
        }
        
        return ourResolver(root, args, context, info)
    }
    
}
