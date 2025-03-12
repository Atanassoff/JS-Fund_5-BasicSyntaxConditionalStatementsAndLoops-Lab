function lunchBreak(film, filmTime, restTime){
    let lunch = restTime / 8;
    let rest = restTime / 4;
    let freeTime = restTime - lunch - rest;
    let diff = Math.abs(filmTime - freeTime);
    if(filmTime <= freeTime){
        console.log(`You have enough time to watch ${film} and left with ${Math.ceil(diff)} minutes free time.`);
    }else{
        console.log(`You don't have enough time to watch ${film}, you need ${Math.ceil(diff)} more minutes.`);
    }
} 

lunchBreak("Game of Thrones", 60, 96)
//You have enough time to watch Game of Thrones and left with 0 minutes free time. 

lunchBreak("Teen Wolf", 48, 60) 
//You don't have enough time to watch Teen Wolf, you need 11 more minutes.

