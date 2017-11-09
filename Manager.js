const thing = require('./Random.js');

const manager= function(){
  let id = "m-" + random().digit(8);
  let workers = random().discreteRangeIn(4,20);
  let basesalary = random().discreteRangeIn(4,9)*10000;

  function pay(){
    if(workers > 10){
      yearlypay = basesalary;
      yearlypay += 2500*(worker-10)*400;
    }
    else if(workers <= 10){
      yearlypay = basesalary;
      yearlypay += workers*250;
    }
    let weeklypay = yearlypay/52;
    let dailypay = weeklypay/7;

    return [yearlypay, basesalary, weeklypay, dailypay];

};
module.exports = moduleName;
