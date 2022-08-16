import React from 'react'
import './Auth.css'
import Logo from '../../img/appIcon.png'
import Google from '../../img/google.svg'
import Github from '../../img/github.svg'
import LinkedIn from '../../img/linkedin.svg'

export default function Auth() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-8 l-left mt-lg-5 mb-1 animate__animated animate__pulse">
                        <div className='row  l-row'>
                            <div className="col-lg-4 text-center div-logo">
                                <img className='img-fluid' src={Logo} alt=""></img>
                            </div>
                            <div className="col-lg-6 align-self-center mb-4">
                                <span className='app-name'>Monkey-App</span><br/>
                                <span className='features'>💖 Your News, Notes, Weather all at 1️ Place</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 offset-lg-8 mt-lg-5 mr-lg-5 l-right animate__animated animate__pulse">
                        <div className="card login-card">
                            <div className="card-body">
                                <span className='login-card-heading'>Sign in to Monkey-App</span><br></br>
                                <span style={{ color: 'var(--gray)' }}>New Here?<a href='#'> Create a new account</a></span><br />
                                <div className="form-floating my-2">
                                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label for="floatingInput">Email address</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                                    <label for="floatingPassword">Password</label>
                                </div>
                                <div className="forget-password my-3 text-end">
                                    <a href="#">Forget Password?</a>
                                </div>
                                <button className="btn-login">Sign In</button>
                                <h4 className="text-muted fw-normal mb-4 text-center">Or</h4>
                                <div className='login-btns '>
                                    <a href="#" className="btn btn-login-with mb-2">
                                        <img src={Google} className="img-fluid me-3" alt="" />Continue with Google
                                    </a>
                                    <a href="#" className="btn btn-login-with mb-2">
                                        <img src={Github} className="img-fluid me-3" alt=""/>Continue with Github
                                    </a>
                                    <a href="#" className="btn btn-login-with mb-2">
                                        <img src={LinkedIn} className="img-fluid me-3" />Continue with Linkedin
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
