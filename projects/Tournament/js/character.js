$(document).ready(function(){
	if((typeof players === "undefined" || typeof maps === "undefined" || typeof teams === "undefined" || typeof characters === "undefined")
			|| (players.length < 1 || maps.length < 1 || teams.length < 1 || characters.length < 1) ){
			// Doc has not been init before
			initGlobalVariables();
			includeHTML();
			intitalizeEvent();
	}
	loadCharacters();
});


function loadCharacters(){
			// Class by point
			sortResults(characters, "hp", false);
			buildCharacterTable();
}

function buildCharacterTable(){
	for(var i = 0; i < characters.length; i++){
				var id = characters[i]["id"];
        var name = characters[i]["name"];
        var type = characters[i]["type"];
        var level = characters[i]["level"];
        var init = characters[i]["init"];
        var hp = characters[i]["hp"];
        var PA = characters[i]["pa"];
        var PM = characters[i]["pm"];

				var tr = $('<tr>');

        tr.append($('<td>').text(id));
        tr.append($('<td>').text(name));
        tr.append($('<td>').text(type)); // Append the tooltip
				tr.append($('<td>').text(level));
        tr.append($('<td>').text(init));
        tr.append($('<td>').text(hp));
        tr.append($('<td>').text(PA));
        tr.append($('<td>').text(PM));
				$('#characterTableTBody').append(tr);
				//$('#characterTable').append(generateTeamTable(i+1, teamNumber, teams));
	}
}
