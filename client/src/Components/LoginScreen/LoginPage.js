import React from 'react'
import SingUp from '../SingUp/SingUp'
import './LoginPage.css'

function LoginPage() {

    const user = null;
    return (
        <div className='loginPageContainer'>
            <div className='loginScreen'>
                <img src='./images/netflix-logo.png'/>

                <select><i class="fas fa-globe"></i>
                    <option>English</option>
                    <option>العربية </option>
                </select>
                <button>Sing In</button>

                <div className='loginScreenGradient' />
               

            </div>

            <div className='loginPageBody'>
             
                <SingUp/>
                    {/* <>
                        <h1>Unlimited movies, TV shows, and more.</h1>
                        <h2>Watch anywhere. Cancel anytime.</h2>

                        <form className='loginPageInput'>
                            <div>
                                <h3>Ready to watch? Enter your 
                                    email to create or restart your membership.</h3>
                                
                                <div className='input-div'>
                                    <input type="email" placeholder='Email address'/>
                                    <button>Get started</button>
                                    <span></span>
                                </div>
                            </div>

                        </form>
                    </> */}
            </div>
        </div>
    )
}

export default LoginPage
