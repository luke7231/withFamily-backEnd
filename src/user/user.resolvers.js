import client from '../client';

export default {
    User: {
        familyCode: async ({ id }) => { 
            const familyCode = await client.familyCode.findFirst({
                where: {
                    users: {
                        some: {
                            id,
                        }
                    }
                }
            })
            return familyCode;
        }
    }
}