import client from '../../client';
import { uploadToS3 } from '../../shared/shared.utils';
import { protectResolver } from '../../user/user.utils';

export default {
    Mutation: {
        updatePromise: protectResolver(async (_, { id ,file, payload }, { loggedUser }) => {
            const fileUrl = await uploadToS3(file, loggedUser.id, "familyPromises");
            console.log(fileUrl)
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
            await client.promise.update({
                where: {
                    id,
                },
                data: {
                    file: fileUrl,
                    payload,
                }
            })
            return {
                ok: true,
                error: '사진 업로드 완료'
            }
        })
    }
}