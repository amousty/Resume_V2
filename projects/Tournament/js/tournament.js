

$(document).ready(function(){
	loadPlayers();
  intitalizeEvent();
	includeHTML();
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
				//var tr = $('<tr data-toggle="tooltip" data-placement="right" title="' + tooltipTeam +'">');
				var tr = $('<tr data-toggle="collapse" data-target="#team_' + (i + 1) + '" class="clickable">');

				tr.append($('<td>').text(i + 1));
        tr.append($('<td>').text(name));
        tr.append($('<td>').text(teams[teamNumber-1].name + " (" + teamNumber + ")")); // Append the tooltip
				tr.append($('<td>').text(points));
				$('#playersTable').append(tr);
				$('#playersTable').append(generateTeamTable(i+1, teamNumber, teams));
	}
}

function buildTooltipTeam(tn, teams){
	var teamName = "";
	var lineBreak = "&#013;";
	var characters = teams[tn-1].composition;
	teamName += "<ul class='list-group list-group-flush'>";
	for(var i = 0; i < characters.length; i++){
		teamName +=
			"<li class='list-group-item " + characters[i].type + "'>" +
			"<span class='badge badge-primary badge-pill'>" +  characters[i].init + "</span>" +
			' ' +
			characters[i].name +
			"</li>";
	}
	teamName += "</ul>";
	return teamName;
}

function generateTeamTable(id, tn, teams){
	var table = "<tr>";
	table += "<td colspan='2' class='hiddenRow'></td>";
	table += "<td colspan='1' class='hiddenRow'>";
	table += "<div id='team_" + id + "' class='collapse'>";
	table += buildTooltipTeam(tn, teams);
	table += "</div>";
	table += "</td>";
	table += "<td colspan='1' class='hiddenRow'></td>";
	table += "</tr>";
	return table;
}
