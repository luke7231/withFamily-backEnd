import { gql } from 'apollo-server-core';

export default gql`
    type Mutation{
        deleteAnswer(id: Int!): Ok!
    }
    type Ok{
        ok: Boolean!
        error: String
    }

`