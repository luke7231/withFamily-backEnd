import { gql } from 'apollo-server-core';

export default gql`
    type Query{
        chechAlreadyExisted(username:String): Ok
    }
    type OK {
        ok: Boolean!,
        error: String
    }
`