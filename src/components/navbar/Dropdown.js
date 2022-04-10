import React from 'react'
import "./Dropdown.css"

const Dropdown = ({options}) => {
    // console.log(options)
    return (
        <div className='drop_down'>
            <ul>
                {options.map((item , index)=>{
                   return <li key={index}>{item}</li>
                })}
            </ul>
        </div>
    )
}

export default Dropdown
