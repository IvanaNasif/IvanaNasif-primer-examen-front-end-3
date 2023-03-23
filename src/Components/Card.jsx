import React from 'react'


const Card = (props) => {
  return (
    <div>  
    <h1 className="card" >Tu autor favorito es: {props.autor}</h1>
    <h2 className="card" >Tu libro favorito es: {props.libro}</h2>
    </div>
  )

}

export default Card