$(document).ready(function(){
  buildChart();
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
  for(var i = 0; i < teams.length; i++){
    var dataToPush = {};

    dataToPush.label = teams[i].name,
    dataToPush.borderColor = teams[i].colour,
    dataToPush.backgroundColor = teams[i].colour,
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
			title: {
				display: true,
			},
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
