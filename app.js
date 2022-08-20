// Variable for kelvin temp
const kelvin = 300
// formula for celsius 
const celsius = kelvin - 273
// rounds up the number
const fahrenheit = Math.floor(celsius * (9/5) + 32)

console.log(`The tempature is ${fahrenheit} deggrees Fahrenheit`)