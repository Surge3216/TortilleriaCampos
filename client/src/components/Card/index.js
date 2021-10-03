import React, { useContext } from 'react';
import { useForm } from '../../utils/hooks';
import { UserContext } from '../../context/auth';
import axios from "axios";
import "./style.css";

export default function Card() {
    const context = useContext(UserContext);
    
    const { onChange, onSubmit, values } = useForm(loginUserCallback, {
        email: '',
        password: ''
    });

    function loginUser() {

        const userData ={
            email: values.email,
            password: values.password
        }
        axios.post('/api/employee/login', userData)
        .then(function(response){
            const userInfo = response.data
            context.login(userInfo)
            
        })
    }

    function loginUserCallback() {
        loginUser()
    }

    return (
        <div className=" container">
            <div className="row">
                <div className="col s12 m6 l8 offset-l2">
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title"></span>
                            <div className="row">
                                <div className="input-field col s8 offset-l2 l8">
                                    <input id="email" name="email"
                                        type="email"
                                        value={values.email}
                                        onChange={onChange} />
                                    <label htmlFor="email">Email</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s8 offset-l2 l8">
                                    <input id="password" name="password"
                                        type="password"
                                        value={values.password}
                                        onChange={onChange} />
                                    <label htmlFor="password">Password</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s8 offset-l2 l8">
                                    <button className=" btn offset-l2 col l8" onClick={onSubmit}> Login</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};