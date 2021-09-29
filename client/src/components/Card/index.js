import React, { createContext } from 'react';
import { useForm } from '../../utils/hooks';
import { UserContext } from '../../context/auth';
import axios from "axios";
import "./style.css";

export default function Card() {
    
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
            createContext(response.data)
        })
    }

    function loginUserCallback() {
        loginUser()
    }

    return (
        <div className=" container">
            <div class="row">
                <div class="col s12 m6 l8 offset-l2">
                    <div class="card">
                        <div class="card-content">
                            <span class="card-title"></span>
                            <div class="row">
                                <div class="input-field col s8 offset-l2 l8">
                                    <input id="email" name="email"
                                        type="email"
                                        value={values.email}
                                        onChange={onChange} />
                                    <label for="email">Email</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s8 offset-l2 l8">
                                    <input id="password" name="password"
                                        type="password"
                                        value={values.password}
                                        onChange={onChange} />
                                    <label for="password">Password</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s8 offset-l2 l8">
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