import { gql } from 'apollo-server-core';

export default gql`
    type Mutation{
        changeDay3: Ok!
    }
    type Ok{
        ok:Boolean!
        error: String

    }
`