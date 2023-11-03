//import Chart from 'chart.js/auto'
let myChart;
let datasets;
let tiempos;



function setDatasets(){
	let n=20;
	if( datosValidos ){
		datasets=[
			{
				label:up_burstLimit.name,
				backgroundColor: lightensColor(up_burstLimit.color),
				borderColor: up_burstLimit.color,
				data:Array(n).fill(up_burstLimit.valor/M)
			},
			{
				label:up_maxLimit.name,
				backgroundColor: lightensColor(up_maxLimit.color),
				borderColor: up_maxLimit.color,
				data:Array(n).fill(up_maxLimit.valor/M)
			},
			{
				label:up_burstThreshold.name,
				backgroundColor: lightensColor(up_burstThreshold.color),
				borderColor: up_burstThreshold.color,
				data:Array(n).fill(up_burstThreshold.valor/M)
			},
			{
				label:up_limitAt.name,
				backgroundColor: lightensColor(up_limitAt.color),
				borderColor: up_limitAt.color,
				data:Array(n).fill(up_limitAt.valor/M)
			},
		];
		tiempos=[...Array(n).keys()];;
	}
	else{
		datasets=[];
	}
}

function drawChart(){

	
	let config={
		type: 'line',
		data: {
			labels: tiempos,
			datasets: datasets
		},
		options: {
			animation: {
				duration: 0 // general animation time
			},
			hover: {
				animationDuration: 0 // duration of animations when hovering an item
			},
			responsiveAnimationDuration: 0, // animation duration after a resize
			scales: {
				y: {
					min: 0,
					title: {
						display: true,
						text: 'Mbps'
					},
				},
				x: {
					min: 0,
					title: {
						display: true,
						text: 'Tiempo (s)'
					},
				}
			},
			maintainAspectRatio: true,
			responsive:true,
		}
	}

	if (typeof myChart == 'object'){
		myChart.destroy();
	}

	myChart = new Chart(
		document.getElementById('myChart'),
		config
	);

};

function addData(chart, label, newData) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(newData);
    });
    chart.update();
}

function removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
}
