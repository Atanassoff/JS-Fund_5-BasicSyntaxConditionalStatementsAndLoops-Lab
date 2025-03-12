function sumSeconds(a, b, c){
    let sumSec = a + b + c;
    let min = Math.floor(sumSec / 60);
    let sec = sumSec % 60;
    if(sec < 10){
        console.log(`${min}:0${sec}`);
    }
    else{
        console.log(`${min}:${sec}`);
    }
}
sumSeconds(35, 45, 44)
//2:04 
sumSeconds(22, 7, 34) 
//1:03 
sumSeconds(50, 50, 49) 
//2:29 
sumSeconds(14, 12, 10) 
//0:36