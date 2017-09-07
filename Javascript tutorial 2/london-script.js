// used in london.html

function listDomElements() {
  var children = document.body.childNodes;
  var i;

  for (i = 0; i <  children.length; i = i + 1) {
    console.log(children[i]);
  }
}

// document.getElementsByTagName('h1');
// var description = document.getElementById('description');
// console.log(description.innerHTML);

var london = {
  name: 'London',
  population: 8308369,
  tallestBuilding: {
     name:  'Shard',
     height: '310m'
  },
  numberOfUniversities: 43,
  averageRent: 1106,
  dailyTubePassengerJourney: 3500000,
  olympics: [ 1908, 1948, 2012],
  updatePopulation: function(newPopulation) {
    this.population = newPopulation;
  }
};

function displayPopulation() {
	var population = document.createElement('p');
	var content = document.createTextNode('Population: ' + london.population);
	population.appendChild(content);
	document.body.appendChild(population);
};


function displayUniversity() {
	var numberOfUniversities = document.createElement('p');
	var Unis = document.createTextNode('University: ' + london.numberOfUniversities);
	numberOfUniversities.appendChild(Unis);
	document.body.appendChild(numberOfUniversities);
}

function displayAverageRent() {
	var averageRent = document.createElement('p');
	var rent = document.createTextNode('Average Rent: ' + london.averageRent);
	averageRent.appendChild(rent);
	document.body.appendChild(averageRent);
}

function displayDailyTubePassengers() {
	var dailyTubePassengerJourney = document.createElement('p');
	var passengers = document.createTextNode('Daily tube passengers: '+ london.dailyTubePassengerJourney);
	dailyTubePassengerJourney.appendChild(passengers);
	document.body.appendChild(dailyTubePassengerJourney);
}

function displayTallBuilding() {
	var tallestBuilding = document.createElement('p');
	var building = document.createTextNode('Tallest building in London is: ' +london.tallestBuilding.name + ", and it's height is: " +london.tallestBuilding.height);
	tallestBuilding.appendChild(building);
	document.body.appendChild(tallestBuilding);
}

function displayOlympics() {
	var olympics = document.createElement('p');
	var OlympicsLondon = document.createTextNode('London hosted the Olympics: ' + london.olympics);
	olympics.appendChild(OlympicsLondon);
	document.body.appendChild(olympics);
}


function displayEverything() {
	displayPopulation();
	displayUniversity();
	displayOlympics();
	displayTallBuilding();
	displayAverageRent();
	displayDailyTubePassengers();
}



