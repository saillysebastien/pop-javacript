"use strict";

var data = [{
    id: 123,
    name: "User 1",
    scores: [42, 100, 54, 65, 32]
  },
  {
      id: 243,
      name: "User 2",
      scores: [76, 64, 10, 67, 64]
    },
  {
    id: 768,
    name: "User 3",
    scores: [93, 2, 56, 78, 100]
  }
];

// var html = "";
// html = html + "code html";
//
// for (var i = 0; i < data.length; i++) {
//   html = html + "nouveau code html";
// }
//
// html = html + "code html";

// A partir ces données :
// - afficher un tableau html contenant le nom des utilisateurs et leurs scores, triés par nom d'utilisateur.

// document.querySelector("#list-all").innerHTML = html;
// document.querySelector("#first-table").innerHTML =
// - afficher un tableau html contenant le nom des utilisateurs et leur score moyen,triés par nom d'utilisateur.
// - afficher un tableau html contenant les 5 meilleurs scores, le nom de l'utilisateur et la position du score triés par ordre décroissant, puis par nom de utilisateur.

// indices :
// - vous pouvez parcourir le tableau des données avec un boucle for
// - pour lire le nom : user.name
// - pour lire le tableau des scores : user.scores

var html = "";
html = html + "<table class='table table-bordered'>";
html = html + "<h2>" + "Player score" + "</h2>";
html = html + "<thead>" + "<tr>";
html = html + "<th class='col-md-6'>" + "Username" + "</th>";
html = html + "<th class='col-md-6'>" + "Score" + "</th>";
html = html + "</tr>" + "</thread>";
html = html + "<tbody>";
for (var i = 0; i < data.length; i++) {
  html = html + "<tr>";
  html = html + "<td class='col-md-6'>" + data[i].name + "</td>";
  html = html + "<td class='col-md-6'>" + data[i].scores + "</td>";
  html = html + "</tr>";
  html = html + "</tbody>";
}
html = html + "</table>"
document.querySelector("#list-all").innerHTML = html;

var average = "";
average = average + "<table class='table table-bordered'>";
average = average + "<h2>" + "Average" + "</h2>";
average = average + "<thead>" + "<tr>";
average = average + "<th class='col-md-6'>" + "Username" + "</th>";
average = average + "<th class='col-md-6'>" + "average" + "</th>";
average = average + "</tr>" + "</thread>";
average = average + "<tbody>";
for (var i = 0; i < data.length; i++) {
  average = average + "<tr>";
  average = average + "<td class='col-md-6'>" + data[i].name + "</td>";
  average = average + "</tr>";
  average = average + "</tbody>";
}
average = average + "</table>"
document.querySelector("#list-average").innerHTML = average;

var best = "";
best = best + "<table class='table table-bordered'>";
best = best + "<h2>" + "best score" + "</h2>";
best = best + "<thead>" + "<tr>";
best = best + "<th class='col-md-6'>" + "Username" + "</th>";
best = best + "<th class='col-md-6'>" + "High score" + "</th>";
best = best + "</tr>" + "</thread>";
best = best + "<tbody>";
for (var i = 0; i < 5; i++) {
  best = best + "<tr>";
  best = best + "<td class='col-md-6'>" + "</td>";
  best = best + "<td class='col-md-6'>" + "</td>";
  best = best + "</tr>";
  best = best + "</tbody>";
}
best = best + "</table>";
document.querySelector("#list-best-scores").innerHTML = best;
