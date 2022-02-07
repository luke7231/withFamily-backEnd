import { gql } from 'apollo-server-core';

export default gql`
    type TodayTalk {
        id: Int!
        user: User
        payload: String!
        file: Upload
        FamilyCode: FamilyCode
        familyCodeId: Int
        userId: Int
    }
`