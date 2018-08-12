$(document).ready(function(){
	if((typeof players === "undefined" || typeof maps === "undefined" || typeof teams === "undefined" || typeof characters === "undefined")
			|| (players.length < 1 || maps.length < 1 || teams.length < 1 || characters.length < 1 )){
			// Doc has not been init before
			initGlobalVariables();
			includeHTML();
			intitalizeEvent();
	}
	generateTournamentData();
});

function generateTournamentData(){
			// Class by point
			sortResults(players, "points", false);
      buildTournamentTable();
}

function buildTournamentTable(){
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
				$('#tournamentGenerationTBody').append(tr);
	}
}
