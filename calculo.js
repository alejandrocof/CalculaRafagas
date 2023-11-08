const doc_up_maxLimit = document.querySelector( '#up_maxLimit' );
const doc_up_burstLimit = document.querySelector( '#up_burstLimit' );
const doc_up_actualBurstTime = document.querySelector( '#up_actualBurstTime' );
const doc_up_burstThreshold = document.querySelector( '#up_burstThreshold' );
const doc_up_burstThresholdRatio = document.querySelector( '#up_burstThresholdRatio' );
const doc_up_burstThresholdRatioSpan = document.querySelector( '#up_burstThresholdRatioSpan' );
const doc_up_limitAt = document.querySelector( '#up_limitAt' );
const doc_up_limitAtRatio = document.querySelector( '#up_limitAtRatio' );
const doc_up_limitAtRatioSpan = document.querySelector( '#up_limitAtRatioSpan' );

const doc_down_maxLimit = document.querySelector( '#down_maxLimit' );
const doc_down_burstLimit = document.querySelector( '#down_burstLimit' );
const doc_down_actualBurstTime = document.querySelector( '#down_actualBurstTime' );
const doc_down_burstThreshold = document.querySelector( '#down_burstThreshold' );
const doc_down_burstThresholdRatio = document.querySelector( '#down_burstThresholdRatio' );
const doc_down_burstThresholdRatioSpan = document.querySelector( '#down_burstThresholdRatioSpan' );
const doc_down_limitAt = document.querySelector( '#down_limitAt' );
const doc_down_limitAtRatio = document.querySelector( '#down_limitAtRatio' );
const doc_down_limitAtRatioSpan = document.querySelector( '#down_limitAtRatioSpan' );

const doc_line1_up_burstThreshold = document.querySelector( '#line1_up_burstThreshold' );
const doc_line1_up_burstTime = document.querySelector( '#line1_up_burstTime' );
const doc_line1_up_burstLimit = document.querySelector( '#line1_up_burstLimit' );
const doc_line1_up_actualBurstTime = document.querySelector( '#line1_up_actualBurstTime' );

const doc_line1_down_burstThreshold = document.querySelector( '#line1_down_burstThreshold' );
const doc_line1_down_burstTime = document.querySelector( '#line1_down_burstTime' );
const doc_line1_down_burstLimit = document.querySelector( '#line1_down_burstLimit' );
const doc_line1_down_actualBurstTime = document.querySelector( '#line1_down_actualBurstTime' );

const doc_line2_up_maxLimit = document.querySelector( '#line2_up_maxLimit' );
const doc_line2_up_burstLimit = document.querySelector( '#line2_up_burstLimit' );
const doc_line2_up_actualBurstTime = document.querySelector( '#line2_up_actualBurstTime' );

const doc_line2_down_maxLimit = document.querySelector( '#line2_down_maxLimit' );
const doc_line2_down_burstLimit = document.querySelector( '#line2_down_burstLimit' );
const doc_line2_down_actualBurstTime = document.querySelector( '#line2_down_actualBurstTime' );

const doc_res_up_maxLimit = document.querySelector( '#res_up_maxLimit' );
const doc_res_down_maxLimit = document.querySelector( '#res_down_maxLimit' );
const doc_res_up_burstLimit = document.querySelector( '#res_up_burstLimit' );
const doc_res_down_burstLimit = document.querySelector( '#res_down_burstLimit' );
const doc_res_up_burstThreshold = document.querySelector( '#res_up_burstThreshold' );
const doc_res_down_burstThreshold = document.querySelector( '#res_down_burstThreshold' );
const doc_res_up_burstTime = document.querySelector( '#res_up_burstTime' );
const doc_res_down_burstTime = document.querySelector( '#res_down_burstTime' );
const doc_res_priority = document.querySelector( '#res_priority' );
const doc_res_up_limitAt = document.querySelector( '#res_up_limitAt' );
const doc_res_down_limitAt = document.querySelector( '#res_down_limitAt' );


let K=1e3;
let M=1e6;
let datosValidos=true;
//let K=1024;
//let M=1024*1024;

let maxLimit_color="blue";
let burstLimit_color="red";
let burstThreshold_color="green";
let limitAt_color="gray";

let actualBurstTime_color="DarkOrange";
let burstTime_color="DarkViolet";
let priority_color="CadetBlue";


//let up_maxLimit={valor:512*K, type:"B", color:maxLimit_color, error:false,name:"Max-Limit"};//"DarkGreen"
let up_maxLimit={valor:2*M, type:"B", color:maxLimit_color, error:false,name:"Max-Limit"};
//let up_burstLimit={valor:1*M, type:"B", color:burstLimit_color, error:false,name:"Burst-Limit"};//"DeepSkyBlue"
let up_burstLimit={valor:4*M, type:"B", color:burstLimit_color, error:false,name:"Burst-Limit"};
let up_actualBurstTime={valor:6, type:"T", color:actualBurstTime_color, error:false};

let down_maxLimit={valor:1*M, type:"B", color:maxLimit_color, error:false};//"DarkGreen"
let down_burstLimit={valor:2*M, type:"B", color:burstLimit_color, error:false};//"DeepSkyBlue"
let down_actualBurstTime={valor:6, type:"T", color:actualBurstTime_color, error:false};

let up_burstThreshold={type:"B", color:burstThreshold_color, error:false,name:"Burst-Threshold"};//"DarkBlue"
let up_burstThresholdRatio={type:"R", color:darkensColor(burstThreshold_color), error:false};

let down_burstThreshold={type:"B", color:burstThreshold_color, error:false};//"DarkBlue"
let down_burstThresholdRatio={type:"R", color:darkensColor(burstThreshold_color), error:false};

let up_limitAt={type:"B", color:limitAt_color, error:false,name:"Limit-At"};//"OrangeRed"
let up_limitAtRatio={type:"R", color:darkensColor(limitAt_color), error:false};

let down_limitAt={type:"B", color:limitAt_color, error:false};//"OrangeRed"
let down_limitAtRatio={type:"R", color: darkensColor(limitAt_color), error:false};

let up_burstTime={type:"T",color:burstTime_color, error:false};
let down_burstTime={type:"T",color: burstTime_color , error:false};

let priority={valor:8, type:"U",color:priority_color, error:false};

//root.style.setProperty('--colorburstthreshold','red');
document.documentElement.style.setProperty('--colorburstthreshold1',burstThreshold_color);
document.documentElement.style.setProperty('--colorburstthreshold2',lightensColor(burstThreshold_color));
document.documentElement.style.setProperty('--colorlimitat1',limitAt_color);
document.documentElement.style.setProperty('--colorlimitat2',lightensColor(limitAt_color));
//doc_sliderBurstThreshold._webkit_slider_thumb = "background:red";
//doc_sliderBurstThreshold.style.color(burstThreshold_color);
//doc_sliderLimitAt.style.color(limitAt_color);

let sliderValues=[
	{text:"1/8",valor:0.125},
	{text:"1/4",valor:0.25},
	{text:"3/8",valor:0.375},
	{text:"1/2",valor:0.5},
	{text:"5/8",valor:0.625},
	{text:"3/4",valor:0.75},
	{text:"7/8",valor:0.875},
]


setValueDoc(doc_up_maxLimit,up_maxLimit);
setValueDoc(doc_up_burstLimit,up_burstLimit);
setValueDoc(doc_up_actualBurstTime,up_actualBurstTime);

setValueDoc(doc_down_maxLimit,down_maxLimit);
setValueDoc(doc_down_burstLimit,down_burstLimit);
setValueDoc(doc_down_actualBurstTime,down_actualBurstTime);

//doc_up_actualBurstTime.value=up_actualBurstTime.valor;

doc_up_burstThresholdRatio.min=0;
doc_up_burstThresholdRatio.max=sliderValues.length-1;
doc_up_burstThresholdRatio.step=1;
doc_up_burstThresholdRatio.value=5;

doc_down_burstThresholdRatio.min=0;
doc_down_burstThresholdRatio.max=sliderValues.length-1;
doc_down_burstThresholdRatio.step=1;
doc_down_burstThresholdRatio.value=5;

doc_up_limitAtRatio.min=0;
doc_up_limitAtRatio.max=sliderValues.length-1;
doc_up_limitAtRatio.step=1;
doc_up_limitAtRatio.value=3;

doc_down_limitAtRatio.min=0;
doc_down_limitAtRatio.max=sliderValues.length-1;
doc_down_limitAtRatio.step=1;
doc_down_limitAtRatio.value=3;

function obtenerValorKM(cadena,v) {
	// Expresión regular para buscar un número seguido de "k" o "M"
	const regex = /^(\d+(\.\d+)?)([kM])$/;
	// Intenta hacer coincidir la cadena con la expresión regular
	const match = cadena.match(regex);
	if (match) {
		let unidad = match[3]; // Extraer la unidad ("k" o "M")
		let valor;
		if(unidad=='k'){
			valor = parseFloat(match[1])*K;
		}else{
			valor = parseFloat(match[1])*M;
		}
		
		let text=cadena;
		let error=false;
		Object.assign(v, {valor, unidad, text, error});
	} else {
		console.log("La cadena no tiene el formato deseado");
		let error=true;
		datosValidos=false;
		Object.assign(v, {error});
	}
}


function setData(){
	//removeData(Chart);
	datosValidos=true;
	obtenerValorKM(doc_up_maxLimit.value,up_maxLimit);
	obtenerValorKM(doc_up_burstLimit.value,up_burstLimit);
	obtenerValorKM(doc_down_maxLimit.value, down_maxLimit);
	obtenerValorKM(doc_down_burstLimit.value, down_burstLimit);
	
	up_actualBurstTime.valor=parseFloat(doc_up_actualBurstTime.value);
	down_actualBurstTime.valor=parseFloat(doc_down_actualBurstTime.value);
	
	Object.assign(up_limitAtRatio,sliderValues[doc_up_limitAtRatio.value]);
	Object.assign(up_burstThresholdRatio,sliderValues[doc_up_burstThresholdRatio.value]);
	Object.assign(down_limitAtRatio,sliderValues[doc_down_limitAtRatio.value]);
	Object.assign(down_burstThresholdRatio,sliderValues[doc_down_burstThresholdRatio.value]);
	
	up_burstThreshold.valor=parseFloat(up_burstThresholdRatio.valor)*up_maxLimit.valor;
	up_limitAt.valor=parseFloat(up_limitAtRatio.valor)*up_maxLimit.valor;
	down_burstThreshold.valor=parseFloat(down_burstThresholdRatio.valor)*down_maxLimit.valor;
	down_limitAt.valor=parseFloat(down_limitAtRatio.valor)*down_maxLimit.valor;
	
	up_burstTime.valor=up_actualBurstTime.valor*up_burstLimit.valor/up_burstThreshold.valor;
	down_burstTime.valor=down_actualBurstTime.valor*down_burstLimit.valor/down_burstThreshold.valor;
	
	setDatasets();
}


doc_up_burstThresholdRatio.oninput = () => update();
doc_up_limitAtRatio.oninput = () => update();
doc_down_burstThresholdRatio.oninput = () => update();
doc_down_limitAtRatio.oninput = () => update();
function roundDown(number) {
	var decimalPart = number % 1;
	if (decimalPart <= 0.5){
		return Math.trunc(number);
	}
	else{
		return Math.trunc(number)+1;
	}
}
function B2MB_KB(v){
	if(v>=M){
		let r=v/M;
		if( r-Math.trunc(r)>0 ){
			return String(roundDown(v/K))+"k";
		}
		else{
			return String(v/M)+"M";
		}
	}
	return String(roundDown(v/K))+"k";
}

function setValueDoc(doc,v){
	doc.style.color = v.color;
	doc.style.fontWeight="bold";
	//doc.style.fontSize="12px";
	if(!v.error && datosValidos){
		let value,text;
		if(v.type=="B"){
			value=B2MB_KB(v.valor);
			text=value;
		}
		if(v.type=="T"){
			//value=String(v.valor.toFixed(5).replace(/\.?0*$/,''));
			value=String(roundDown(v.valor));
			text=value;
		}
		if(v.type=="R"){
			value=String(v.text);
			text=value;
		}
		if(v.type=="U"){
			value=String(v.valor);
			text=value;
		}
		doc.value=value;
		doc.textContent=text;
	}
	else{
		doc.textContent="-"
	}
	
}



function update(){
	
	setData();
	drawChart();
	
	setValueDoc(doc_up_burstThreshold,up_burstThreshold);
	setValueDoc(doc_up_burstThresholdRatioSpan,up_burstThresholdRatio);
	setValueDoc(doc_up_limitAt,up_limitAt);
	setValueDoc(doc_up_limitAtRatioSpan,up_limitAtRatio);
	
	setValueDoc(doc_down_burstThreshold,down_burstThreshold);
	setValueDoc(doc_down_burstThresholdRatioSpan,down_burstThresholdRatio);
	setValueDoc(doc_down_limitAt,down_limitAt);
	setValueDoc(doc_down_limitAtRatioSpan,down_limitAtRatio);
	
	setValueDoc(doc_line1_up_burstThreshold,up_burstThreshold);
	setValueDoc(doc_line1_up_burstTime,up_burstTime);
	setValueDoc(doc_line1_up_burstLimit,up_burstLimit);
	setValueDoc(doc_line1_up_actualBurstTime,up_actualBurstTime);
	
	setValueDoc(doc_line1_down_burstThreshold,down_burstThreshold);
	setValueDoc(doc_line1_down_burstTime,down_burstTime);
	setValueDoc(doc_line1_down_burstLimit,down_burstLimit);
	setValueDoc(doc_line1_down_actualBurstTime,down_actualBurstTime);
	
	setValueDoc(doc_line2_up_maxLimit,up_maxLimit);
	setValueDoc(doc_line2_up_burstLimit,up_burstLimit);
	setValueDoc(doc_line2_up_actualBurstTime,up_actualBurstTime);
	
	setValueDoc(doc_line2_down_maxLimit,down_maxLimit);
	setValueDoc(doc_line2_down_burstLimit,down_burstLimit);
	setValueDoc(doc_line2_down_actualBurstTime,down_actualBurstTime);
	
	setValueDoc(doc_res_up_maxLimit,up_maxLimit);
	setValueDoc(doc_res_down_maxLimit,down_maxLimit);
	setValueDoc(doc_res_up_burstLimit,up_burstLimit);
	setValueDoc(doc_res_down_burstLimit,down_burstLimit);
	setValueDoc(doc_res_up_burstThreshold,up_burstThreshold);
	setValueDoc(doc_res_down_burstThreshold,down_burstThreshold);
	setValueDoc(doc_res_up_burstTime,up_burstTime);
	setValueDoc(doc_res_down_burstTime,down_burstTime);
	setValueDoc(doc_res_priority,priority);
	setValueDoc(doc_res_up_limitAt,up_limitAt);
	setValueDoc(doc_res_down_limitAt,down_limitAt);
}
