import client from '../../client';
import { protectResolver } from '../user.utils';

export default {
    Mutation: {
        unfollow: protectResolver(async(_, { username }, { loggedUser }) => {
            const ok = await client.user.findUnique({
                where: {
                    username
                }
            })
            if (!ok) {
                return {
                    ok: false,
                    error: "유저를 찾을 수 없습니다."
                }
            }

            await client.user.update({
                where: {
                    id: loggedUser.id
                },
                data: {
                    subscribing: {
                        disconnect: {
                            username,
                        }
                    }
                }
            })
            return {
                ok: true,
                error: ""
            }
            
        })
    }
}