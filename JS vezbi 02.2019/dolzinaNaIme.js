var ime  = document.querySelector(".ime");
var kopce = document.querySelector(".kopce");


kopce.addEventListener("click", function(){
if(ime.value.length > 0 && ime.value.lenght <= 5){
    alert("Kratko ime");
} else if(ime.value.length >=5  && ime.value.length <=8){
    alert("Ime so sredna golemina");
} else if(ime.value.length > 8){
    alert("Dolgo ime");
}
});