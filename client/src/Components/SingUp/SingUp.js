import React from 'react'
import './SingUp.css'

function SingUp() {
    return (
        <div className='Singup-div'>
            <div className='singup-container'>
                <div className='singup-small-container'>
                   <h3>Sing Up</h3>
                   <input type='text' placeholder='Emaial'/>
                   <input type='Password' placeholder='Password'/>
                   <br/>
                   <button>Sing In</button>

                    <div className='pass-remember'>
                        <div className='pass-remember-small'>
                            <input type='checkbox' />
                            <label>Remember Me</label> 
                        </div>
                      <a href=''>Need Help?</a>
                    </div>
                   

                </div>
                <div className='singup-small-container'>
                    <div className='login-with-facebook'>
                       <img src='' />
                       <span>Login with Facebook</span> 
                    </div>
                    <div className='New-acount'>
                        <span>New to Netflix <a href=''>Sing up now</a></span>
                    </div>
                    <div className='netflix-policy'>
                        <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="">Learn more.</a></p>
                        <div>
                            <p>The information collected by Google
                                 reCAPTCHA is subject to the Google <a href=''>Privacy Policy</a>
                                  and<a href='#'>Terms of Service</a> , and is used for providing,
                                   maintaining, and improving the reCAPTCHA service
                                    and for general security purposes
                                     (it is not used for personalized advertising
                                      by Google).</p>
                        </div>
                    </div>
                    


                </div>
                

                

            </div>
            
        </div>
    )
}

export default SingUp 
