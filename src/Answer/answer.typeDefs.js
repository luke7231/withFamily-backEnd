import { gql } from 'apollo-server-core';

export default gql`
    scalar Upload
    type Answer {
        id: Int
        user: User
        payload: String!
        question: Question
        file: Upload
        createdAt: String
        updatedAt: String
    }
`