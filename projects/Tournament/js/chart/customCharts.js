$(document).ready(function(){
  buildChart();
  buildDoughnutDataSet(1);
});

var lineChartData = {
			labels: ['HP', 'AVG HP', 'INIT', 'AVG PA', 'AVG PM'],
			datasets: buildDataSet()
};

function buildDataSet(){
  if((typeof players === "undefined" || typeof maps === "undefined" || typeof teams === "undefined" || typeof characters === "undefined")
      || (players.length < 1 || maps.length < 1 || teams.length < 1 || characters.length < 1 )){
      // Doc has not been init before
      initGlobalVariables();
      includeHTML();
      intitalizeEvent();
  }
  var myDataset = [];
  for(var i = 1; i <= players.length; i++){
    var idTeam = getIdTeamByPlayer(i);
    var dataToPush = {};
    dataToPush.label = players[i-1].name,
    dataToPush.borderColor = teams[idTeam].colour,
    dataToPush.backgroundColor = teams[idTeam].colour,
    dataToPush.fill= false,
    dataToPush.data= [
      calculateTeamValue(i, "HP"),
      calculateTeamValue(i, "AVGHP"),
      calculateTeamValue(i, "INIT"),
      calculateTeamValue(i, "AVGPA"),
      calculateTeamValue(i, "AVGPM")
    ],
    dataToPush.yAxisID= 'y-axis-1',
    myDataset.push(dataToPush);
  }
  return myDataset;
}

function buildChart(){
	var ctx = document.getElementById('canvas').getContext('2d');
  window.myBar = new Chart(ctx, {
		type: 'bar',
		data: lineChartData,
		options: {
			responsive: true,
			hoverMode: 'index',
			stacked: false,
			scales: {
				yAxes: [{
					type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
					display: true,
					position: 'left',
					id: 'y-axis-1',
          ticks: {
            beginAtZero:true
          }
				}],
			}
		}
	});
}

/* Doughtnut */
function buildDoughnutDataSet(idTeam){
  if((typeof players === "undefined" || typeof maps === "undefined" || typeof teams === "undefined" || typeof characters === "undefined")
      || (players.length < 1 || maps.length < 1 || teams.length < 1 || characters.length < 1 )){
      // Doc has not been init before
      initGlobalVariables();
      includeHTML();
      intitalizeEvent();
  }
  var configDoughnut = {
  			type: 'doughnut',
  			data: {
  				datasets: [{
  					data: [
              calculateTeamValue(idTeam, "HP"),
              calculateTeamValue(idTeam, "AVGHP"),
              calculateTeamValue(idTeam, "INIT"),
              calculateTeamValue(idTeam, "AVGPA"),
              calculateTeamValue(idTeam, "AVGPM")
  					],
  					backgroundColor: [
  						teams[0].colour,
              teams[1].colour,
              teams[2].colour,
              teams[3].colour,
              teams[4].colour,

  					]
  				}],
  				labels: [
  					lineChartData.labels[0],
            lineChartData.labels[1],
  					lineChartData.labels[2],
  					lineChartData.labels[3],
  					lineChartData.labels[4]
  				]
  			},
  			options: {
  				responsive: true,
          maintainAspectRatio: false,
  				legend: {
  					position: 'top',
  				},
  				animation: {
  					animateScale: true,
  					animateRotate: true
  				}
  			}
  		};

  var ctx = document.getElementById('doughnutChart').getContext('2d');
  ctx.canvas.height = 500;
  window.myDoughnut = new Chart(ctx, configDoughnut);
}
