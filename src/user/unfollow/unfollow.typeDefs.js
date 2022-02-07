import { gql } from 'apollo-server-core';

export default gql`
    type Mutation {
        unfollow(username:String!): UnfollowResult
    }
    type UnfollowResult {
        ok: Boolean!
        error: String
    }
`