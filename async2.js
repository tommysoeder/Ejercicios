// Write a function called repeatHello which takes a callback as it's parameter.
// The callback function will simply print "Hello". 
// The repeatHello function will have to execute the callback function with an interval of 1 second.
// The callback function must be an arrow function.

function repeatHello(callback){
    let intervalo=setInterval(callback,1000);
    // clearInterval(intervalo,5)
}
const callback=()=>{
    console.log("Hello");
}


repeatHello(callback)