import {useState} from "react";

function App() {

const[toggle, setToggle] = useState(false);


 return(

     <blockquote>
     <button onClick={ ()=> setToggle(prevState => !prevState) }>Toggle STATE Off and On</button>
     <p>{toggle ? 'ON' : "OFF"}</p>
     </blockquote>
    
 )

}

export default App;