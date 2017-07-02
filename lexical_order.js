
var vals = [0, 1, 2, 3];


function setup(){
	createCanvas(400, 400);
	
}

function draw(){
	background(0);
	console.log(vals);

	var largestI = -1;
	for(var i = 0; i < vals.length -1; i++){
		if(vals[i] < vals[i + 1]){
			largestI = i;
		}
	}

	if(largestI == -1){
		noLoop();
		console.log("finished");
	}


	var largestJ = -1;
	for(var j = 0; j < vals.length; j++){
		if(vals[largestI] < vals[j]){
			largestJ = j;
		}
	}

	swap(vals, largestI, largestJ);

	var len = vals.length - largestI - 1;
	var endArray = vals.splice(largestI + 1, len);
	endArray.reverse();
	vals = vals.concat(endArray);
	//console.log(vals);

}

function swap(a, i, j){

	var temp = a[i];
	a[i] = a[j];
	a[j] = temp;

}


/*

		ALGORITHM

	1. Find the largest x such that p[x] < p[x + 1] if no x then finished
	2. Find the largest y such that p[x] < p[y]
	3. Swap p[x] and p[y]
	4. Reverse p[x + 1....n]



*/