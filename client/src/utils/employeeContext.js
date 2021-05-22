import React from "react";

const EmployeeContext = React.createContext({
    employeeName: "",
    
    employeeType: "",

    handleLogin: ()=> {},

    handleLogout: ()=>{},

    isLoggedIn: false,
})

export default EmployeeContext;