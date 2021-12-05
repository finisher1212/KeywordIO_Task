import React, { useState, useEffect } from 'react'
import APIService from './APIService'
import { useCookies } from 'react-cookie'
import { useHistory } from 'react-router-dom'

function Login() {

    const [email, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useCookies(['mytoken'])
    const [isLogin, setLogin] = useState(true)

    let history = useHistory()

    useEffect((msg) => {
        if (token['mytoken']) {
            history.push('/show')
        }
        
    }, [token])

    const loginBtn = () => {
        APIService.LoginUser({ email, password })
            .then(resp => setToken('mytoken', resp.token))
            .catch(error => console.log(error))
    }

    const RegisterBtn = () => {
        APIService.RegisterUser({email, password})
        .then (()=> loginBtn())
        .catch (error=> console.log(error))
    }

    return (
        <div className="App">

            {isLogin ? <h1>Please Login </h1>: <h1>Please Register</h1>}
            
            <br />
            <br />

            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="username" placeholder="Enter Your Email" value={email} onChange={e => setUsername(e.target.value)}></input>

            </div>


            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.target.value)}></input>

            </div>

            {isLogin ?  <button onClick={loginBtn} className="btn btn-primary" > Login</button> 
            : <button onClick={RegisterBtn} className="btn btn-primary" >Register</button> }

           

            <div className="mb-3">
                <br />
                {isLogin ? <h5>If you dont Have Account, Please<button className="btn btn-primary" onClick={() => { setLogin(false) }}>Register</button>Here</h5>
                    : <h5>If you have Account , Please<button className="btn btn-primary" onClick={() => { setLogin(true) }}>Login</button>Here</h5>
                }
            </div>




        </div>
    )
}

<h1>LOgin Required</h1>

export default Login
