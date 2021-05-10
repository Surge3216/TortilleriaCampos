import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Login"
import Story from "./pages/Story"


class App extends Component{

  render() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Story}/>
        <Route exact path="/story" component={Story} />
        <Route exact path="/login" component={Login} />
        <Footer />
      </div>
    </Router>

  );
}
}

export default App;
