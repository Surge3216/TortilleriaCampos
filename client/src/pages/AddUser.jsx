import React, {useState} from 'react'
import NewUserForm from '../components/newUserForm/newUserForm';

function NewEmployee() {
    return (
        <div className="container">
            <div className="card ">
        <NewUserForm/>
        </div>
        </div>
    );
};

export default NewEmployee;