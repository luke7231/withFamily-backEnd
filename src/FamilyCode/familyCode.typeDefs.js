import { gql } from 'apollo-server-core'

export default gql`
    scalar Upload
    type FamilyCode {
        id: Int
        code: String
        users: [User]
        photos: [Photo]
        questions: [Question]
        hours: String
        minutes: String
        day1: String
        day2: String
        day3: String
        createdAt: String
        updatedAt: String
    }
`