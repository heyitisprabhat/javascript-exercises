const convertToCelsius = function(tempF) {
  celsius = (tempF - 32)*(5/9)
  return Math.round(celsius*10)/10
};

convertToCelsius(32)


const convertToFahrenheit = function(tempC) {
  fahrenheit = (tempC * (9/5) + 32)
  return Math.round(fahrenheit*10)/10
};

convertToFahrenheit(-14)


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
