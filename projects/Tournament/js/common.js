var pickedPlayers = [];
var pickedMaps = [];
var pickedTeams = [];

var players = [];
var maps = [];
var teams = []
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
        returnValue = "<span class='badge badge-danger badge-pill'>" +  calculateInitiative(arrValue[randomIndex].team - 1)  +"</span> " + arrValue[randomIndex].name;
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

function calculateInitiative(teamID){
	var init = 0;
  if(typeof teams[teamID] !== "undefined" && teams[teamID].composition.length > 0){
    for(var i = 0; i < teams[teamID].composition.length; i++){
  		init += parseInt(teams[teamID].composition[i].init);
  	}
  }
	return init;
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
