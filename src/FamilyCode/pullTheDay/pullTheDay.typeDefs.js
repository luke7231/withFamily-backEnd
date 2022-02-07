import { gql } from 'apollo-server-core';

export default gql`
    type Mutation {
        pullTheDay: Ok
    }
    type Ok {
        ok: Boolean!
        error: String
    }
`