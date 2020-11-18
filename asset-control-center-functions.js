// ealmonte32

function changeIpFunction() {
	// clear all current contents from elements if any
	document.getElementById("current_assets").innerHTML = "";
	document.getElementById("show_total_assets").innerHTML = "<b>Total Assets on Device: </b>";
	document.getElementById("current_screenly_pi_url").innerHTML = "<b>Current Device URL: </b>";
	document.getElementById("show_array_ids").innerHTML = "";
	
	// begin main function/process
	var ip = document.getElementById("ipfromform").value;
	document.getElementById("print_ip").innerHTML = "<b>Current Device IP: </b>" + ip;

	let url = 'http://' + ip + '/api/v1.2/assets';
	var xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		var testArray = [];
		var myObj = JSON.parse(this.responseText);
		var total_assets_int = myObj.length;
		for (var i = 0; i < myObj.length; i++) {
		document.getElementById("current_assets").innerHTML += "<b>Asset Array: </b>" + i + "<br>";
		document.getElementById("current_assets").innerHTML += "<b>Asset ID: </b>" + myObj[i].asset_id + "<br>";
		document.getElementById("current_assets").innerHTML += "<b>Asset Name: </b>" + myObj[i].name + "<br>";
		document.getElementById("current_assets").innerHTML += "<b>Asset URL: </b>" + myObj[i].uri + "<br>";
		document.getElementById("current_assets").innerHTML += "<b>Asset Enabled: </b>" + myObj[i].is_enabled + "<br>";
		document.getElementById("current_assets").innerHTML += "<b>Asset Type: </b>" + myObj[i].mimetype + "<br>";
		document.getElementById("current_assets").innerHTML += "<b>Asset Start Date: </b>" + myObj[i].start_date + "<br>";
		document.getElementById("current_assets").innerHTML += "<b>Asset End Date: </b>" + myObj[i].end_date + "<br>";
		document.getElementById("current_assets").innerHTML += "<b>Asset Duration: </b>" + myObj[i].duration + "<br><br>";
		// testing to see if an array of only asset IDs can be printed
		testArray += myObj[i].asset_id + "<br>";
		}
	document.getElementById("current_screenly_pi_url").innerHTML = "<b>Current Device URL: </b>" + url + "<br>";
	document.getElementById("show_total_assets").innerHTML = "<b>Total Assets on Device: </b>" + total_assets_int + "<br>";
	document.getElementById("show_array_ids").innerHTML = testArray + "<br>";
	}
	};

xmlhttp.open("GET", url, true);
xmlhttp.send();

}; //this is closing from the changeIpFunction
