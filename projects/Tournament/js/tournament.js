var players;
var teams = [];

$(document).ready(function(){
	loadPlayers();
  intitalizeEvent();
});


function loadPlayers(){
	$.ajax({
		type: 'POST',
		url: 'data.json',
		dataType: 'json',
		success : function(result) {
			players = result.players;
			teams = result.teams;
			// Class by point
			sortResults(players, "points", false);

			buildPlayersTable(players, teams);
		},
		error : function(jqXHR, textStatus, errorThrown) {
			console.log("error " + textStatus);
			console.log("incoming Text " + jqXHR.responseText);
		}
	});
}

function buildPlayersTable(players, teams){
	for(var i = 0; i < players.length; i++){
        var name = players[i]["name"];
        var teamNumber = players[i].team !== "" ? players[i].team : pickAValue(teams, "T", true);
				var points 	= players[i]["points"];
				var tooltipTeam = buildTooltipTeam(teamNumber, teams); // Get team text
				var tr = $('<tr data-toggle="tooltip" data-placement="right" title="' + tooltipTeam +'">');


        tr.append($('<td>').text(name));
        tr.append($('<td>').text(teamNumber)); // Append the tooltip
				tr.append($('<td>').text(points));
				$('#playersTable').append(tr);
	}
}

function buildTooltipTeam(tn, teams){
	var teamName = "";
	var lineBreak = "&#013;";
	for(var i = 0; i < teams[tn-1].composition.length; i++){
		teamName += teams[tn-1].composition[i].name + lineBreak;
	}
	return teamName;
}
