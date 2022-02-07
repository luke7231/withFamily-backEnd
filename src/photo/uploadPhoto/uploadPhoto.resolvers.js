import client from '../../client';
import { uploadToS3 } from '../../shared/shared.utils';
import { protectResolver } from '../../user/user.utils';

export default {
    Mutation: {
        uploadPhoto: protectResolver(async(_, { file, caption, projectId }, { loggedUser }) => {
            let fileUrl = null
            if (file) {
                fileUrl = await uploadToS3(file, loggedUser.id, "answer")
            }
            await client.photo.create({
                data: {
                    file: fileUrl,
                    caption,
                    User: {
                        connect: {
                            id: loggedUser.id
                        }
                    },
                    
                }
            })
            return {
                ok: true,
                error: null,
            }
        })
    }
}