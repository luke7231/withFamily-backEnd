import { gql } from 'apollo-server-core';

export default gql`
    scalar Upload
    
    type Mutation{
        updateUser(
            name: String,
            username: String,
            password: String,
            avatar: Upload,
            bio: String,
        ) : User
    }
`