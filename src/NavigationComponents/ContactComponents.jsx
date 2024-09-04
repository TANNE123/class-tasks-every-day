import React from 'react'
import NavBarComponent from './NavBarComponent'

const ContactComponents = (HomeHandler) => {
  return (
    <div>
        <NavBarComponent  HomeHandler={HomeHandler}/>
    <h1>No Contact found</h1>
    </div>
  )
}

export default ContactComponents
