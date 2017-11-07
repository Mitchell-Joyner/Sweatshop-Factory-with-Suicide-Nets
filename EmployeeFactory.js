const worker = require('./worker.js');
const manager = require('./manager.js');
const divisionhead = require('./divisionhead.js');
const contractor = require('./contractor.js');

const employeefactory = function(type){
  function create(type){
    if(type=="worker"){
      return new worker();
    }
    else if(type=="manager"){
      return new manager();
    }
    else if(type=="divisionhead"){
      return new divisionhead();
    }
    else if(type=="contractor"){
      return new contractor();
    }
}
