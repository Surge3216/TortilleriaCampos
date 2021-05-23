import React, { Component, useState} from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Login"
import Story from "./pages/Story"
import Contact from "./pages/Contact";
import Carousel from "./components/Carousel/index"
import row from "./components/Row/index"
import Row from "./components/Row/index";
import DriversOrders from "./pages/DriversOrders"
import NewClient from "./pages/NewClient.js"
import Order from "./pages/ClientOrder.js"
import EmployeeContext from "./utils/employeeContext"

class App extends Component{
state= {
  employeeName: "",
  employeeType: "",
  isLoggedIn:"",

}
handleLogin= (userName, password) =>{
  alert(userName)
  this.setState({
    isLoggedIn: true
  })
}

handleLogout= () =>{
  this.setState({
    isLoggedIn: false, employeeName: "", employeeType: ""
  })
}
  render() {
  return (
    <Router>
      <EmployeeContext.Provider value={{...this.state, handleLogin: this.handleLogin, handleLogout: this.handleLogout}}>

      <div>
        <Navbar />
        <Row>
          <div class="col l12 offset-l1">
        <Carousel />
        </div>
        </Row>
        <Route exact path="/" component={Story}/>
        <Route exact path="/story" component={Story} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/driverorders" component={DriversOrders}/>
        <Route exact path="/order" component={Order}/>
        <Route exact path="/newClient" component={NewClient}/>
        <Footer />
      </div>
      </EmployeeContext.Provider>
    </Router>

  );
}
}

export default App;
