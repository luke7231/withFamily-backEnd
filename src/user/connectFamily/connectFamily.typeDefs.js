import { gql } from 'apollo-server-core';

export default gql`
    type Mutation {
        connectFamily(familyCode: String!): Ok
    }
    type Ok {
        ok: Boolean
        error: String
    }
`