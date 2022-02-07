import { gql } from 'apollo-server-core';

export default gql`
    type Mutation{
        uploadPhoto(file: Upload!, caption: String, projectId: Int!): Result!
    }
    type Result{
        ok: Boolean!
        error: String
    }
`