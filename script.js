// -----------------------------------Day 1 ----------------------------------------


//  1. Print numbers from 1 to 10

for(let i = 1; i<=10 ; i++ ){
    console.log(i)
}

let value = 1
while(value<=10){
    console.log(value)
    value++
}


//   2. Print the odd numbers less than 100

for(let i = 0 ; i<100 ; i++ ){
    if( i%2 !=0){
        console.log(i)
    }
}



//  3. Print the multiplication table with 7


var num = 7
for(let i = 1; i<=10 ;i++){
    console.log(num*i)
}

//  4. Print all the multiplication tables with numbers from 1 to 10


for(var i=1; i<=10;i++){
    console.log(`multiplication table for ${i}`)
    for(var j = 1 ; j<=10 ; j++){
        var sum = i*j
        var tables = (`${i} x ${j} = ${sum}`)
        console.log(tables)
    }
}


//   5. Calculate the sum of numbers from 1 to 10



for(var i=1; i<=10;i++){
    console.log(`addition of ${i}`)
    for(var j = 1 ; j<=10 ; j++){
        var sum = i+j
        var tables = (`${i} + ${j} = ${sum}`)
        console.log(tables)
    }
}

var sum = 0

for (var i = 1; i<=10 ; i++){
    var newsum = sum+=i
    console.log(newsum)
}

let total = 0;

for (let i = 1; i <= 10; i++) {
  total += i;
}

console.log(`The total of numbers from 1 to 10 is: ${total}`);


//   6. Calculate 10!


function calculateFactorial(n) {
  if (n === 0) {
    return 1; // 0! is defined as 1
  }

  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}

const factorialOf10 = calculateFactorial(10);
console.log(`10! = ${factorialOf10}`);


// //  7 = Calculate the sum of even numbers greater than 10 and less than 30

var sum = 0
for (var i = 11; i<30 ; i++){
    if(i%2 != 0){
        sum += i
    }
}

console.log(sum)

function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
  }

  // Example usage:
  const celsiusTemperature = 25; // Replace with your desired Celsius temperature
  const convertedTemperature = celsiusToFahrenheit(celsiusTemperature);
  console.log(`${celsiusTemperature}°C is equal to ${convertedTemperature}°F`);

// -----------------------------------Day 2 ----------------------------------------

//  // 8 = Calculate the sum of numbers in an array of numbers

var arr = [2,34,55,35,24,34]
var sum = 0
for (let i = 0 ; i<arr.length ; i++){
    sum += arr[i]
}
console.log(sum)

//  9. Calculate the average of the numbers in an array of numbers

var sum = 0
var arr = [2,34,55,35,24,34]

for (let i = 0 ; i <arr.length ; i++){
    sum += arr[i]
}
var average = sum/arr.length
console.log(average)


// 10 = Create a function that receives an array of numbers as argument
// and returns an array containing only the positive numbers


filterpositivenumbers  = numbers => {
    const filternumber = numbers.filter(number => number > 0)
    return filternumber
}
let arr = [-3,1,5,0,-6,-33,6,8,4]
var sortedarr = filterpositivenumbers(arr)
console.log(sortedarray)

// 11 = Find the maximum number in an array of numbers

findmaximumoutput = array =>{
    if (array.length === 0) {
        return undefined
    }
    else{
        return Math.max(...array)
    }
}
const array = [2,5,545,15,2557,2345,11]
const result = findmaximumoutput(array)
console.log(result)

// -----------------------------------Day 3 ----------------------------------------

// 12 = Print the first 10 Fibonacci numbers without recursion

//  (1) =  without recursion 

var f0 = 0
var f1 = 1

for (var i = 2 ; i <= 10 ; i++ ){
  var fn = f1 + f0
  f0 = f1 
  f1 = fn
}
console.log(fn)

//  (2) =  using recursion 

function findfibonacci (n){
  if(n===0){
    return 0 
  }
  if(n===1){
    return 1 
  }
  else{
    return findfibonacci(n-1) + findfibonacci(n-2) 
  }
}
var Fibonacci = findfibonacci(10)
console.log(Fibonacci)


// 13 = calculate 10!

var prod = 1
for (var i = 1; i <= 10 ; i++){
  prod *= i
}
console.log(prod)
  
// 14 = pattern program increment using nested loop

  
for (let i=1 ; i<=5;i++){
  let pattern = ''
  for(let j = 1; j<=i ; j++){
    pattern +="*"
  }
  console.log(pattern)
}

// 15 = pattern program decrement using nested loop


for(var i = 1; i<=5;i++){
  let pattern =''
  for(var j = 1; j<=i; j++){
    pattern += '^'
  }
  console.log(pattern)
}



