import client from '../../client';
import { uploadToS3 } from '../../shared/shared.utils';
import { protectResolver } from '../../user/user.utils';

export default {
    Mutation: {
        updateAnswer: protectResolver(async (_, { id, payload, file }, { loggedUser }) => {
            let fileUrl = null;
            if (file) {
                fileUrl = await uploadToS3(file, loggedUser.id, "PhotoOfAnswer")
            }
            const family = await client.familyCode.findFirst({
                where: {
                    users: {
                        some: {
                            id: loggedUser.id
                        }
                    }
                }
            })
            if (!family) {
                return {
                    ok: false,
                    error: "가족을 찾을 수 없습니다."
                }
            }
            await client.answer.update({
                where: {
                    id,
                },
                data: {
                    payload,
                    file: fileUrl,
                }
            })
            return {
                ok: true,
                error: null,
            }
        })
    }
}