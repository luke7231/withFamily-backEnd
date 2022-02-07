import client from '../../client';
import { checkElapsed } from '../../shared/checkElapsed';
import { protectResolver } from '../../user/user.utils';

export default {
    Query: {
        seeTodayTalk: protectResolver(async (_,__,{loggedUser}) => {
            const family = await client.familyCode.findFirst({
                where: {
                    users: {
                        some: {
                            id: loggedUser.id
                        }
                    }
                }
            })
            const exTalkBox = await client.todayTalkContainer.findFirst({
                where: {
                    familyCodeId: family.id
                },
                orderBy: {
                    createdAt:"desc",
                }
            })
            if (!exTalkBox) {
                console.log("박스가 없음")
                return null;
            }
            const timeOver = checkElapsed(exTalkBox.deadLine);
            if (timeOver) {
                console.log("시간지나서 null이요 ~")
                return null;
            } else {
                return exTalkBox;
            }
        })
    }
}