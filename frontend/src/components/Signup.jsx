import React from 'react'

function Signup() {
  return (
    <div>
      <div className='Signup-nameContainer Signup-fieldContainer'>
        <div>Name</div>
        <input type="text"></input>
      </div>
      <div className='Signup-usernameContainer Signup-fieldContainer'>
        <div>Username</div>
        <input type="text"></input>
      </div>
      <div className='Signup-emailContainer Signup-fieldContainer'>
        <div>Email</div>
        <input type="text"></input>
      </div>
      <div className='Signup-passwordContainer Signup-fieldContainer'>
        <div>Password</div>
        <input type="text"></input>
      </div>
      <div className='Signup-confirmPasswordContainer Signup-fieldContainer'>
        <div>Confirm Password</div>
        <input type="text"></input>
      </div>
    </div>
  )
}

export default Signup;