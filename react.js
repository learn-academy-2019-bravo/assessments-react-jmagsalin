// React Assessments

// 1. Write a simple React component that simply prints "I am a component" to the screen. Be sure to include all necessary imports, exports, etc...
// import React, { Component } from 'react';
//
// class Text extends Component {
//   render () {
//     return (
//       <div>
//         <h1>I am a component</h1>
//       </div>
//       )
//     }
//   }
// export default Text;

// }
// 2. Practice With Loops: In React, we often use the map function to iterate over an array held in state. To get more practice with this, write a vanilla javascript for loop that outputs the same thing as the map function below.


var stuffArray = [42, "Arthur Dent", 1978, "Zaphod", "Vogon", "Marvin, the Paranoid Android"]

// stuffArray.map(function(el, i){
//   console.log(el + " is at index: " + i)
// })

// your for loop here, you can use the same stuffArray array
function sort (array){
// var testArr = []
for (let i = 0; i < array.length; i++)
var newArr = array[i] + " is at index: " + [i]
// testArr.push(array[i])
// return newArr
return newArr
}
console.log(sort(stuffArray))
//
//
// // 3. Basic sorting: Find the cheapest price -- you are given a list of prices and need to find the signle lowest price from the array. Write a function that takes in an array of numbers, and returns the lowest price
var price = [2, 50, 49, 5, 9]

function cheapest (array){
    var cheap = Math.min(...array)
  return cheap
}
console.log(cheapest(price));
