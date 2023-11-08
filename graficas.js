//import Chart from 'chart.js/auto'
let myChart;
let datasets;
let tiempos;


const average = arr => arr.reduce( ( p, c ) => p + c, 0 ) / arr.length;

function setDatasets(){
	
	
	if( datosValidos ){
		let n=0;
		let t=0;
		let i=0;
		let dt=roundDown(up_burstTime.valor)/16;
		let bloque=[{t:0,s:32e6,cargado:false},{t:17,s:32e6,cargado:false}];
		let actualRate;
		let averageRate=0;
		let arrayRate=new Array(16).fill(0);
		let carga=0.0;
		let arrayActualRate=[];
		let arrayAverageRate=[];
		
		let arrayTimes=bloque.map( ({t}) => t );
		let minTime=Math.max(...arrayTimes);
		let extra=0;
		console.log(arrayTimes,minTime);
		console.log(t<minTime, carga!=0,t<minTime || carga!=0)
		while(extra<2){
			if( !(t<=minTime || carga>0) ){
				extra++;
			}
			//console.log("*",t,carga,bloque);
			bloque.forEach((element)=>{
				if(!element.cargado && element.t<=t){
					//console.log("**",element)
					carga=carga+element.s;
					element.cargado=true;
				}
			});
			
			averageRate=average(arrayRate)*M;
			arrayAverageRate.push(averageRate/M);
			if(averageRate < up_burstThreshold.valor){
				//se permite la rafaga
				actualRate=up_burstLimit.valor;
				
			}
			else{
				actualRate=up_maxLimit.valor;
			}
			if(carga==0){
				actualRate=0;
			}
			
			if(carga-actualRate>=0){
				carga=carga-actualRate;
			}
			else{
				actualRate=carga;
				carga=0;
			}
			
			
			
			
			
			arrayActualRate.push(actualRate/M);
			
			console.log(n,arrayRate,B2MB_KB(averageRate),B2MB_KB(actualRate),carga/M)
			
			arrayRate[i]=actualRate/M;
			i=(i+1)%16;
			t=t+dt;
			n++;
			//console.log(averageRate/M,up_burstThreshold.valor/M,actualRate/M,up_burstLimit.valor/M,up_maxLimit.valor/M)
			
		}
		
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
			{
				label:"Actual Rate",
				backgroundColor: lightensColor("black"),
				borderColor: "black",
				borderWidth: 5,
				data:arrayActualRate
			},
			{
				label:"Average Rate",
				backgroundColor: lightensColor("SaddleBrown"),
				borderColor: "SaddleBrown",
				borderWidth: 5,
				data:arrayAverageRate
			},
			
		];
		tiempos=[...Array(n).keys()];
		
		
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
