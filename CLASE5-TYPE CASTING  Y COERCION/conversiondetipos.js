// EXPLICIT TYPE CASTING

const string = "42"
const integer = parseInt(string)
console.log (integer)
console.log(typeof integer)

const stringDecimal = "3.14"
const float = parseFloat(stringDecimal)
console.log (float)
console.log(typeof float)

const binary = "1010"
const decimal = parseInt(binary, 2)
console.log (decimal)
console.log(typeof decimal)

//IMPLICIT TYPE CASTING

const sum = "5" + 3
console.log(sum)

const sumWithBoolean = "3" + true
console.log(sumWithBoolean)

const stringValue = "10"
const numberValue = 10
const booleanValue = true
console.log(stringValue + stringValue) //CONCATENA
console.log(stringValue + numberValue)  //CONCATENA
console.log(stringValue + booleanValue) //CONCATENA
console.log(numberValue + stringValue ) //CONCATENA
console.log(numberValue + numberValue)  //SUMA
console.log(booleanValue + stringValue) // CONCATENA
console.log(booleanValue + numberValue) // SUMA
console.log(booleanValue + booleanValue) // SUMA