function swimmRecord(record, distance, secundsMetre ){
    let time = distance * secundsMetre + Math.floor(distance / 15) * 12.5;
    let diff = Math.abs(record - time);
    if(record > time){
        console.log(`Yes, he succeeded! The new world record is ${time.toFixed(2)} seconds.`);
    }
    else{
        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`);
    }
}

swimmRecord(10464, 1500, 20) 
//No, he failed! He was 20786.00 seconds slower. 

swimmRecord(55555.67, 3017, 5.03)
//Yes, he succeeded! The new world record is 17688.01 seconds.


