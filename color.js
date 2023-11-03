function hex2rgb(hex) {
	hex = hex.replace(/[^0-9A-F]/gi, '');
	var bigint = parseInt(hex, 16);
	return [ bigint >> 16 & 255, bigint >> 8 & 255, bigint & 255];
}

function standardizeColor(str){
	var ctx = document.createElement("canvas").getContext("2d");
	ctx.fillStyle = str;
	return ctx.fillStyle;
}

function rgb2Hex(color) {
	return "#" + (1 << 24 | color[0] << 16 | color[1] << 8 | color[2]).toString(16).slice(1);
}

function lightensColor(color){
	//console.log(color)
	//console.log(standardizeColor(color))
	//console.log( hex2rgb(standardizeColor(color)).map((x) => (2*x>255)?255:2*x ) )
	let scale=1.5;
	return rgb2Hex( hex2rgb(standardizeColor(color)).map((x) => (scale*x>255)?255:(x==0)?64:scale*x ) )
}

function darkensColor(color){
	let scale=0.5;
	return rgb2Hex( hex2rgb(standardizeColor(color)).map((x) => (scale*x>255)?255:scale*x ) )
}
