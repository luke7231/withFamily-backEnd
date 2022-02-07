import { gql } from 'apollo-server-core';

export default gql`
    scalar Upload
    type Mutation{
        createTodayTalk(payload:String!,file:Upload): Ok
    }
    type Ok{
        ok: Boolean!
        error: String
    }
`