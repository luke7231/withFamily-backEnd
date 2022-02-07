export const checkElapsed = (dateTime) => {
    if (!dateTime) {
        return false
    }
    const now = new Date();
    
    const comparedTime = new Date(Number(dateTime));
    
    let ready = false;
    
    if (now.getMonth() > comparedTime.getMonth()) {
        ready = 'true'; 
    } else if (now.getMonth() == comparedTime.getMonth()) {
        if (now.getDate() > comparedTime.getDate()) {
            ready = true;
        } else if (now.getDate() == comparedTime.getDate()) {
            if (now.getHours() > comparedTime.getHours()) {
                ready = true;
            } else if (now.getHours() == comparedTime.getHours()) {
                if (now.getMinutes() >= comparedTime.getMinutes()) {
                    ready = true;
                }
            }
        }
    }
    return ready;
}