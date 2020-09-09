import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MenuComponent from "./components/MenuComponent";
import { Navbar, NavbarBrand } from "reactstrap";
import { Component } from "react";
import { DISHES } from "./shared/dishes";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { dishes: DISHES };
  }

  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div classname="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <MenuComponent dishes={this.state.dishes} />
      </div>
    );
  }
}

export default App;
