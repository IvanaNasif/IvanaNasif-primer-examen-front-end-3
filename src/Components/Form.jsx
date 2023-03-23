import React from 'react'



const Form = ({handleChange,handleSubmit,userInput}) => {
    return (
    <div>
        
            <form  onSubmit={handleSubmit}>
            <label>Ingresa tu autor favorito</label>
            <input 
                name="autor"
                placeholder = "Autor favorito" 
                type= "text"
                value={userInput.autor}
                onChange={handleChange}
            />
            <label> Ingresa tu libro favorito</label>
            <input 
                name="libro"
                placeholder ="Libro favorito" 
                type= "text"
                value={userInput.libro}
                onChange={handleChange}
            />
        
        <button className="btn" >Enviar</button>
        </form>
    </div>
)
}

export default Form

