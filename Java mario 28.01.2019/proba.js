//var height = 1.83;
//var limit = 1.63;
//if(height < limit) {
//    console.log("Mozes da se vozis.");
//}else {
//    console.log("Nemozes da se vozis")
//}




//var num1 = 7;
//var num2 = 7;

//if (num1 > num2) {
//    console.log(num1);
//} else if(num1 < num2) {
//    console.log(num2);
//} else {
//    console.log("numbers are equal");
//}









//var today = "Monday";

//switch(today) {
//    case "Monday":
//            console.log("Today is Monday");
//        break;
//    case "Tuesday":
//            console.log("Today is Tuesday");
//        break;
//    case "Wednesday":
//            console.log("Today is Wednesday");
//        break;    
//    case "Thirsday":
//            console.log("Today is Thirsday");
//        break;
//    case "Friday":
//            console.log("Today is Friday");
//        break;
//    case "Saturday":
//        console.log("Today is Saturday");
//        break;
//    case "Sunday":
//        console.log("Today is Sunday");
//        break;
//        
//        default: console.log("Unknown day");
//}
















//function SayHello() {
//    console.log("Hello World")
//}
//SayHello();





//function SayHelloAgain(name) {
//    return "Hello " + name;
//}

//console.log( SayHelloAgain("Kristian") );















//function MarioPyramid(size) {
//    for(var i = 1; i <= size; i++) {
//        var result = "";
//
//        for(var j = 1; j <= i; j++) {
//            result += "#";
//        }

//        console.log(result);




//    }
//}


//MarioPyramid(15);













//console.dir(document.querySelector("h2"));
//document.querySelector("h2").innerHTML = "Hello World";






var button = document.querySelector(".date-button");
var result = document.querySelector(".date");


button.addEventListener("click", function() {
    result.innerHTML = new Date();
});



// za doma 


// var movies = ["Pulp Fiction", "The Wild Bunch", "Star Wars", "Rear Window", "Mad Max"];
// nizata movies so pomos na js (DOM) pretvorete ja vo HTML vo listi -> ul -> li.














