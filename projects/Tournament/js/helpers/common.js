var pickedPlayers = [];
var pickedMaps = [];
var pickedTeams = [];

var players = [];
var maps = [];
var teams = []
var characters = [];
var urlData = 'data.json';

function initGlobalVariables(){
  	$.ajax({
  		type: 'POST',
  		url: urlData,
  		dataType: 'json',
      async:false,
  		success : function(result) {
  			players = result.players;
        maps = result.maps;
  			teams = result.teams;
  			characters = result.characters;
  		},
      error : function (jqXHR, textStatus, errorThrown){
        console.log("error " + textStatus);
  			console.log("incoming Text " + jqXHR.responseText);
      }
  	});
}

function intitalizeEvent(){
  $("#menu-toggle").click(function (e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
      if($('#menu-toggle').hasClass('fa-angle-left')){
        $('#menu-toggle').addClass("fa-angle-right");
        $('#menu-toggle').removeClass("fa-angle-left");
      }
      else{
        $('#menu-toggle').addClass('fa-angle-left');
        $('#menu-toggle').removeClass("fa-angle-right");
      }
  });

  $('[data-toggle="tooltip"]').tooltip();
  $('.collapse').collapse()
}

function sortResults(arr, prop, asc) {
    arr = arr.sort(function(a, b) {
        if (asc) return (a[prop] > b[prop]);
        else return (b[prop] > a[prop]);
    });

}

function  pickAValue(arrValue, type, random){
  var arrPicked = type === "P" ? pickedPlayers : type === "M" ? pickedMaps : pickedTeams;
  var returnValue = "";
  var found = false;
  var randomIndex = 0;
  var i = arrPicked.length;
  //for(var i = 0; i < arrValue.length; i++){
  while(!found && random ? true : i < arrValue.length){
    //debugger;
    randomIndex = random ? Math.floor((Math.random() * (arrValue.length)) + 0) : i;
    if(!found && $.inArray(arrValue[randomIndex], arrPicked) === -1){
      if(type === "M"){
        returnValue = arrValue[randomIndex];
        pickedMaps.push(arrValue[randomIndex]);
      }
      else if(type === "P"){
        returnValue += "<span class='badge badge-secondary badge-pill'>";
        returnValue += "<i class='fas fa-sort-numeric-up'></i> " + 	arrValue[randomIndex].points;
        returnValue += "</span> ";
        returnValue += "<span class='badge badge-primary badge-pill'>";
        returnValue += "<i class='fas fa-bolt'></i> " +  calculateTeamValue(arrValue[randomIndex].team - 1, "INIT");
        returnValue += "</span> ";
        returnValue += arrValue[randomIndex].name;
        pickedPlayers.push(arrValue[randomIndex]);
      }
      else if(type === "T"){
        returnValue = arrValue[randomIndex].id;
        pickedTeams.push(arrValue[randomIndex]);
      }
      found = true;
    }
    i++;
  }
    return returnValue;
}

function calculateTeamValue(teamID, type){
	var finalVal = 0;
  if(typeof teams[teamID] !== "undefined" && teams[teamID].composition.length > 0){
    for(var i = 0; i < teams[teamID].composition.length; i++){
      switch(type){
        case "HP" :
        case "AVGHP" :
          finalVal += parseInt(characters[teams[teamID].composition[i].id].hp);
          break;
        case "PA" :
        case "AVGPA" :
          finalVal += parseInt(characters[teams[teamID].composition[i].id].pa);
          break;
        case "PM" :
        case "AVGPM" :
          finalVal += parseInt(characters[teams[teamID].composition[i].id].pm);
          break;
        case "INIT" :
        default :
          finalVal += parseInt(characters[teams[teamID].composition[i].id].init);
          break;
      }

  	}
  }
  if(type.includes("AVG")){
    finalVal /= teams[teamID].composition.length;
    //parseFloat(finalVal).toFixed(2);
    finalVal = finalVal.toFixed(2);
  }
	return finalVal;
}


function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
};

function getOwnerTeam(teamID){
  for(var i = 0; i < players.length; i++){
    if(parseInt(players[i].team) === teamID){
      return players[i];
      break;
    }
  }
  return teams[teamID-1];
}

function getIdTeamByPlayer(playerID){
  for(var i = 0; i < teams.length; i++){
    if(parseInt(teams[i].id) === playerID){
      return (teams[i].id -1);
      break;
    }
  }
}
