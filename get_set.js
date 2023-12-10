// Define a class called Person that takes in three parameters in the constructor (firstName, lastName and age). 
// Create the getters and setters methods for each property and a getter method called fullName that returns the full name.

class Person {
    constructor(firstName,lastName,age){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }
    get firstName(){
        return this.firstName
    }
    get lastName(){
        return this.lastName
    }
    set newName(nuevoNombre){
        this.firstName=nuevoNombre
    }
    set newSurname(nuevoApe){
        this.lastName=nuevoApe
    }
    get fullName(){
        return this.firstName + " " + this.lastName
    }
    }
    
    const person = new Person('Mario', 'Rossi', 25);
    console.log(person.fullName);
    
    person.firstName = 'Maria';
    person.lastName = 'Verdi';
    console.log(person.fullName);