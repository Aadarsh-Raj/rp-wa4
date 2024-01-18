import React from 'react'
import './Style/addform.css'
import Button from './Button'
const AddForm = () => {
    
  return (
    <>
    <div className="form-container">
        <h2>Fill below form for New Entry</h2>
        <form action="" className='input-form'>
            <input type="text" placeholder='Name'/>
            <input type="date" />
            <input type="number" max="12" min="12" placeholder='Aadhar Number'/>
            <input type="number" max="10" min="10" placeholder='Mobile Number'/>
            <input type="number" placeholder='Age'/>
            <Button btnValue="Save"/>
        </form>
    </div>
    </>
  )
}

export default AddForm
