import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Login"
import Story from "./pages/Story"
import Contact from "./pages/Contact";
import DriversOrders from "./pages/DriversOrders";


class App extends Component{

  render() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Story}/>
        <Route exact path="/story" component={Story} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/driverorders" component={DriversOrders}/>
        <Footer />
      </div>
    </Router>

  );
}
}

export default App;
