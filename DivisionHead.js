const thing = require('./thing.js');

const divisionhead = function(){
  let id = "d-" + random().digit(8);
  let managers = random().discreteRangeIn(1,10);
  let workers = random().discreteRangeIn(20,300);
  let basesalary = random().discreteRangeIn(2,5)*50000

  function pay(){
    let yearlypay = basesalary;
    yearlypay += managers*10000;
    yearlypay =+ workers*50;
    let weeklypay = yearlypay/52;
    let dailypay = weeklypay/5

    return [yearlypay, basesalary, weeklypay, dailypay];

};
module.exports = moduleName;
