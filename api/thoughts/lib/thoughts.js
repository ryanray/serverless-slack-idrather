var thoughts = require('./thoughts.json');

module.exports = {
  get: function() {
    return thoughts[randomNumber(0, thoughts.length)];
  }
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
