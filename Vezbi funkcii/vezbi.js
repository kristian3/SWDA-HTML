

function moneyconvert(euro) {
    console.log(euro * 61 );
}

moneyconvert(200);







function mToKm(km) {
    console.log(km * 1000);
}

mToKm(2);











function rollerCoasterRider(height, limit) {
    if (height > limit) {
        return " you CAN ride"
    } else {
        return " you CAN'T ride"
    }
}

console.log(rollerCoasterRider(1.73, 1.68));




function enterSite(age) {
    if (age >= 18) {
        return "you can enter"
}       else { 
        return "you can't enter"
    }    
} 

   console.log(enterSite(16));






// site neparni broevi do 50 vezba

 var number;
 for (number = 1; number < 50; number++) {
     if(number % 2 == 1){
         console.log(number)
     }
 }
 

 // za doma = for ciklus sto ke go pecati sekoj tret paren broj do 100, ne smeeme da koristime i = i + 6


