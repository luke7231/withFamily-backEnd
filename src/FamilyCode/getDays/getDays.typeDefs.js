import { gql } from 'apollo-server-core';

export default gql`
    type Query {
        getDays: Day1
    }
    type Day1{
        Ok: Boolean!
        error: String
        day1: String
        day2: String
        day3: String
    }

`