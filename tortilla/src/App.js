import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Login"
import Story from "./pages/Story"
import Contact from "./pages/Contact";
import Carousel from "./components/Carousel/index"
import row from "./components/Row/index"
import Row from "./components/Row/index";

class App extends Component{

  render() {
  return (
    <Router>
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
        <Footer />
      </div>
    </Router>

  );
}
}

export default App;
