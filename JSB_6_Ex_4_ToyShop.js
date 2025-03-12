function toyShop(excursion, puzzle, doll, bear, mignon, truck){
    let num = puzzle + doll + bear + mignon + truck;
    puzzle *= 2.6;
    doll *= 3;
    bear *= 4.1;
    mignon *= 8.2;
    truck *= 2;
    let sum = puzzle + doll + bear + mignon + truck;
    if(num >= 50){
        sum *= 0.75;
    }
    sum *= 0.9;
    let result = Math.abs(sum - excursion);
    if(sum >= excursion){
        console.log(`Yes! ${result.toFixed(2)} lv left.`);
    }
    else{
        console.log(`Not enough money! ${result.toFixed(2)} lv needed.`);
    }
}

toyShop(40.8, 20, 25, 30, 50, 10) 
//Yes! 418.20 lv left. )
toyShop(320, 8, 2, 5, 5, 1) 
//Not enough money! 238.73 lv needed.

//Пъзел - 2.60 лв. Говореща кукла - 3 лв. Плюшено мече - 4.10 лв. Миньон - 8.20 лв. Камионче - 2 лв. 
//50 или повече - отстъпка 25% от общата цена. От спечелените пари - 10% за наема.

// "Yes! {оставащите пари} lv left."
//"Not enough money! {недостигащите пари} lv needed."