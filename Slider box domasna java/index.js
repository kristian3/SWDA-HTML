var range = document.querySelector("#range");
var rectangle = document.querySelector(".kocka");



range.addEventListener("change", function() {
    rectangle.style.width = this.value + "px";
    rectangle.style.height = this.value + "px";
});
















var wght = document.querySelector("#wght");
var hght = document.querySelector("#hght");
var button = document.querySelector("#calc");
var result = document.querySelector("#result");

button.addEventListener("click", function(){
    result.innerHTML = parseInt(wght.value) / (parseInt(hght.value) * parseInt(hght.value))
});


















var amount = document.querySelector("#amount");
var currency = document.querySelector("#curency");
var button = document.querySelector("#convert");
var result = document.querySelector("#result");


button.addEventListener("click", function() {
    switch(currency.value) {
        case "eur":
        result.innerHTML = "Conversion in MKD: " + (parseInt(amount.value) * 61.5)
        break;
        case "usd":
        result.innerHTML = "Conversion in MKD: " + (parseInt(amount.value) * 44.5)
        break;
    }
})


