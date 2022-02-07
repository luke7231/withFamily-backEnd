import { gql } from 'apollo-server-core';

export default gql`
    type Query {
        seeQuestion(id:Int!): Question!
    }
`