// Starting from the previous exercise, we want to add to our function repeatHello, a clearInterval after 5 seconds, could you do that?

function repeatHello(callback){
    let intervalo=setInterval(callback,1000);
    setTimeout(()=>{
        clearInterval(intervalo)},5000)
}
const callback=()=>{
    console.log("Hello");
}


repeatHello(callback)