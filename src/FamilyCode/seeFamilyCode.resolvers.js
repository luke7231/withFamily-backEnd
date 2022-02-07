import client from '../client';

export default {
    Query: {
        seeFamilyCode: async (_, __, { loggedUser }) => await client.familyCode.findFirst({
            where: {
                users: {
                    some: {
                        id: loggedUser.id
                    }
                }
            },include:{photos:true} // 이거 안해주면 null남
        })
    }
}