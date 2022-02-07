export const checkOverElapsed = (day3) => {
    const now = new Date();
    //바꿔주면 되겠다 이거const day3 = await AsyncStorage.getItem("day3");
    const 셋째날 = new Date(Number(day3))
    let over2Day = false;

    if (now.getMonth() > 셋째날.getMonth()) {
        over2Day = true;
    } else if (now.getMonth() == 셋째날.getMonth()) {
        if (now.getDate() > 셋째날.getDate()) {
            over2Day = true;
        } else if (now.getDate() == 셋째날.getDate()) {
            if (now.getHours() > 셋째날.getHours()) {
                over2Day = true;
            } else if (now.getHours() == 셋째날.getHours()) {
                if (now.getMinutes() >= 셋째날.getMinutes()) {
                    over2Day = true;
                }
            }
        }
    }
    return over2Day;
}