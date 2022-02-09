import { gql } from 'apollo-server-core';

export default gql`
    type QuestionList {
        id: Int!
        payloads: String!
        createdAt: String
        updatedAt: String
    }
`