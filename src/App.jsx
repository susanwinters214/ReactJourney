function App() {
 return(
     <> 
<form>
   <input type="text" onChange= { (e)=> console.log("Changed Your Mind") } />
</form>

     <button onClick={ ()=> console.log("Button was Clicked !")}>Click This Button</button>
     </>
 )

}

export default App;