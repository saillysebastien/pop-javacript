/* We create an app variable to avoid having to write a long
document.getElementById… everytime.
The HTML div with id="application" is the core of our software */
var app = document.getElementById("application");

// Function to display all the people
var showPeople = function() {
  // First, we empty the app's HTML
  app.innerHTML = "";
  // Then we display a card for each people
  people.forEach(function(person, index) {
    // We prepare the whole HTML code in a variable called personCard
    personCard = "<div class='col-lg-3 col-md-4 col-xs-6'>"; // Begin of column
    personCard += "<div class='panel panel-default'>"; // Begin of panel
    // Panel title: person's name and driving licence
    personCard += "<div class='panel-heading'><h1 class='panel-title'>" + person.name;
    if (person.drivinglicence) {
      personCard += "&nbsp;<span class='label label-success'>permis&nbsp;B</span>";
    }
    else {
      personCard += "&nbsp;<span class='label label-warning'>Ø&nbsp;permis</span>";
    }
    personCard += "</h1></div>";
    // Panel body : person's age and contact/edition/suppression buttons
    personCard += "<div class='panel-body'>";
    personCard += "<div class='alert alert-info'>" + person.age + "&nbsp;ans</div>";
    personCard += "<div class='btn-group'>"; // Begin of buttons group
    // Mailto button : email set in href attribute
    personCard += "<a class='btn btn-info width' href='mailto:" + person.email +"'>Contact</a>";
    // Edit button: index (it's the current position in the people table) is given as GET param
    personCard += "<a class='btn btn-warning width' href='edit.html?id=" + index + "'>Edit</a>";
    // Delete button: index (it's the current position in the people table) is given as GET param
    personCard += "<a class='btn btn-danger width' href='delete.html?id=" + index + "'>Delete</a>";
    personCard += "</div>"; // End of buttons group
    personCard += "</div>"; // End of panel
    personCard += "</div>"; // End of column
    // Card is ready : we add it to the app's HTML
    app.innerHTML += personCard;
  });
}

var createPersonForm = function() {
  app.innerHTML = "";
  personForm = "";
  personForm += "<div class='col-lg-6 col-md-8 col-xs-12'>";
  personForm += '<form class="form-horizontal">'
  personForm += '<legend>Add a person</legend>';
  personForm += '<div class="form-group">';
  personForm += '<label class="col-sm-4 control-label" for="fullname">Fullname :</label>';
  personForm += '<div class="col-sm-8">';
  personForm += '<input id="fullname" placeholder="Fullname here" name="fullname" class="form-control input-md" required type="text" value="" />';
  personForm += '</div>';
  personForm += '</div>';
  personForm += '<div class="form-group">';
  personForm += '<label class="col-md-4 control-label" for="name">Name :</label>';
  personForm += '<div class="col-md-8">';
  personForm += '<input id="name" name="name" placeholder="Name here" class="form-control input-md" required type="text" value="" />';
  personForm += '</div>';
  personForm += '</div>';
  personForm += '<div class="form-group">';
  personForm += '<label class="col-md-4 control-label" for="Surname">Surname :</label>';
  personForm += '<div class="col-md-8">';
  personForm += '<input id="surname" name="surname" placeholder="Surname here" class="form-control input-md" type="text" value="" />';
  personForm += '</div>';
  personForm += '</div>';
  personForm += '<div class="form-group">';
  personForm += '<label class="col-md-4 control-label" for="age">Age :</label>';
  personForm += '<div class="col-md-8">';
  personForm += '<input id="age" name="age" placeholder="Age here" class="form-control input-md" required type="text" value="" />';
  personForm += '</div>';
  personForm += '</div>';
  personForm += '<div class="form-group">';
  personForm += '<label class="col-md-4 control-label" for="size">Size :</label>';
  personForm += '<div class="col-md-8">';
  personForm += '<input id="size" name="size" placeholder="Size here" class="form-control input-md" type="text" value="" />';
  personForm += '</div>';
  personForm += '</div>';
  personForm += '<div class="form-group">';
  personForm += '<label class="col-md-4 control-label" for="mail">Email :</label>';
  personForm += '<div class="col-md-8">';
  personForm += '<input id="mail" name="mail" placeholder="Email here" class="form-control input-md" required type="mail" value="" />';
  personForm += '</div>';
  personForm += '</div>';
  personForm += '<div class="form-group">';
  personForm += '<label class="col-md-4 control-label" for="licence">Possess a driving licence ?</label>';
  personForm += '<div class="col-md-8">';
  personForm += '<div class="checkbox">';
  personForm += '<label class="col-md-8" for="licence-1"> Click for YES ';
  personForm += '<input name="licence-1" id="licence-1" value="1" type="checkbox" required value="" />';
  personForm += '</label>';
  personForm += '</div>';
  personForm += '</div>';
  personForm += '</div>';
  personForm += '<div class="form-group">';
  personForm += '<label class="col-md-4 control-label" for="validate"></label>';
  personForm += '<div class="col-md-8">';
  personForm += '<button onclick="" class="btn btn-primary" id="validate" name="validate" class="btn btn-primary">Submit</button>';
  personForm += '<a class="btn btn-warning" href="index.html">Back</a>';
  personForm += '</div>';
  personForm += '</div>';
  personForm += '</form>';
  personForm += '</div>';
  app.innerHTML += personForm;
}

var printInfo = function() {
  // Display the number of people in the navbar
  document.getElementById("infoZone").innerHTML = "&nbsp;Il y a " + people.length + " personnes en base";
  // Display the number of people in the app's div
  app.innerHTML = "&nbsp;Il y a " + people.length + " personnes en base";
}
// Whatever happens, we launch printInfo() everytime
printInfo();
