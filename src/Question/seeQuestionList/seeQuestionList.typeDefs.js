import { gql } from 'apollo-server-core';

export default gql`
    type Query {
        seeQuestionList: Result!
    }
    type Result {
        questions: [Question],
        elapsed: Boolean!,
        changeDay3: Boolean
    }
`