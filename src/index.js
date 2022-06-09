//////////////temperature section/////////////////

// Select temperature
const currentTemp = document.getElementById('current-temp');

//select weather garden picture element
const weatherGardenChanger = document.getElementById('bottom-landscape');

//function to change background of the oicture
const landscapeChanger = (temp) => {
  if (temp > 26) {
    weatherGardenChanger.innerHTML = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
  } else if (temp > 21) {
    weatherGardenChanger.innerHTML = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
  } else if (temp > 15) {
    weatherGardenChanger.innerHTML = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
  } else {
    weatherGardenChanger.innerHTML = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
  }
};

// Variable to track temperature
var temperature = 0;

// Display initial value
currentTemp.innerHTML = temperature;

// Function to increment temperature
const handleTempIncrement = () => {
  temperature++;
  currentTemp.innerHTML = temperature;
  changeTempColor(temperature);
  landscapeChanger(temperature);
};
// Function to decrement temp
const handleTempDecrement = () => {
  temperature--;
  currentTemp.innerHTML = temperature;
  changeTempColor(temperature);
  landscapeChanger(temperature);
};
// Select increment and decrement buttons
const incrementTemp = document.getElementById('increment-count');
const decrementTemp = document.getElementById('decrement-count');

// Add click event to buttons
incrementTemp.addEventListener('click', handleTempIncrement);
decrementTemp.addEventListener('click', handleTempDecrement);

//change color if the temp increases
const changeTempColor = (temp) => {
  if (temp > 26) {
    currentTemp.style.color = 'red';
  } else if (temp > 21) {
    currentTemp.style.color = 'orange';
  } else if (temp > 15) {
    currentTemp.style.color = 'gold';
  } else if (temp > 10) {
    currentTemp.style.color = 'green';
  } else {
    currentTemp.style.color = 'teal';
  }
};
