const sumAll = function (initial, final) {
  let sum = 0;
  if(!Number.isInteger(initial) || !Number.isInteger(final) || initial < 0 || final < 0){
    return 'ERROR';
  }
  else if (initial <= final) {
    for (let i = initial; i <= final; i++) {
      sum += i;
    }
  } else {
    for (let i = initial; i >= final; i--) {
      sum += i;
    }
  }

  return sum;
};

sumAll(1, 4);

// Do not edit below this line
module.exports = sumAll;
