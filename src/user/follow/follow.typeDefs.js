import { gql } from 'apollo-server-core';

export default gql`
    type Mutation {
        follow(username:String!): FollowResult
    }
    type FollowResult {
        ok: Boolean
        error: String
    }
`