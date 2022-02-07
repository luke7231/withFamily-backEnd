import { gql } from 'apollo-server-core';

export default gql`
    scalar Upload
    type Question {
        id: Int!
        payload: String!
        file: Upload
        familyCode: FamilyCode
        answers: [Answer]
        createdAt: String
        updatedAt: String
    }
`