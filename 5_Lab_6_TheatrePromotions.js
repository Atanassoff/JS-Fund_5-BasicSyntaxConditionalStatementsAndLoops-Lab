function theatrePromotions(day, age) {
    let price = 0;
    if (age < 0 || age > 122) {console.log("Error!");} 
    else {
        switch (day) {
            case "Weekday":
                if (age <= 18) {price = 12;} 
                else if (age <= 64) {price = 18;} 
                else if (age <= 122) {price = 12;}
                break;
            case "Weekend":
                if (age <= 18) {price = 15;} 
                else if (age <= 64) {price = 20;} 
                else if (age <= 122) {price = 15;}
                break;
            case "Holiday":
                if (age <= 18) {price = 5;} 
                else if (age <= 64) {price = 12;} 
                else if (age <= 122) {price = 10;}
                break;
            default:
                break;
        }
    }
    if (price > 0){console.log(`${price}$`)}
}


theatrePromotions('Weekday', 42)
//18$ 
theatrePromotions('Holiday', -12)
//Error! 
theatrePromotions('Holiday', 15)
//5$

//0 <= age <= 18  18 < age <= 64  64 < age <= 122
//Weekday      12$             18$            12$
//Weekend      15$             20$            15$
//Holiday       5$             12$            10$ 