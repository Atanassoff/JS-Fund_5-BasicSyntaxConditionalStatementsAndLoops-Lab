function shopping(budget, cards, mp, ram){
    let moreCards = false;
    if(cards > mp){
        moreCards = true;
    }
    cards *= 250;
    mp *= (cards * 0.35);
    ram *= (cards * 0.1);
    sum = cards + mp + ram;
    if(moreCards === true){
        sum *= 0.85;
    }
    let diff = Math.abs(budget - sum);
    if(budget >= sum){
        console.log(`You have ${diff.toFixed(2)} leva left!`);
        
    }else{
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva more!`)
    }
}

shopping(900, 2, 1, 3) 
//You have 198.75 leva left! 
shopping(920.45, 3, 1, 1) 
//Not enough money! You need 3.92 leva more!
