import { gql } from 'apollo-server';

export default gql`
    scalar Upload

    type CreateAccountResult{
        ok: Boolean!
        error: String
        token: String
    }

    type Mutation{
        createAccount(
            userId: String!
            username:String!,
            password: String!,
            avatar:Upload,
            bio:String
        ) : CreateAccountResult!
    }
    
`