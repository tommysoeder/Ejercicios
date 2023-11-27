// Do you know how to "merge" the value of the newNumber variable into numberStore without using the array method push?

let numberStore = [0, 1, 2];
let newNumber = 3;
numberStore=[...numberStore,newNumber]; //No se esparce el newNumber porque no es un array
// numberStore.push(newNumber);
console.log(numberStore);