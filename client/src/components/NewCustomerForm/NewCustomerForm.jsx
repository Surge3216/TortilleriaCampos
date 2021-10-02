import React from 'react';
import { useForm } from '../../utils/hooks';
import saveClient from '../../utils/API'

export default function NewCustomerForm() {
    const { onChange, onSubmit, values } = useForm(newClientCallback, {
        email: '',
        password: ''
    });

    function newClient() {
        const clientData = { companyName: "Locos" }
        saveClient(clientData)
    }

    function newClientCallback() {
        newClient()
    }
    return (
        <div className="card">
            <div class="row">
                <form class="col s12">
                    <div class="row">
                        <div class="input-field col s6 l4">
                            <input id="name"
                                name="name"
                                type="text"
                                value={values.name}
                                onChange={onChange}
                            />
                            <label for="name">Name</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12 l4">
                            <input id="phone"
                                name="phone"
                                type="text"
                                value={values.phone}
                                onChange={onChange} />
                            <label for="phone">Phone</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col l4">
                            <input id="address"
                                name="address"
                                type="text"
                                value={values.address}
                                onChange={onChange} />
                            <label for="address">Address</label>
                        </div>
                        <div class="input-field col l2">
                            <input id="city"
                                name="city"
                                type="text"
                                value={values.city}
                                onChange={onChange} />
                            <label for="city">City</label>
                        </div>
                        <div class="input-field col l2">
                            <input id="zip"
                                name="zip"
                                type="text"
                                value={values.zip}
                                onChange={onChange} />
                            <label for="zip">Zip</label>
                        </div>
                        <div class="input-field col l1">
                            <input id="state"
                                name="state"
                                type="text"
                                value={values.state}
                                onChange={onChange} />
                            <label for="state" >State</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12 l6">
                            <input id="email"
                                name="email"
                                type="text"
                                value={values.email}
                                onChange={onChange} />
                            <label for="email">Email</label>
                        </div>
                        <div class="input-field col l6">
                            <input id="password" type="password" 
                            name="password"
                            value={values.password}
                            onChange={onChange} />
                            <label for="password">Password</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="offset-l11 col l1">
                            <button className="btn" onClick={onSubmit}>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
