function godzillaKong(budget, people, clothes){
    let decor = budget * 0.1;
    let expend = 0;
    if(people > 150){
        expend = (people * clothes) * 0.9 + decor;
    }
    else{
        expend = people * clothes + decor;
    }
    let diff = Math.abs(budget - expend);
    if(budget >= expend){
        console.log(`Action!`) 
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`);
    }
    else{
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`);
    }
}

godzillaKong(20000, 120, 55.5)
//Action! 
//Wingard starts filming with 11340.00 leva left. 
godzillaKong(15437.62, 186, 57.99) 
//Action! 
//Wingard starts filming with 4186.33 leva left.
godzillaKong(9587.88, 222, 55.68) 
//Not enough money! 
//Wingard needs 2495.77 leva more.)