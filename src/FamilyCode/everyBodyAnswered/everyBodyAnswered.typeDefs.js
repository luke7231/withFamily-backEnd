import { gql } from 'apollo-server-core';

export default gql`
    type Query{
        everyBodyAnswered: Ok!
    }
    type Ok{
        ok: Boolean!
        error: String
    }
`