import React, {useState} from 'react'
import Row from '../components/Row/index'
import API from '../utils/API'

function NewEmployee() {
    const [employees, setEmployees] = useState({
        employeeType: "",
        employeeName: "",
        password: "",
        phoneNumber: "",
        emailAddress: "",
    })

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setEmployees({...employees,[name]:value})

    }

    const handleFormSubmit=(event)=>{
        event.preventDefault()
        API.saveEmployees(employees).then((res)=>console.log(res.data)).catch(err=> console.log(err))
    }

    return (
        <div>

            <Row/>                  
                    <div class="card-panel col l9 offset-l1 teal white">
                    <form className="" action="" method="POST" role="form">
                        <div className="row">
                        <div className=" input-field col l4 offset-l2">
                                <input onChange={handleInputChange} placeholder="Role" name="employeeType" type="text" class="validate "></input>
                            </div>
                            <div className=" input-field col l4 ">
                                <input onChange={handleInputChange}  placeholder="Name" name="employeeName" type="text" class="validate "></input>
                            </div>
                            <div className=" input-field col l4 offset-l2">
                                <input onChange={handleInputChange} placeholder="Phone number" name="phoneNumber" type="text" class="validate "/>
                            </div>
                            <div className=" input-field col l4 ">
                                <input onChange={handleInputChange} placeholder="emailAddress" name="emailAddress" type="text" class="validate "/>
                            </div>
                            <div className=" input-field col l4 offset-l2">
                                <input onChange={handleInputChange} placeholder="password" name="password" type="text" class="validate "/>
                            </div>
                            
                        </div>
                        <div className="row">
                            <div class="col l1 offset-l9">
                            <button onClick={()=> handleFormSubmit(employees)} class="waves-effect waves-light btn" id="add-btn" >Add</button>
                            </div>
                        </div>
                    </form>
                </div>         
        </div>
    );
};

export default NewEmployee;