 export function Welcome({ name, age }){ // La página no renderiza nada si no se pasa un prop name 
    return <div>
        <h2>Welcome, {name}!</h2>
        <p>You are {age} years old</p>
        <p>You will be {age + 1} years old next year</p>
        </div>
}