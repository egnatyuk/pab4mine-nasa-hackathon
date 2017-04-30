var Chart = require('chart.js')
var SerialPort = require("serialport").SerialPort

var temp = document.getElementById("tempChart").getContext('2d');

var tempData = {
    	labels: [],
	    datasets: [{
	            data: [],
	            
	            label: "Temp",
	            fill: true,
	            lineTension: 0.5,
	            backgroundColor: "rgba(171,219,242,0.4)",

	            borderColor: "rgba(39,163,221,1)",
	            borderCapStyle: 'butt',
	            borderDash: [],
	            borderDashOffset: 0.0,
	            borderJoinStyle: 'miter',

	            pointBorderColor: "rgba(39,163,221,1)",
	            pointBackgroundColor: "#fff",
	            pointBorderWidth: 2,
	            pointHoverRadius: 5,
	            pointHoverBackgroundColor: "rgba(132,202,236,1)",
	            pointHoverBorderColor: "rgba(220,220,220,1)",
	            pointHoverBorderWidth: 4,
	            pointRadius: 3,
	            pointHitRadius: 10,

	            spanGaps: false,
	        }]
	};
 
var tempChart = new Chart(temp, {
    type: 'line',
    data: tempData,
    
	options: {
		responsive: false,
	    scales: {
	        xAxes:[{
	        	// type: 'linear',
			}],
	        yAxes: [{
	        	type: 'linear',
	            ticks: {
	                min: -25,
	                max: 30
	            }
	        }]
	    }
	}
});




var lux = document.getElementById("luxChart").getContext('2d');

var luxData = {
    	labels: [],
	    datasets: [{
	            data: [],
	            
	            label: "Lux",
	            fill: true,
	            lineTension: 0.5,
	            backgroundColor: "rgba(253,229,189,0.4)",

	            borderColor: "rgba(248,172,41,1)",
	            borderCapStyle: 'butt',
	            borderDash: [],
	            borderDashOffset: 0.0,
	            borderJoinStyle: 'miter',

	            pointBorderColor: "rgba(248,172,41,1)",
	            pointBackgroundColor: "#fff",
	            pointBorderWidth: 2,
	            pointHoverRadius: 5,
	            pointHoverBackgroundColor: "rgba(132,202,236,1)",
	            pointHoverBorderColor: "rgba(220,220,220,1)",
	            pointHoverBorderWidth: 4,
	            pointRadius: 3,
	            pointHitRadius: 10,

	            spanGaps: false,
	        }]
	};
 
var luxChart = new Chart(lux, {
    type: 'line',
    data: luxData,
    
	options: {
		responsive: false,
	    scales: {
	        xAxes:[{
	        	// type: 'linear',
			}],
	        yAxes: [{
	        	type: 'linear',
	            ticks: {
	                min: 0,
	                max: 100
	            }
	        }]
	    }
	}
});




var batt = document.getElementById("battChart").getContext('2d');

var battData = {
    	labels: [],
	    datasets: [{
	            data: [],
	            
	            label: "batt",
	            fill: true,
	            lineTension: 0.5,
	            backgroundColor: "rgba(190,219,186,0.4)",

	            borderColor: "rgba(97,166,86,1)",
	            borderCapStyle: 'butt',
	            borderDash: [],
	            borderDashOffset: 0.0,
	            borderJoinStyle: 'miter',

	            pointBorderColor: "rgba(97,166,86,1)",
	            pointBackgroundColor: "#fff",
	            pointBorderWidth: 2,
	            pointHoverRadius: 5,
	            pointHoverBackgroundColor: "rgba(132,202,236,1)",
	            pointHoverBorderColor: "rgba(220,220,220,1)",
	            pointHoverBorderWidth: 4,
	            pointRadius: 3,
	            pointHitRadius: 10,

	            spanGaps: false,
	        }]
	};
 
var battChart = new Chart(batt, {
    type: 'line',
    data: battData,
    
	options: {
		responsive: false,
	    scales: {
	        xAxes:[{
	        	// type: 'linear',
			}],
	        yAxes: [{
	        	type: 'linear',
	            ticks: {
	                min: 9,
	                max: 13
	            }
	        }]
	    }
	}
});





setInterval(function() {
	tempData.datasets[0].data.push(getRandomInt(-20,25));
	luxData.datasets[0].data.push(getRandomInt(0,100));
	battData.datasets[0].data.push(getRandomInt(10,13));
	if(tempData.datasets[0].data.length > 25){
		tempData.datasets[0].data.shift();
		luxData.datasets[0].data.shift();
		battData.datasets[0].data.shift();
	}
	else{
		tempData.labels.push("");
		luxData.labels.push("");
		battData.labels.push("");
	}

	tempChart.update();
	luxChart.update();
	battChart.update();
}, 1000);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}


var serialport = new SerialPort("COM4", {
  baudRate: 9600,
  dataBits: 8,
  parity: 'none',
  stopBits: 1,
  flowControl: false
});

serialport.on('open', function () {
  console.log('Puerto Abierto');
});

serialport.on('data', function(data) {
  console.log(data.toString());
});