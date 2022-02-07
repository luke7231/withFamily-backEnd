import { gql } from 'apollo-server-core';

export default gql`
    scalar DateTime

    type Mutation {
        setDayAtFirst(hours:Int,minutes:Int,day1:String!,day2:String!,day3:String!): Ok!
    }
    type Ok {
        ok: Boolean!
        hours: Int!
        minutes: Int!
        error: String
    }
`