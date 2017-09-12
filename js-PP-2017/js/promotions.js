/* this file contains CRUD functions for promotion */

//Read function for promotions
var getPromotions = function() {
  //création of the XHR / API call / call / request _ objet
  var request = new XMLHttpRequest();
  // open(méthode, URL à taper, asynchrone true/false)
  request.open('GET', url + "promotions.php", true);
  request.onreadystatechange = function(e) {
    //first step
    //  app.innerHTML = this.responseText;

    //better step
    if (this.readyState == XMLHttpRequest.DONE) {
      var promotions = JSON.parse(this.responseText);
      app.innerHTML = '<fielset><legend>Liste des promotions</legend>';
      app.innerHTML += '<label class="col-md-4 control-label" name="promotionname" for="edit_button">' + ' id / ' + ' Promotion / '+ ' Date de début / '+ '  Date de fin ' + '</label>' + '<br />' + '<br />';
      promotions.forEach(function(promotion) {
        app.innerHTML += '<div class="form-group">';
        app.innerHTML += '<label class="col-md-4 control-label" name="promotionname" for="edit_button">' + promotion.id + ' /  ' + promotion.name + ' /  ' + promotion.startdate + ' / ' + promotion.enddate + '</label>';
        app.innerHTML += '<div class="col-md-8">';
        app.innerHTML += '<a onclick = "changePromotionForm(\'' + promotion.id + '\', \'' + promotion.name + '\', \'' + promotion.startdate + '\',  \'' + promotion.enddate + '\');" class="btn btn-success">Éditer</a>';
        app.innerHTML += '<a onclick = "deletePromotionForm(\'' + promotion.id + '\', \'' + promotion.name + '\');" class="btn btn-danger">Supprimer</a>';
        app.innerHTML += '</div>';
        app.innerHTML += '</div>';
      })
      app.innerHTML += "</fielset>"
    }
  };
  request.send();
  // app.innerHTML = "<div class='alert alert-success'>ici les promotions</div>";
}

// Create promotion form
var createPromotionForm = function() {
  app.innerHTML = '<fieldset>';
  app.innerHTML += '<legend>Créer une promotion</legend>';
  app.innerHTML += '<div class="form-group">';
  app.innerHTML += '<label class="col-md-4 control-label" for="promotionname">Nom de la promotion:</label>';
  app.innerHTML += '<div class="col-md-4">';
  // The name of the promotion is in this input field's value
  app.innerHTML += '<input id="promotionname" name="promotionname" placeholder="Indiquer ici le nom de la promotion" class="form-control input-md" required="" type="text">';
  app.innerHTML += '</div>';
  app.innerHTML += '</div>';
  app.innerHTML += '<div class="form-group">';
  app.innerHTML += '<label class="col-md-4 control-label" for="startdate">Date de début de la promotion :</label>';
  app.innerHTML += '<div class="col-md-4">';
  app.innerHTML += '<input id="startdate" name="startdate" placeholder="AAAA/MM/JJ" class="form-control input-md" required="" type="text">';
  app.innerHTML += '<span class="help-block">Indiquez ici la date de début de la promotion</span>';
  app.innerHTML += '</div>';
  app.innerHTML += '</div>';
  app.innerHTML += '<div class="form-group">';
  app.innerHTML += '<label class="col-md-4 control-label" for="enddate">Date de fin de la promotion :</label>';
  app.innerHTML += '<div class="col-md-4">';
  app.innerHTML += '<input id="enddate" name="enddate" placeholder="AAAA/MM/JJ" class="form-control input-md" required="" type="text">';
  app.innerHTML += '<span class="help-block">Indiquez ici la date de fin de la promotion</span>';
  app.innerHTML += '</div>';
  app.innerHTML += '</div>';
  app.innerHTML += '<div class="form-group">';
  app.innerHTML += '<label class="col-md-4 control-label" for="validate"></label>';
  app.innerHTML += '<div class="col-md-4">';
  // We call the createPromotion function with document... as promotionName's value
  app.innerHTML += '<button onclick="createPromotion(document.getElementById(\'promotionname\').value, document.getElementById(\'startdate\').value, document.getElementById(\'enddate\').value);" class="btn btn-primary">Valider</button>';
  app.innerHTML += '</div>';
  app.innerHTML += '</div>';
  app.innerHTML += '</fieldset>';
};

//Change promotion form
var changePromotionForm = function(promotionid, promotionname, promotionstartdate, promotionenddate) {
  app.innerHTML = '<fieldset>';
  app.innerHTML += '<legend>Modifier une promotion</legend>';
  app.innerHTML += '<div class="form-group">';
  app.innerHTML += '<label class="col-md-4 control-label" for="id">Id de la promotion</label>';
  app.innerHTML += '<div class="col-md-4">';
  app.innerHTML += '<input id="id" name="id" class="form-control input-md" disabled value="' +  promotionid + '" type="text" />';
  app.innerHTML += '</div>';
  app.innerHTML += '</div>';
  app.innerHTML += '<div class="form-group">';
  app.innerHTML += '<label class="col-md-4 control-label" for="promotionname">Nom de la promotion</label>';
  app.innerHTML += '<div class="col-md-4">';
  app.innerHTML += '<input id="promotionname" name="promotionname" placeholder="Nom de la promotion" class="form-control input-md" required="" value="' +  promotionname + '" type="text" />';
  app.innerHTML += '<span class="help-block">Indiquez ici le nom de la promotion</span>';
  app.innerHTML += '</div>';
  app.innerHTML += '</div>';
  app.innerHTML += '<div class="form-group">';
  app.innerHTML += '<label class="col-md-4 control-label" for="startdate">Date de début de la promotion :</label>';
  app.innerHTML += '<div class="col-md-4">';
  app.innerHTML += '<input id="startdate" name="startdate" placeholder="AAAA/MM/JJ" class="form-control input-md" required="" value="' +  promotionstartdate + '" type="text">';
  app.innerHTML += '<span class="help-block">Indiquez ici la date de début de la promotion</span>';
  app.innerHTML += '</div>';
  app.innerHTML += '</div>';
  app.innerHTML += '<div class="form-group">';
  app.innerHTML += '<label class="col-md-4 control-label" for="enddate">Date de fin de la promotion :</label>';
  app.innerHTML += '<div class="col-md-4">';
  app.innerHTML += '<input id="enddate" name="enddate" placeholder="AAAA/MM/JJ" class="form-control input-md" required="" type="text" value="' +  promotionenddate + '">';
  app.innerHTML += '<span class="help-block">Indiquez ici la date de fin de la promotion</span>';
  app.innerHTML += '</div>';
  app.innerHTML += '</div>';
  app.innerHTML += '<div class="form-group">';
  app.innerHTML += '<label class="col-md-4 control-label" for="validate"></label>';
  app.innerHTML += '<div class="col-md-4">';
  app.innerHTML += '<input type="hidden" name="id" value="" />';
  app.innerHTML += '<button onclick ="changePromotion(document.getElementById(\'id\').value, document.getElementById(\'promotionname\').value, document.getElementById(\'startdate\').value, document.getElementById(\'enddate\').value);" class="btn btn-primary">Valider</button>';
  app.innerHTML += '</div>';
  app.innerHTML += '</div>';
  app.innerHTML += '</fieldset>';
}

//Delete promotion form
var deletePromotionForm = function(promotionid, promotionname) {
  app.innerHTML = '<fieldset>';
  app.innerHTML += '<legend>Supprimer une promotion</legend>';
  app.innerHTML += '<div class="form-group">';
  app.innerHTML += '<label class="col-md-4 control-label" for="promotionname" value="">Nom de la promotion</label>';
  app.innerHTML += '<div class="col-md-4">';
  app.innerHTML += '<input id="promotionname" name="promotionname" placeholder="Nom de la promotion" class="form-control input-md" required="" value="' + promotionname + '" type="text" disabled="true">';
  app.innerHTML += '</div>';
  app.innerHTML += '</div>';
  app.innerHTML += '<div class="form-group">';
  app.innerHTML += '<label class="col-md-4 control-label" for="user_validation">Êtes-vous sûr de vouloir supprimer cette promotion ?</label>';
  app.innerHTML += '<div class="col-md-4">';
  app.innerHTML += '<div class="checkbox">';
  app.innerHTML += '<label for="user_validation-0">';
  app.innerHTML += '<input name="user_validation" id="user_validation-0" value="1" type="checkbox" /> Oui, je suis certain';
  app.innerHTML += '</label>';
  app.innerHTML += '</div>';
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
}

// Create function for promotions
var createPromotion = function(promotionName, startDate, endDate) {
  // console.log("You tried to create a promotion " + promotionName);
  //we forge an object called promotion
  var promotion = {
    "name": promotionName,
    "startdate": startDate,
    "enddate": endDate,
  };
  var promotionJSON = JSON.stringify(promotion);
  // Check of the promotion variable
  // console.log(promotion);
  // //Check of the promotion JSON variable
  // console.log(promotionJSON);

  // We create request object
  var request = new XMLHttpRequest();
  // We prepare parameters
  var parameters = "promotion=" + promotionJSON;
  // we etablish connection, but don't launch a proper request
  request.open("POST", url + "create_promotion.php", true);
  // We w arn that w will send parameters
  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  // We tell the request what it will have to do when it's over
  request.onreadystatechange = function(e) {
    if (this.readyState == XMLHttpRequest.DONE) {
      var responseCode = JSON.parse(this.response);
      if (responseCode == "success") {
        app.innerHTML = "<div class=' alert alert-succes'>Promotion " + promotionName + " créée</div>";
        app.innerHTML += "<a onclick='getPromotions()'>Retour à la liste des promotions</a>";
      }
      else if (responseCode == "failure") {
        app.innerHTML = "<div class=' alert alert-warning'>Promotion " + promotionName + " non-créée</div>";
      }
      else {
        app.innerHTML = "<div class=' alert alert-danger'>Erreur fatale !! Veuillez contacter l'administrateur du site</div>";
      }
    }
  };
  // We launch the resquest for real, this time
  request.send(parameters);
};

// Change promotion for promotions
var changePromotion = function (id, promotionName, startDate, endDate) {
  var promotion = {
    "name": promotionName,
    "id": id,
    "startdate": startDate,
    "enddate": endDate,
  };
  var promotionJSON = JSON.stringify(promotion);
  console.log(promotionJSON);
  var request = new XMLHttpRequest();
  var parameters = "promotion=" + promotionJSON;
  request.open("POST", url + "change_promotion.php", true);
  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  request.onreadystatechange = function(e) {
    if (this.readyState == XMLHttpRequest.DONE) {
      var responseCode = JSON.parse(this.response);
      if (responseCode == "success") {
        app.innerHTML = "<div class=' alert alert-succes'>Promotion " + promotionName + " modifiée</div>";
        app.innerHTML += "<a onclick='getPromotions()'>Retour au changement de la promotion</a>";
      }
      else if (responseCode == "failure") {
        app.innerHTML = "<div class=' alert alert-warning'>Promotion " + promotionName + " non modifiée</div>";
      }
      else {
        app.innerHTML = "<div class=' alert alert-danger'>Erreur fatale !! Veuillez contacter l'administrateur du site</div>";
      }
    }
  };
  request.send(parameters);
  console.log(parameters);
}
