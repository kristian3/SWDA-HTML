var ime  = document.querySelector(".ime");
var kopce = document.querySelector(".kopce");


document.addEventListener("click", function(){
if(ime.length <= 5){
    console.log("Kratko ime");
} else if(ime.length >=5  && ime.length <=8){
    console.log("Ime so sredna golemina");
} else if(ime.length > 8){
    console.log("Dolgo ime");
}
})