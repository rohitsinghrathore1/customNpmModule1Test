/*
  making custom npm module to make all characters to upper case
*/


var makeUpperCaseAndShowAlert  = function(someString){
  alert(someString.toUpperCase());
}

module.exports = {
  makeUpperCaseAndShowAlert: makeUpperCaseAndShowAlert
}