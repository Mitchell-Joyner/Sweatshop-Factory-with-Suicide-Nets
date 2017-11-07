const random = require('./Random.js');

const worker = function(){
  let id = "w-" + random().digit(8);
  let wage = random().continousRange(8,50);
  let hours = random().continousRange(4,7)*5;

  function pay(){
    console.log(wage*8, wage*40, wage*2080)
  }
};
module.exports = moduleName;
