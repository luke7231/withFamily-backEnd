import client from '../client'

export default {
    Query: {
        seeFamily: async(_,__,{loggedUser}) => {
            const familyCode = await client.familyCode.findFirst({
                where: {
                    users: {
                        some: {
                            id: loggedUser.id
                        }
                    }
                },
                include: {
                    users: true
                }
            })
            return familyCode.users
        }
    }
}