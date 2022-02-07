import client from '../../client'
import { protectResolver } from '../user.utils'

export default {
    Mutation: {
        updatePushToken: protectResolver((async (_,{pushToken},{loggedUser}) => {
            const updatedUser = await client.user.update({
                where: {
                    id: loggedUser.id

                },
                data: {
                    pushToken,
                }
            })
            return updatedUser;
        }))
    }
}