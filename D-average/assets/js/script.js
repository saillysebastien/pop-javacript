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
var sortNames = "";
sortNames = function(a, b) {
  if (a.name > b.name) {
    return 1;
  } else if (a.name < b.name) {
    return -1;
  } else {
    return 0;
  }
}
var sortScores = "";
sortScores = function(a, b) {
  if (a.score > b.score) {
    return -1;
  } else if (a.score < b.score) {
    return 1;
  } else {
    return 0;
  }
}

var sortResult = "";
var sortScoresAndNames = function(a, b) {
  sortResult = sortScores(a, b);
  return sortResult == 0 ? sortNames(a, b) : sortResult;
}

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

//Exercice de moyenne

// Définir la moyenne d'un joueur


//envoyer vers html
var average = 0;
var averageScore = "";
averageScore = averageScore + "<table class='table table-bordered'>";
averageScore = averageScore + "<h2>" + "average" + "</h2>";
averageScore = averageScore + "<thead>" + "<tr>";
averageScore = averageScore + "<th class='col-md-6'>" + "Username" + "</th>";
averageScore = averageScore + "<th class='col-md-6'>" + "Average" + "</th>";
averageScore = averageScore + "</tr>" + "</thread>";
averageScore = averageScore + "<tbody>";
for (var i = 0; i < data.length; i++) {
  var userScore = data[i].scores;
  userScore.forEach(function() {
    var sumScores = 0;
    for (var i = 0; i < userScore.length; i++) {
      sumScores += userScore[i];
    }
    var sum = [sumScores - 1];
    for (var i = 0; i < sum.length; i++) {
      average = Math.round(sum[i] / userScore.length);
    }
  });


  averageScore = averageScore + "<tr>";
  averageScore = averageScore + "<td class='col-md-6'>" + data[i].name + "</td>";
  averageScore = averageScore + "<td class='col-md-6'>" + average + "</td>";
  averageScore = averageScore + "</tr>";
  averageScore = averageScore + "</tbody>";
}
averageScore = averageScore + "</table>"
document.querySelector("#list-average").innerHTML = averageScore;

var best = "";
best = best + "<table class='table table-bordered'>";
best = best + "<h2>" + "best score" + "</h2>";
best = best + "<thead>" + "<tr>";
best = best + "<th class='col-md-6'>" + "Username" + "</th>";
best = best + "<th class='col-md-6'>" + "High score" + "</th>";
best = best + "</tr>" + "</thread>";
best = best + "<tbody>";
for (var i = 0; i < data.length; i++) {
  var userScore = [];
    userScore.push({
      user : data[i].name,
      score: data[i].scores
    });
    console.log(userScore);
}


  for (var i = 0; i < 5; i++) {
  best = best + "<tr>";
  best = best + "<td class='col-md-6'>" + "</td>";
  best = best + "<td class='col-md-6'>" + "</td>";
  best = best + "</tr>";
  best = best + "</tbody>";
}

best = best + "</table>";
document.querySelector("#list-best-scores").innerHTML = best;
