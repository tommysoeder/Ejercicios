const person = {
    firstName: "Mario",
    lastName: "Rossi",
    age: 25,
  };
  
  // Print key/value pairs using Object.keys without template literals
  Object.keys(person).forEach(function(key) {
    console.log(key + ": " + person[key]);
  });
  