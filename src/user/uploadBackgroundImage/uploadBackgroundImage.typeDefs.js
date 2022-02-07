import { gql } from 'apollo-server-core';

export default gql`
    scalar Upload
    type Mutation {
        uploadBackgroundImage(caption:String,file:Upload!): Ok
    }
    type Ok {
        ok: Boolean,
        error: String
    }
`