const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

person2.firstName = "Simon";

// Modify the property `firstName` of the `person2` in "Simon".

console.log(person1);
console.log(person2);

// Se modifica el firstName del primer objeto porque el segundo objeto hace referencia al mismo espacio en la memoria,
// es decir, no he creado una copia de ese objeto sino otra forma de referenciar el mismo espacio en la memoria,
// por tanto al modificarlo desde la referencia del segundo objeto, estoy modificando el mismo espacio.