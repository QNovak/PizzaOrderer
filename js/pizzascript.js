function getReceipt() {
	// This initializes our string so it can get passed from  
	// function to function, growing line by line into a full receipt
	var text1 = "<h3>Your Order:</h3>";
	var runningTotal = 0;
	var sizeTotal = 0;
	var sizeArray = document.getElementsByClassName("size");
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			text1 = text1+selectedSize+"<br>";
		}
	}
	if (selectedSize === "Personal Pizza") {
		sizeTotal = 6;
	} else if (selectedSize === "Medium Pizza") {
		sizeTotal = 10;
	} else if (selectedSize === "Large Pizza") {
		sizeTotal = 14;
	} else if (selectedSize === "Extra Large Pizza") {
		sizeTotal = 16;
	}
	runningTotal = sizeTotal;
	console.log(selectedSize+" = $"+sizeTotal+".00");
	console.log("size text1: "+text1);
	console.log("subtotal: $"+runningTotal+".00");
	getCrust(runningTotal,text1);
};

function getCrust(runningTotal,text1) {
	var crustTotal = 0;
	var selectedCrust = [];
	var crustArray = document.getElementsByClassName("crust");
	for (var l = 0; l < crustArray.length; l++) {
		if (crustArray[l].checked) {
			var selectedCrust = crustArray[l].value;
			text1 = text1+selectedCrust+"<br>";
		}
	}
	if (selectedCrust === "Cheesy Crust") {
		crustTotal = 3;
	} else {
		crustTotal = 0;
	}
	runningTotal = (runningTotal + crustTotal);
	console.log(selectedCrust+" = $"+crustTotal+".00");
	console.log("crust text1: "+text1);
	console.log("subtotal: $"+runningTotal+".00");
	getSauce(runningTotal,text1);
};

function getSauce(runningTotal,text1) {
	var sauceTotal = 0;
	var selectedSauce = [];
	var sauceArray = document.getElementsByClassName("sauce");
	for (var h = 0; h < sauceArray.length; h++) {
		if (sauceArray[h].checked) {
			var selectedSauce = sauceArray[h].value;
			text1 = text1+selectedSauce+"<br>";
		}
	}
	runningTotal = (runningTotal + sauceTotal);
	console.log(selectedSauce+" = $"+sauceTotal+".00");
	console.log("sauce text1: "+text1);
	console.log("subtotal: $"+runningTotal+".00");
	getCheese(runningTotal,text1);
};

function getCheese(runningTotal,text1) {
	var cheeseTotal=0;
	var selectedCheese=[];
	var cheeseArray = document.getElementsByClassName("cheese");
	for (var c = 0; c < cheeseArray.length; c++) {
		if (cheeseArray[c].checked) {
			var selectedCheese = cheeseArray[c].value;
			text1 = text1+selectedCheese+"<br>";
		}
	}
	if (selectedCheese === "Extra Cheese") {
		cheeseTotal = 3;
	} else {
		cheeseTotal = 0;
	}
	runningTotal = (runningTotal + cheeseTotal);
	console.log(selectedCheese+" =$"+cheeseTotal+".00");
	console.log("cheese text1: "+text1);
	console.log("subtotal: $"+runningTotal+".00");
	getMeat(runningTotal,text1);
};
	
function getMeat(runningTotal,text1) {
	var meatTotal = 0;
	var selectedMeat = [];
	var meatArray = document.getElementsByClassName("meats");
	for (var j = 0; j < meatArray.length; j++) {
		if (meatArray[j].checked) {
			selectedMeat.push(meatArray[j].value);
			console.log("selected meat item: ("+meatArray[j].value+")");
			text1 = text1+meatArray[j].value+"<br>";
		}
	}
	var meatCount = selectedMeat.length;
	if (meatCount > 1) {
		meatTotal = (meatCount - 1);
	} else {
		meatTotal = 0;
	}
	runningTotal = (runningTotal + meatTotal);
	console.log("total selected meat items: "+meatCount);
	console.log(meatCount+" meat - 1 free meat = "+"$"+meatTotal+".00");
	console.log("meat text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	getVeggies(runningTotal,text1);
};

function getVeggies(runningTotal,text1) {
	var veganTotal = 0;
	var selectedVegan = [];
	var veganArray = document.getElementsByClassName("vegan");
	for (var k = 0; k < veganArray.length; k++) {
		if (veganArray[k].checked) {
			selectedVegan.push(veganArray[k].value);
			console.log("selected vegie item: ("+veganArray[k].value+")");
			text1 = text1+veganArray[k].value+"<br>";
		}
	}
	var veganCount = selectedVegan.length;
	if (veganCount > 1) {
		veganTotal = (veganCount - 1);
	} else {
		veganTotal = 0;
	}
	runningTotal = (runningTotal + veganTotal);
	console.log("total selected veggie items: "+veganCount);
	console.log(veganCount+" veggie - 1 free veggie = "+"$"+veganTotal+".00");
	console.log("veggie text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("showText").innerHTML = text1;
	document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
};