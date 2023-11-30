// Convert the developer object into JSON

class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  objJson(){
    const objJson = JSON.stringify(this);
    return objJson;
  }
}

const developer = new Person(1, 'Mario', 'Rossi', 25);
// Print developer as json object

// const objJson = JSON.stringify(developer);

console.log(developer.objJson());

