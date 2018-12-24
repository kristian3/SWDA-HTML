// intro to JS

console.log("test");


//console.log("5" + "5");
console.log(5 + 5);


//primer
//var name="Kristian";
//console.log(name);

//alert(name)




//primer1

function helloWorld() {
    return "Hello World";
}
console.log(helloWorld());




//primer2


function otherHelloWorld () {
    console.log("Hello World")
}

otherHelloWorld();





//primer3



function helloName(name) {
    console.log("Hello" + name) ;
}

helloName("Kristian");

function dogYears(age) {
    console.log("Dog has " + (age * 7) + " years in human life ");
}

dogYears(5);




// primer4

function fortuneTeller(name, ocupation, city, age) {
    return "Ti si " + name + " Rabotis kako " + ocupation + " zivees vo " + city + " i imas " + age; 
}


console.log(fortuneTeller("Kristian", "student", "Skopje", 26))






// primer5

function rollerCoasterRider(height, limit) {
    if (height > limit) {
        return " you CAN ride"
    } else {
        return " you CAN'T ride"
    }
}

console.log(rollerCoasterRider(1.73, 1.68))


// primer6

function numberComparison(a, b) {
    if(a > b){
        return "Number " + a + " is greater than " + b
    }
    else if(a < b){
        return "Number " + b + " is greater than " + a
    }
    else {
        return "Number " + a + " is equal to number " + b
    }
    
}

console.log( numberComparison(5, 5) );
