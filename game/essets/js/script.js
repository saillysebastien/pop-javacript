var fiche=function(){
  console.log("yo");
  var agility=document.getElementById('agility').value;
  console.log(agility);
  var strength=document.getElementById('strength').value;
  console.log(strength);
  var endurance=document.getElementById('endurance').value;
  console.log(endurance);
  var total=parseInt(agility) + parseInt(strength) + parseInt(endurance);
  if (total > 100){
    console.log(total);
  }
  else {
    console.log("ok");
  }
}
