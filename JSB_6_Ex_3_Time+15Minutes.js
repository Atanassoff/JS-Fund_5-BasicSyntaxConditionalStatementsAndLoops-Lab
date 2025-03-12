function timePlus15Minutes(h, m){
    let min = h * 60 + m + 15;
    h = (Math.floor(min / 60)) % 24;
    m = min % 60;
    if(m < 10){
        console.log(`${h}:0${m}`)
    }else{
        console.log(`${h}:${m}`)
    }
} 

timePlus15Minutes(12, 49)
//(["1","46"]) 2:01 (["0", "01"]) 0:16 (["23", "59"]) 0:14 (["11", "08"]) 11:23 (["12", "49"]) 13:04