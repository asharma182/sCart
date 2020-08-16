import React, { useState, useEffect, useCallback, useMemo } from 'react'
import history from '../../routes/history'
import './style.css';
import { useSelector, useDispatch } from 'react-redux'
import { getNews } from '../../components/actions'

const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const counter = useSelector(state => state)
    const dispatch = useDispatch()

    function handleSubmit(){
        dispatch(getNews())
    }

    // useEffect(() => {
    //     const task = dispatch(getNews())
        
    //   }, [])
    return (
        <div className="Home" >
            <div className="lander" >
                <h1>Welcome to sCart</h1>
                <p>Please login to continue</p>
                <form style={{ flexDirection: 'column' }} onSubmit={handleSubmit}>
                    {/* <input type="email" className="input-field" onChange={(e) => setEmail(e.target.value)} placeholder="Please Enter Email id" required /><br />
                    <input type="password" className="input-field" onChange={(e) => setPassword(e.target.value)} placeholder="Please Enter Email id" required /><br /> */}
                    {/* <button className="btn btn-success button-cust" onClick={() => (email && password) ? history.push('/products'): null}>Login</button> */}
                    <button>
                        Get News
                    </button>
                </form>
            </div>
        </div>

    )
}

export default LoginScreen