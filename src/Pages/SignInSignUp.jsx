import React from 'react'
import './CSS/SignInSignUp.css'

export const SignInSignUp = () => {
  return (
    <div className='signin-signup'>
      <div className="signin-signup-container">
        <h1>Sign Up</h1>
        <div className="signin-signup-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className='signin-signup-signin'>Already have an account? <span>Login here</span></p>
        <div className="signin-signup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default SignInSignUp