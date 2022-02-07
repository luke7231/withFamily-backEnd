import client from '../../client'

export default {
    Query: {
        searchUser: async (_, { keyword, page }) => await client.user.findMany({
                where: {
                    username: {
                        startsWith: keyword
                    }
                },
                skip: (page - 1) * 5,
                take: 5
            })
        }
    
}