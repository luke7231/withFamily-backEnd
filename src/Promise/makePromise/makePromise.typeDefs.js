import { gql } from 'apollo-server-core';

export default gql`
    type Mutation {
        makePromise(title:String!,participants:[String],date:String!,payload:String): Ok
    }
    type Ok{
        ok: Boolean!
        error: String
    }
    
`