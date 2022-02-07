import client from '../../client'
import { uploadToS3 } from '../../shared/shared.utils'

export default {
    Mutation: {
        uploadBackgroundImage: async(_, {caption, file }, { loggedUser }) => {
            const familyCode = await client.familyCode.findFirst({
                where: {
                    users: {
                        some: {
                            id: loggedUser.id
                        }
                    }
                }
            })
            if (!familyCode) {
                return {
                    ok: false,
                    error: "패밀리 코드 x"
                }
            }
            
            const fileUrl = await uploadToS3(file, loggedUser.id, '가족대표사진');
            await client.photo.create({
                data: {
                    file: fileUrl,
                    caption,
                    FamilyCode: {
                        connect: {
                            id: familyCode.id
                        }
                    },
                    User: {
                        connect: {
                            id: loggedUser.id
                        }
                    }
                }
            })
            
            return {
                ok: true,
            }

        }
    }
}