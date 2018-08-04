var players = [];
var maps = [];

$(document).ready(function(){
	generateTournamentData();
	//alert(players[0]);
  intitalizeEvent();
});

function generateTournamentData(){
	$.ajax({
		type: 'POST',
		url: 'data.json',
		dataType: 'json',
		success : function(result) {
			players = result.players;
      maps = result.maps;
			// Class by point
			sortResults(players, "points", false);

      buildTournamentTable(players, maps);
		},
		error : function(jqXHR, textStatus, errorThrown) {
			console.log("error " + textStatus);
			console.log("incoming Text " + jqXHR.responseText);
		}
	});
}

function buildTournamentTable(players, maps){
	for(var i = 0; i < (players.length/2); i++){
				var id = i + 1;
        var map = pickAValue(maps, "M", true);
        var j1 = pickAValue(players, "P", false);
				var j2 	= pickAValue(players, "P", false);


        // BYE CHECK
        if(j2 === ""){
          map = "BYE";
          j2 = "/";
          j1 += " (+3pts)"
        }

				var tr = $('<tr>');
        tr.append($('<td>').text(id));
        tr.append($('<td>').text(map));
				tr.append($('<td>').text(j1));
				tr.append($('<td>').text(j2));
				$('#tournamentGeneration').append(tr);
	}
}
