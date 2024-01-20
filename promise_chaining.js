
const isLogged = true;
const firstPromise = (isLogged) => new Promise((resolve,reject)=>{
    if(isLogged){
        const rand=Math.random();
        resolve(rand)
    }else{
        reject(new Error("unidentified"))
    }
})

const secondPromise=(rand) => new Promise((resolve,reject)=>{
    if(rand > 0.5){
        const datos={name: "John", age: 24}
        resolve(datos)
    }else{
        reject(new Error ("Número pequeño"))
    }
})

firstPromise(isLogged)
 .then((rand)=> secondPromise(rand))
 .then((datos)=>console.log(datos))
 .catch((error) => console.log("ERROR", error))