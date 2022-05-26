import {useState} from "react";
import Card from "./components/Card/Card";

function App() {

const[toggle, setToggle] = useState(false);


 return(

     <blockquote>
         <Card />
     <button onClick={ ()=> setToggle(prevState => !prevState) }>Toggle STATE Off and On</button>
     <p>{toggle ? 'ON' : "OFF"}</p>
     </blockquote>
    
 )

}

export default App;