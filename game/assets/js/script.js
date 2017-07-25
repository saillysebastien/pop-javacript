var fiche = function() {
  var name = document.getElementById('name').value;
  // localStorage.setItem('name',name);

  var agility = document.getElementById('agility').value;
  // localStorage.setItem('agility',agility);

  var strength = document.getElementById('strength').value;
  // localStorage.setItem('strength',strength);

  var endurance = document.getElementById('endurance').value;
  // localStorage.setItem('endurance',endurance);

  var total = parseInt(agility) + parseInt(strength) + parseInt(endurance);
  if (total == 100) {
    localStorage.setItem('name', name);
    localStorage.setItem('agility', agility);
    localStorage.setItem('strength', strength);
    localStorage.setItem('endurance', endurance);
  } else {
    swal("Erreur",
      "Le total de l'agilité, de l'endurance et de la force n'est pas égale à 100.",
      "error");
  }
}
function newDiv() {

var agility = localStorage.getItem('agility');
document.getElementById('agility').value = agility;

var strength = localStorage.getItem('strength');
document.getElementById('strength').value = strength;

var endurance = localStorage.getItem('endurance');
document.getElementById('endurance').value = endurance;

var name = localStorage.getItem('name');
document.getElementById('name').value = name;

  window.onload = function() {
    localStorage.getItem('name');
    localStorage.getItem('agility');
    localStorage.getItem('strength');
    localStorage.getItem('endurance');
  }
}
document.querySelector("#fiche_hero").innerHTML = newDiv();
