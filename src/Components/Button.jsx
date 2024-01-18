import React from 'react'
import './Style/button.css'
const Button = (prop) => {

    const navLink = (v)=> prop.func(v);
  return (
    <button className='btn' onClick={(value)=>navLink(`${prop.outputValue}`)}>
{prop.btnValue}
    </button>
  )
}

export default Button
