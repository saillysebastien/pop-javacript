var getStudents = function() {
  var request = new XMLHttpRequest();
  request.open('GET', url + "students.php", true);
  request.onreadystatechange = function(e) {

    if (this.readyState == XMLHttpRequest.DONE) {
      var students = JSON.parse(this.responseText);
      app.innerHTML = "<fielset><legend>Liste des étudiants</legend>";
      app.innerHTML += '<label class="col-md-4 control-label" name="lastname" for="edit_button">' + ' Id de la promo  '+ ' / '+ ' Prénom et nom ' + '</label>' + '<br />' + '<br />';
      students.forEach(function(student) {
        app.innerHTML += '<div class="form-group">';
        app.innerHTML += '<label class="col-md-4 control-label" name="elevename" for="edit_button">' + student.idpromotion +  ' /  ' + student.firstname + '  ' + student.lastname + '</label>';
        app.innerHTML += '<div class="col-md-8">';
        app.innerHTML += '<a onclick = "changeStudentForm(\'' + student.id + '\', \'' + student.lastname + '\', \'' + student.firstname + '\', \'' + student.idpromotion + '\');" class="btn btn-success">Éditer</a>';
        app.innerHTML += '<a onclick = "deleteStudentForm(\'' + student.id + '\', \'' + student.lastname + '\', \'' + student.firstname + '\');" class="btn btn-danger">Supprimer</a>';
        app.innerHTML += '</div>';
        app.innerHTML += '</div>';
      })
      app.innerHTML += "</fielset>"
    }
  };
  request.send();
}

var createStudentForm = function() {
  app.innerHTML = '<fieldset>';
  app.innerHTML += '<legend>Créer un élève</legend>';
  app.innerHTML += '<div class="form-group">';
  app.innerHTML += '<label class="col-md-4 control-label" for="lastname">Nom  :</label>';
  app.innerHTML += '<div class="col-md-8">';
  app.innerHTML += '<input id="lastname" name="lastname" placeholder="Indiquez ici le nom" class="form-control input-md" required="" type="text">';
  app.innerHTML += '</div>';
  app.innerHTML += '</div>';
  app.innerHTML += '<div class="form-group">';
  app.innerHTML += '<label class="col-md-4 control-label" for="firstname">Prénom :</label>';
  app.innerHTML += '<div class="col-md-4">';
  app.innerHTML += '<input id="firstname" name="firstname" placeholder="Indiquez ici le prénom" class="form-control input-md" required="" type="text">';
  app.innerHTML += '</div>';
  app.innerHTML += '</div>';
  app.innerHTML += '<div class="form-group">';
  app.innerHTML += '<label class="col-md-4 control-label" for="idpromotion">Id de la promotion :</label>';
  app.innerHTML += '<div class="col-md-4">';
  app.innerHTML += '<input id="idpromotion" name="idpromotion" placeholder="id de la promotion" class="form-control input-md" required="" type="text">';
  app.innerHTML += '</div>';
  app.innerHTML += '</div>';
  app.innerHTML += '<div class="form-group">';
  app.innerHTML += '<label class="col-md-4 control-label" for="validate"></label>';
  app.innerHTML += '<div class="col-md-4">';
  app.innerHTML += '<button onclick="createStudent(document.getElementById(\'lastname\').value, document.getElementById(\'firstname\').value, document.getElementById(\'idpromotion\').value);" class="btn btn-primary" id="validate" name="validate" class="btn btn-primary">Valider</button>';
  app.innerHTML += '</div>';
  app.innerHTML += '</div>';
};

var createStudent = function(lastName, firstName, idPromotion) {
  var student = {
    "lastname" : lastName,
    "firstname" : firstName,
    "idpromotion" : idPromotion,
  };
  var studentJSON = JSON.stringify(student);
  var request = new XMLHttpRequest();
  var parameters = "student=" + studentJSON;
  request.open("POST", url + "create_student.php", true);
  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  request.onreadystatechange = function(e) {
    if (this.readyState == XMLHttpRequest.DONE) {
      var responseCode = JSON.parse(this.response);
      if (responseCode == "success") {
        app.innerHTML = "<div class='alert alert-success'>Elève " + firstName + " " + lastName + " créée</div>";
        app.innerHTML += "<a onclick='getStudents();'>Retour à la liste des élèves</a>";
      }
      else if (responseCode == "failure") {
        app.innerHTML = "<div class=' alert alert-warning'>Elève " + firstName + " " + lastName + " non-créée</div>";
        app.innerHTML += "<a onclick='createStudentForm();'>Retour à la création d'un élève</a>";
      }
      else {
        app.innerHTML = "<div class=' alert alert-danger'>Erreur fatale !! Veuillez contacter l'administrateur du site</div>";
      }
    }
  };
  request.send(parameters);
};

var changeStudentForm = function(studentid, studentlastname, studentfirstname, studentidpromotion) {
  app.innerHTML = '<fieldset>';
  app.innerHTML += '<legend>Modifier un élève</legend>';
  app.innerHTML += '<div class="form-group">';
  app.innerHTML += '<label class="col-md-4 control-label" for="firstname">Prénom</label>';
  app.innerHTML += '<div class="col-md-4">';
  app.innerHTML += '<input id="firstname" name="firstname" placeholder="Prénom" class="form-control input-md"required="" value="' +  studentfirstname + '" type="text">';
  app.innerHTML += '</div>';
  app.innerHTML += '</div>';
  app.innerHTML += '<div class="form-group">';
  app.innerHTML += '<label class="col-md-4 control-label" for="lastname">Nom</label>';
  app.innerHTML += '<div class="col-md-4">';
  app.innerHTML += '<input id="lastname" name="lastname" placeholder="Nom de famille" class="form-control input-md" required="" value="' +  studentlastname + '" type="text" />';
  app.innerHTML += '</div>';
  app.innerHTML += '</div>';
  app.innerHTML += '<div class="form-group">';
  app.innerHTML += '<label class="col-md-4 control-label" for="idpromotion">Promotion</label>';
  app.innerHTML += '<div class="col-md-4">';
  app.innerHTML += '<input id="idpromotion" name="idpromotion" placeholder="Id de la formation" class="form-control input-md" required="" value="' +  studentidpromotion + '" type="text" />';
  // app.innerHTML += '<select id="promotion_id" name="promotion_id" class="form-control">';
  // app.innerHTML += '<option value="1">Aaron Swartz</option>';
  // app.innerHTML += '<option value="2">Jimmy Wales</option>';
  // app.innerHTML += '</select>';
  app.innerHTML += '</div>';
  app.innerHTML += '</div>';
  app.innerHTML += '<div class="form-group">';
  app.innerHTML += '<label class="col-md-4 control-label" for="validate"></label>';
  app.innerHTML += '<div class="col-md-4">';
  app.innerHTML += '<input type="hidden" name="id" value="" />';
  app.innerHTML += '<button id="validate" name="validate" class="btn btn-primary">Valider</button>';
  app.innerHTML += '</div>';
  app.innerHTML += '</div>';
  app.innerHTML += '</fieldset>';
};

var deleteStudentForm = function(studentid, studentlastname, studentfirstname) {
  app.innerHTML = '<fieldset>';
  app.innerHTML += '<legend>Suppression d’un étudiant</legend>';
  app.innerHTML += '<div class="form-group">';
  app.innerHTML += '<label class="col-md-4 control-label" for="lastname">Nom de l’élève</label>';
  app.innerHTML += '<div class="col-md-4">';
  app.innerHTML += '<input id="lastname" name="lastname" value="' +  studentlastname + '" class="form-control input-md" disabled="true" type="text" />';
  app.innerHTML += '</div>';
  app.innerHTML += '</div>';
  app.innerHTML += '<div class="form-group">';
  app.innerHTML += '<label class="col-md-4 control-label" for="firstname">Nom de l’élève</label>';
  app.innerHTML += '<div class="col-md-4">';
  app.innerHTML += '<input id="firstname" name="firstname" value="' + studentfirstname + '" class="form-control input-md" disabled="true" type="text" />';
  app.innerHTML += '</div>';
  app.innerHTML += '</div>';
  app.innerHTML += '<div class="form-group">';
  app.innerHTML += '<label class="col-md-4 control-label" for="checkboxes">Êtes-vous sûr de vouloir supprimer cet élève ?</label>';
  app.innerHTML += '<div class="col-md-2">';
  app.innerHTML += '<label class="checkbox-inline" for="checkboxes-0">';
  app.innerHTML += '<input name="user_validation" id="user_validation" value="1" type="checkbox" /> Oui, je suis certain';
  app.innerHTML += '</label>';
  app.innerHTML += '</div>';
  app.innerHTML += '</div>';
  app.innerHTML += '<div class="form-group">';
  app.innerHTML += '<label class="col-md-4 control-label" for="deletestudent"></label>';
  app.innerHTML += '<div class="col-md-4">';
  app.innerHTML += '<input type="hidden" name="id" value="" />';
  app.innerHTML += '<button class="btn btn-danger">Supprimer</button>';
  app.innerHTML += '</div>';
  app.innerHTML += '</div>';
  app.innerHTML += '</fieldset>';
}
