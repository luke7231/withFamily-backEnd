import { gql } from 'apollo-server-core';

export default gql`
    type Mutation {
        makequestion(payloads:String!): Ok 
    }
    type Ok {
        ok: Boolean!
        error: String

    }
`