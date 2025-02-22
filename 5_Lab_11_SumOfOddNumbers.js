function sumOfOddNumbers(n){
    let sum = 0;
    let odd = 1;
    for(let i = 1; i <= n; i++){
        console.log(odd);
        sum += odd;
        odd += 2;
    }
    console.log(`Sum: ${sum}`)
}

sumOfOddNumbers(3)