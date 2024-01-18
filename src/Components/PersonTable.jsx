import React from 'react'
import './Style/persontable.css'
import PersonTableDetail from './PersonTableDetail'
const PersonTable = () => {
  return (
    <>
    <table>
        <tr>
            <th className='name-box'>
                Name
            </th>
            <th className='dob-box'>
                Date of birth
            </th>
            <th className="aadhar-box">
                Aadhar Number
            </th>
            <th className="mobile-box">
                Mobile Number
            </th>
            <th className="age-box">
                Age
            </th>
            <th className="action-box">
                Actions
            </th>
        </tr>
        <PersonTableDetail />
    </table>
    
    </>
  )
}

export default PersonTable
