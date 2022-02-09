import { gql } from 'apollo-server-core';

export default gql`
    type Query {
        seeQuestionListDev(masterId:Int!,page: Int!): [QuestionList]
    }
`