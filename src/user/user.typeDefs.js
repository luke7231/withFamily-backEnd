import { gql } from 'apollo-server';

export default gql`
    scalar Upload
    
    type User{
        id: Int!
        pushToken: String
        name: String!
        username: String!
        password: String!
        familyCode: FamilyCode
        createdAt: String!
        updatedAt: String!
        avatar: Upload
        bio: String
    }
`