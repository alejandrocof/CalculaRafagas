//import Chart from 'chart.js/auto'
let myChart;
var datasets;



function setDatasets(){
	
	datasets=[
		{
			label:up_burstLimit.name,
			backgroundColor: lightensColor(up_burstLimit.color),
			borderColor: up_burstLimit.color,
			data:Array(12).fill(up_burstLimit.valor/M)
		},
		{
			label:up_maxLimit.name,
			backgroundColor: lightensColor(up_maxLimit.color),
			borderColor: up_maxLimit.color,
			data:Array(12).fill(up_maxLimit.valor/M)
		},
		{
			label:up_burstThreshold.name,
			backgroundColor: lightensColor(up_burstThreshold.color),
			borderColor: up_burstThreshold.color,
			data:Array(12).fill(up_burstThreshold.valor/M)
		},
		{
			label:up_limitAt.name,
			backgroundColor: lightensColor(up_limitAt.color),
			borderColor: up_limitAt.color,
			data:Array(12).fill(up_limitAt.valor/M)
		},
		
	];
}
function drawChart(){

	const tiempos=[0,1,2,3,4,5,6,7,8,9,10,11];
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
