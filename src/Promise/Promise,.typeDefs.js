import { gql } from 'apollo-server-core';

export default gql`
    type Promise {
        id: Int
        familyCode: FamilyCode
        user: User
        date: String

        title: String
        payload: String
        
        participants: [String]
        file: Upload
        photos: [Photo]
        elapsed: Boolean
        createdAt: String
        updatedAt: String
        }
`