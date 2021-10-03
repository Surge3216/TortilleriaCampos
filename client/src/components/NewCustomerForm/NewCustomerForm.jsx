import React from 'react';
import { useForm } from '../../utils/hooks';
import axios from 'axios'

export default function NewCustomerForm() {
    const { onChange, onSubmit, values } = useForm(newClientCallback, {
        companyName: '',
        contactName:'',
        phone: '',
        address: '',
        city: '',
        state: '',
        zip: '',
    });

    function newClient() {
        axios.post("/api/customer/", values)
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
                            <input id="companyName"
                                name="companyName"
                                type="text"
                                value={values.companyName}
                                onChange={onChange}
                            />
                            <label htmlFor="name">Company Name</label>
                        </div>
                    </div>
                    <div className="row">
                    <div className="input-field col s6 l6">
                            <input id="contactName"
                                name="contactName"
                                type="text"
                                value={values.contactName}
                                onChange={onChange}
                            />
                            <label htmlFor="name">Contact Name</label>
                        </div>
                        <div className="input-field col s12 l6">
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
                        <div className="offset-l11 col l1">
                            <button className="btn" onClick={onSubmit}>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
