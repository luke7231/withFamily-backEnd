import { gql } from 'apollo-server-core';

export default gql`
    scalar Upload

    type Mutation {
        answering(payload:String, file:Upload, questionId:Int!) : Ok
    }
    type Ok {
        ok: Boolean
        error: String
    }
`