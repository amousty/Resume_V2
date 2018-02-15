// https://scotch.io/bar-talk/4-javascript-design-patterns-you-should-know
// -> Module Design Pattern
var x = 8; // TAILLE VERTICALE   DE LA MAP IMPORTANT
var y = 10;// TAILLE HORIZONTALE DE LA MAP IMPORTANT

var map = (function(){
   // PRIVATE
   var init = function(){
      generateMap();
   }

   // PUBLIC
   return {
    callInit: function() {
      init();
    }
  };
})();

// CALL METHODS

$(document).ready(function(){
  map.callInit();
});

// RPCS
function generateMap(){
  var $form = $(this);
  var url = "../php/rpc/map.php";
  /* Send the data using post with element id name and name2*/
  $.post(url).success(
      function( data ) {
        displayMap(data);
      }
  );
} // end function

function displayMap(str)
{
  alert(str);
  var hexagon;
  var top   = 0;
  var left  = 0;

  $('#map').innerHTML = ""; // On vide la map.
  var recup = str.split("|");
  // -> séparer une première fois les groupes entre pipe (|) en x éléments
  for(var k = 0; k < recup.length; k++)
  {
    recup[k] = recup[k].split(",");
    //-> on choppe un tableau double dimension recup[i][j] car on a sépare à nouveau en y éléments
  }
  for (var i = 0; i < x; i++)
  {
    for(var j = 0; j < y; j++)
    {
      posVillage = 'h' + i + j;
      posi = i + "";
      posj = j + "";

      hexagon = document.createElement("div");
      hexagon.id = posVillage;
      hexagon.style.backgroundImage  = "url('../img/hex/hex" + recup[i][j] + ".png')";

      /* PLACEMENT DES ELEMENTS */
      top   = i*86+(j%2)*43;
      left  = j*75;
      hexagon.style.top  = top   + 'px';
      hexagon.style.left = left  + 'px';
      hexagon.onclick = onclickVillage(hexagon, i, j);
      posyTmp = i;
      posxTmp = j;
      $('#map').append(hexagon);
      /* -> on ajoute l'element qu'on a crée à la fin d'un élement, ici map.*/
    }
  }
  /* pour gérer les coordonnées impaires*/
  $('#map').width((y*73 + 43) + 'px');
  $('#map').height((x*86 + 43) + 'px');
}

function onclickVillage(hexagon, i, j){
  /* This function is created in order to avoid callback event */
  return function(){
    window.location.href='myVillage.php?x=' + i + '&y=' + j;
  }
}


   // Redirect to the error page
   function redirectToErrorPage(errorText){
     //$('#errorText').val(errorText);
     window.location.href = "views/error.php?err=" + errorText;
   }
