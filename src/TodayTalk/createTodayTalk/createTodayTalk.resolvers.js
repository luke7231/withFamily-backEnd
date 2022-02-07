import client from '../../client';
import { checkElapsed } from '../../shared/checkElapsed';
import { uploadToS3 } from '../../shared/shared.utils';
import { protectResolver } from '../../user/user.utils';

export default {
    Mutation: {
        createTodayTalk: protectResolver(async (_, { payload, file }, { loggedUser }) => {
            let fileUrl = null;
            if (file) {
                fileUrl = await uploadToS3(file, loggedUser.id, "todayTalk");
            }
            const family = await client.familyCode.findFirst({
                where: {
                    users: {
                        some: {
                            id: loggedUser.id
                        }
                    }
                }
            })

            const nineClock= new Date();
            nineClock.setHours(21);
            nineClock.setMinutes(0);
            /* const yesterDaynine = new Date(nineClock);
            yesterDaynine.setDate(nineClock.getDate() - 1); */
            const nextDayNine = new Date(nineClock);
            nextDayNine.setDate(nineClock.getDate() + 1);
            
            const exTalkBox = await client.todayTalkContainer.findFirst({
                where: {
                    familyCodeId: family.id,
                }, orderBy: {
                    createdAt: "desc"
                }
            })
            let timeOut
            if (exTalkBox) {
                timeOut = checkElapsed(exTalkBox.deadLine);
            }
            
            
            if (!exTalkBox || (exTalkBox && timeOut)) { 
                // 있는데 시간이 지났으면 또는 한개도 없다면 
                const newTalkBox = await client.todayTalkContainer.create({
                    data: {
                        familyCode: {
                            connect: {
                                id: family.id
                            }
                        },
                        deadLine: nextDayNine
                    }
                })
                await client.todayTalk.create({
                    data: {
                        payload,
                        file: fileUrl,
                        FamilyCode: {
                            connect: {
                                id: family.id
                            }
                        },
                        user: {
                            connect: {
                                id: loggedUser.id
                            }
                        },
                        TodayTalkContainer: {
                            connect: {
                                id: newTalkBox.id
                            }
                        }
                    }
                })
                return {
                    ok: true,
                    error: null
                }
            } else if (exTalkBox && !timeOut) {
                const newTalk = await client.todayTalk.create({
                    data: {
                        payload,
                        file: fileUrl,
                        user: {
                            connect: {
                                id: loggedUser.id
                            }
                        },
                        FamilyCode: {
                            connect: {
                                id: family.id
                            }
                        },
                        TodayTalkContainer: {
                            connect: {
                                id: exTalkBox.id
                            }
                        },
                        
                    
                    }
                })
                return {
                    ok: true,
                    error: null
                }
            
            }
            
        })
    }
}