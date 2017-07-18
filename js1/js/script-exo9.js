

var printForm = function () {
  var box = document.getElementById('box');
  box.innerHTML =
  "Nom" + document.getElementById("lastname").value +"<br>" +
  "Prenom"  + document.getElementById("firstname").value +"<br>" +
  "Adresse" + document.getElementById("adresse").value +"<br>" +
  "Age"  + document.getElementById("age").value +"<br>" ;
}
