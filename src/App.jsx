import { useState } from 'react';
import Card from './Components/Card';
import Form from './Components/Form';




function App() {

  const [userInput, setUserInput] = useState ({
    autor: "",
    libro: ""
})
//estados
const[show, setShow] = useState (false)
const[err, setErr] = useState (false)

//validaciones
const handleSubmit=(event)=>{
  event.preventDefault()
    if(userInput.autor.indexOf (" ") !== 0 && userInput.autor.length >=3 && userInput.libro.length >= 6 ) {
      setShow (true)
      setErr(false)
    }else{
      setErr(true)
      setShow (false)
    }   
  }

const handleChange = (event) =>{
  setUserInput({
    ...userInput,
    [event.target.name] : event.target.value
  })
}

  return (
    <div className="App">
    
    <Form handleChange = {handleChange} userInput = {userInput} handleSubmit={handleSubmit}/>

    {err ? <h3 style= {{color: "red"}}> Por favor chequea que la informacion sea correcta </h3> : null}
    
      { show ? <Card autor={userInput.autor} libro={userInput.libro}/> : null}
    </div>
  )
}

export default App

