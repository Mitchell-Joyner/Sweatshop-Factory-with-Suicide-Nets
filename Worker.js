const random = require('./Random.js');

const worker = function(){
  let id = "w-" + random().digit(8);
  let wage = random().discreteRangeIn(8,50);
  let hours = random().discreteRangeIn(4,7)*5;

  function pay(){
    let weeklypay = (hours*wage)
    let dailypay = (hours*wage)/5
    let yearlypay = (hours*wage)*52
    return [dailypay, weeklypay, yearlypay]
  }
};
module.exports = moduleName;
