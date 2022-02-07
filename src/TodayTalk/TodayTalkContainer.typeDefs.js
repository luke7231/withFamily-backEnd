import { gql } from 'apollo-server-core';

export default gql`
    type TodayTalkContainer {
        id: Int
        todayTalks: [TodayTalk]
        deadLine: String
        createdAt: String
        upDateAt: String
    }
`