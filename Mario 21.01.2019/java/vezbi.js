// For

// da broi do 10

//for(var i = 0; i <= 10; i++) {
  //  console.log(i);
//}









// da broi do 5 sekoj 5ti broj

//for(var i = 5; i <= 100; i = i+5 ) {
//console.log(i);
//}










function Mountain() {

    var result = "";

    var Flat = function(size) {
        for(i = 0; i <= size; i++) {
            result += "_";
        }
    }

    var Peak = function(size) {
        result += "/";
        for(var i = 0; i <= size; i++){
            result += "'";
        }
        result += "\\";
    }

    Flat(5);
    Peak(4);
    Flat(15);
    Peak(7);
    Flat(2);
    Peak(7);
    Flat(9);
    Peak(3);
    Flat(5);

    return result;
}

console.log( Mountain() );


//var count = 6;

//for(var i = 0; i < 100; i++) {
    //if(i % 2 != 0){
      //  console.log(i);
    //}
//}






var range = 100;
var j = -1;
for (i = 0; i <= range; i++) {
    if (i % 2 == 1) {
        j++;
        if (j % 3 == 0) {
            console.log(i);
        }
    }
}

