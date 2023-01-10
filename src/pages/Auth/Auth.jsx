import React from 'react'
import { useState } from 'react'
import './Auth.css'
import icon from '../../assests/icon.png'
const Auth = () => {
    const {isSignup, setIsSignup} = useState(false)

    const handleSwitch = () => {
        
    }

  return (

    <section class='auth-section'>
        <div class="auth-container">
            {!isSignup && <img src={icon} className='login-logo'/>}
            <form >
                <label htmlFor='email'>
                    <h4>Email</h4>
                    <input type="email" name='email' id='email'/>
                </label>
                <label htmlFor='password'>
                    <div>
                        <h4>Password</h4>
                        <h4>Forgot Password?</h4>
                    </div><input type="password" name='password' id='password'/>
                </label>
                <button type='submit' className='auth-btn'>{isSignup ? 'Sign up': 'Log in'}</button>
                <p>
                    {isSignup? 'Already have an account?' : "Don't have an account?"}
                    <button type='button' className='handle-switch-btn'>{isSignup? 'Log in' : "Sign up"}</button>
                </p>
            </form>
        </div>
    </section>
  )
}

export default Auth
