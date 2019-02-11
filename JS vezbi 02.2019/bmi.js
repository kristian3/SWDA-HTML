var tezina = document.querySelector("#tezina");
var visina = document.querySelector("#visina");
var button = document.querySelector("#calc");
var result = document.querySelector("#result");

button.addEventListener("click", function(){
    result.innerHTML = parseInt(tezina.value) / (parseInt(visina.value) * parseInt(visina.value))
});

