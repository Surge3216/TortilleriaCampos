import React, { Component} from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthProvider } from "./context/auth";
import Login from "./pages/Login"
import Story from "./pages/Story"
import Contact from "./pages/Contact";
import Carousel from "./components/Carousel/index"
import DriversOrders from "./pages/DriversOrders"
import NewClient from "./pages/NewClient.jsx"
import Order from "./pages/ClientOrder.js"
import AddUser from "./pages/AddUser.jsx"

class App extends Component{

  render() {
  return (
    <AuthProvider>
    <Router>
  
      <div>
        <Navbar />
        <Carousel/>
        <Route exact path="/" component={Story}/>
        <Route exact path="/story" component={Story} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/driverorders" component={DriversOrders}/>
        <Route exact path="/order" component={Order}/>
        <Route exact path="/newClient" component={NewClient}/>
        <Route exact path="/addUser" component={AddUser}/>
        <Footer />
      </div>
    </Router>
    </AuthProvider>
  );
}
}

export default App;
