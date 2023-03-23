//1. What is the technical term
// used to create a variable in Javascript?
//*using let or const
//2.  what is the tecnical term used to call or 
//execute a function in Javascript?
//*Invoke

//3. create an object called student, including 3 properties
//with their values

const student = {

hairColor : "Black",
eyeColor : "Brown",
height : "Tall"

}
console.table(student)

//4. Create a function that removes the first element 
//of the array below and adds “kiwi” to the end of the array.

let favoriteFruits = ['mango', 'lychee', 'strawberry', 'papaya']

function favoriteFood(arr){
  arr.shift();
  arr.push('kiwi');
  return arr;

 

}
const arrayResult = favoriteFood(favoriteFruits);

console.log(arrayResult)