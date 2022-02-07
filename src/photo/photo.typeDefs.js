import { gql } from 'apollo-server-core';

export default gql`
    type Photo {
        id: Int!
        date: String
        file: String!
        caption: String
        createdAt: String
    }
`