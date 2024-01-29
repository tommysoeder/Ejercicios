import Forms from "./Components/Forms"
import { Message } from "./Components/Message"
import { HelloWorld } from "./HelloWorld"


export function App() {
    return (
        <div>
            <h1>My awesome App</h1>
            <hr></hr>
            <HelloWorld />
            {/* <HelloWorld />  Se puede usar dos veces sin ningún problema, se duplica simplemente */}
            <Forms />            
            <Message/>  {/* Se puede utilizar desde App.jsx sin problema */}
        </div>
    )
}
