import { uploadToS3 } from '../../shared/shared.utils';
import { protectResolver } from '../user.utils';
import bcrypt from 'bcrypt'
import client from '../../client';

export default {
    Mutation: {
        updateUser: protectResolver(async (_, { name, username, password: newPassword, avatar, bio }, { loggedUser }) => {
            let avaImage = null;

            if (avatar) {
                avaImage = await uploadToS3(avatar, loggedUser.id, "avatar") 
            }
            let uglyPassword = null;
            if (newPassword) {
                uglyPassword = await bcrypt.hash(newPassword,10)
            }
            const updateUser = await client.user.update({
                where: {
                    id: loggedUser.id
                },
                data: {
                    name,
                    username,
                    bio,
                    ...(uglyPassword && { password: uglyPassword }),
                    ...(avaImage && { avatar: avaImage })
                }
            })
            return updateUser;
        })
    }
}