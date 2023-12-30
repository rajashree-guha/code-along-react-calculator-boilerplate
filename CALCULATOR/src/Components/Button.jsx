
import React from 'react'

const Button = (props) => {
  return (
    <button onClick={()=>{
        props.function(props.value)
    }}>{props.value}</button>
  )
}

export default Button