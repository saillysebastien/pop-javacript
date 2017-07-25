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

  if (total != 100) {
    swal("Erreur",
      "Le total de l'agilité, de l'endurance et de la force n'est pas égale à 100.",
      "error");
  } else {
    var html = "";
    html = html + "<div class='col-md-3'>";
    html = html + "<table id='table' class='table table-bordered '>";
    html = html + "<tbody>";
    html = html + "<tr>";
    html = html + "<th class='col-md-6' id='left_table'>" + "Username :" + "</th>";
    html = html + "<th class='col-md-6' id='right_table'>" + name + "</th>";
    html = html + "</tr>";
    html = html + "<tr>";
    html = html + "<th class='col-md-6' id='left_table'>" + "Agility :" + "</th>";
    html = html + "<th class='col-md-6' id='right_table'>" + agility + "</th>";
    html = html + "</tr>";
    html = html + "<tr>";
    html = html + "<th class='col-md-6' id='left_table'>" + "Strength :" + "</th>";
    html = html + "<th class='col-md-6' id='right_table'>" + strength + "</th>";
    html = html + "</tr>";
    html = html + "<tr>";
    html = html + "<th class='col-md-6' id='left_table'>" + "Endurance :" + "</th>";
    html = html + "<th class='col-md-6' id='right_table'>" + endurance + "</th>";
    html = html + "</tr>";
    html = html + "<tbody>" + "</table>"
    html = html + "</div>";
    document.querySelector("#fiche_hero").innerHTML = html;
  }
}
