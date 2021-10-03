import React from 'react';
import { useForm } from '../../utils/hooks';
import axios from 'axios'

export default function NewUserForm() { 
    const { onChange, onSubmit, values } = useForm(newClientCallback, {
        name:'',
        address: '',
        zip: '',
        state: '',
        city: '',
        email: '',
        password: ''
    });

    function newClient() {
        axios.post("/api/employee/", values)
        .then(function (response){
            console.log(response)
        })
        .catch(err => {
            console.log(err);
        })
      
    }

    function newClientCallback() {
        newClient()
    }

    return (
        <div className="card">
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6 l4">
                            <input id="name"
                                name="name"
                                type="text"
                                value={values.name}
                                onChange={onChange}
                            />
                            <label htmlFor="name">Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12 l4">
                            <input id="phone"
                                name="phone"
                                type="text"
                                value={values.phone}
                                onChange={onChange} />
                            <label htmlFor="phone">Phone</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col l4">
                            <input id="address"
                                name="address"
                                type="text"
                                value={values.address}
                                onChange={onChange} />
                            <label htmlFor="address">Address</label>
                        </div>
                        <div className="input-field col l2">
                            <input id="city"
                                name="city"
                                type="text"
                                value={values.city}
                                onChange={onChange} />
                            <label htmlFor="city">City</label>
                        </div>
                        <div className="input-field col l2">
                            <input id="zip"
                                name="zip"
                                type="text"
                                value={values.zip}
                                onChange={onChange} />
                            <label htmlFor="zip">Zip</label>
                        </div>
                        <div className="input-field col l1">
                            <input id="state"
                                name="state"
                                type="text"
                                value={values.state}
                                onChange={onChange} />
                            <label htmlFor="state" >State</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12 l6">
                            <input id="email"
                                name="email"
                                type="text"
                                value={values.email}
                                onChange={onChange} />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-field col l6">
                            <input id="password" type="password"
                                name="password"
                                value={values.password}
                                onChange={onChange} />
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="offset-l11 col l1">
                            <button className="btn" onClick={onSubmit}>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
