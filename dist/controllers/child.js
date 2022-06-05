"use strict";

process.on('message', function (cant) {
  var numbers = generateRandoms(cant);
  process.send(numbers);
  process.exit(1);
});

function generateRandoms(cant) {
  var numbers = [],
      max = 1000;

  for (var i = 0; i < cant; i++) {
    numbers.push(Math.floor(Math.random() * (max - 1)) + 1);
  }

  console.log("".concat(numbers.length, " numbers generated"));
  var counts = {};
  numbers.forEach(function (n) {
    counts[n] = (counts[n] || 0) + 1;
  });
  return counts;
}