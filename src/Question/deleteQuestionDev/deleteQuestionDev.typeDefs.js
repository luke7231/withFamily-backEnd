import { gql } from 'apollo-server-core';

export default gql`
    type Mutation {
        deleteQuestionDev(id:Int!, masterId:Int!): Ok
    }
    type Ok{
        ok: Boolean!
        error: String
    }
`