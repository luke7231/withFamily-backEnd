import { gql } from 'apollo-server-core';

export default gql`
    type Mutation{
        Login(userId: String!, password: String!) : LoginResult
    }
    type LoginResult{
        ok: Boolean!
        token: String
        error: String
    }
`