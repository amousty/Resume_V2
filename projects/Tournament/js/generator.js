

$(document).ready(function(){
	generateTournamentData();
	//alert(players[0]);
  intitalizeEvent();
	includeHTML();
});

function generateTournamentData(){
	$.ajax({
		type: 'POST',
		url: 'data.json',
		dataType: 'json',
		success : function(result) {
			players = result.players;
      maps = result.maps;
			teams = result.teams;
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
        tr.append('<td>' + id + '</td>');
        tr.append($('<td>').text(map));
				tr.append('<td>' + j1 + '</td>');
				tr.append('<td>' + j2 + '</td>');
				$('#tournamentGeneration').append(tr);
	}
}
