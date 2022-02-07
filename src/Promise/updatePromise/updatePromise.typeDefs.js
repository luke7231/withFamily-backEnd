import { gql } from 'apollo-server-core';

export default gql`
    scalar Upload

    type Mutation{
        updatePromise(id:Int! file: Upload!, payload: String): Ok
    }
    type Ok{
        ok: Boolean!
        error: String
    }
`
