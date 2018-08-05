

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
				var id = "";
        var name = players[i]["name"];
        var teamNumber = players[i].team !== "" ? players[i].team : pickAValue(teams, "T", true);
				var points 	= players[i]["points"];
				var tooltipTeam = buildTooltipTeam(teamNumber, teams); // Get team text
				//var tr = $('<tr data-toggle="tooltip" data-placement="right" title="' + tooltipTeam +'">');
				var tr = $('<tr data-toggle="collapse" data-target="#team_' + (i + 1) + '" class="clickable">');

				switch (i){
					case 0:
						id = (i+1) + " <i class='fas fa-trophy' style='color:#FCDD00'></i>";
						break;
					case 1:
						id = (i+1) + " <i class='fas fa-trophy' style='color:#c0c0c0'></i>";
						break;
					case 2:
						id = (i+1) + " <i class='fas fa-trophy' style='color:#cd7f32'></i>";
						break;
					default :
						id = (i+1);
						break;
				}

        tr.append('<td>' + id + '</td>');
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

			"<span class='badge badge-primary badge-pill'>" +
			"<i class='fas fa-bolt'></i> " +  characters[i].init +
			"</span>" + " " +

			"<span class='badge badge-secondary badge-pill'>" +
			"<i class='fas fa-sort-numeric-up'></i> " + 	characters[i].level +
			"</span>" + " " +

			"<span class='badge badge-danger badge-pill'>" +
			"<i class='fas fa-heart' ></i> " + 	characters[i].hp +
			"</span>" + " " +

			characters[i].name +
			"</li>";
	}
	teamName += "</ul>";
	return teamName;
}

function generateTeamTable(id, tn, teams){
	var table = "<tr>";
	table += "<td colspan='2' class='hiddenRow'></td>";
	table += "<td colspan='2' class='hiddenRow'>";
	table += "<div id='team_" + id + "' class='collapse'>";
	table += buildTooltipTeam(tn, teams);
	table += "</div>";
	table += "</td>";
	//table += "<td colspan='1' class='hiddenRow'></td>";
	table += "</tr>";
	return table;
}
