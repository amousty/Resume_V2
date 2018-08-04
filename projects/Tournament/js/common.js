var pickedPlayers = [];
var pickedMaps = [];
var pickedTeams = [];
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
        returnValue = arrValue[randomIndex].name;
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
