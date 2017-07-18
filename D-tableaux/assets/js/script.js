"use strict";

// déclaration et initialisation d'un tableau vide
var myArray = [];
// déclaration et initialisation d'un tableau avec 3 éléments
var myArray2 = [123, 42, 3.14, "Hello"];

// inspection des tableaux dans la console
console.log(myArray);
console.log(myArray2);

// ajout d'éléments dans un tableau
myArray.push(123);
myArray.push(42);
myArray.push(3.14);
myArray.push("Hello");

// inspection des tableaux dans la console
console.log(myArray);
console.log(myArray2);

//afficher le 1er élément dans un tableau, au moins 1 élément est nécessaire
if (myArray.length > 0) {
  console.log(myArray[0]);
}

// modifier le 1er élément du tableau
if (myArray.length > 0) {
  myArray[0]=1;
  console.log(myArray);
}

//afficher la taille d'un tableau
console.log(myArray.length);

//afficher le dernier élément d'un tableau, au moins 1 élément est necessaire
if (myArray.length > 0) {
  console.log(myArray[myArray.length - 1]);
}

// modifier le dernier élément
if (myArray.length > 0) {
  myArray[myArray.length - 1] = "Salut";
  console.log(myArray);
}

//Supprimer le deuxieme élément d'un tableau
myArray.splice(1, 1);
console.log(myArray);

//Supprimer la valeur 3.14 du tableau
myArray.splice(1, 1);
console.log(myArray);
