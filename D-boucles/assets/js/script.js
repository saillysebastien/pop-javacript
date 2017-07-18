"use strict";

var myArray = [123, 42, 3.14, 100, 1, -2];

// boucle for avec un index qui est appele i
for (var i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}
console.log(myArray);

//boucle for en commencant par la fin
// i-- enleve 1
for (var i = myArray.length -1; i >= 0; i--) {
  console.log(myArray[i]);
}

//boucle for in
for (var i in myArray) {
  console.log(myArray[i]);
}
// boucle for of
for (var value of myArray) {
  console.log(value);
}

// affiche les nombres > 50
for (var i = 0; i < myArray.length; i++) {
  if (myArray[i] > 50){
    console.log(myArray[i]);
  }
}

// affiche les nombres compris entre 0 et 50
for (var i = 0; i < myArray.length; i++) {
  if (myArray[i] < 50 && myArray[i]>0) {
    console.log(myArray[i]);
  }
}

//affiche les nombres à virgules
for (var value of myArray) {
  if (!Number.isInteger(value)){
    console.log(value);
  }
}

//affiche les nombres à virgules 2nde méthode
for (var value of myArray) {
  if (value - Math.round(value) !=0) {
    console.log(value);
  }
}
