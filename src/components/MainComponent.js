import React, { Component } from "react";
import Menu from "./MenuComponent";
import Home from "./HomeComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import About from "./AboutComponent";
import DishDetail from "./DishDetailComponent";
import { Route, Switch, Redirect } from "react-router-dom";
import Contact from "./ContactComponent";
import { COMMENTS } from "../shared/comments";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";
import { DISHES } from "../shared/dishes";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS,
    };
  }

  HomePage = () => {
    return (
      <Home
        dish={this.state.dishes.filter((dish) => dish.featured)[0]}
        promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
        leader={this.state.leaders.filter((leader) => leader.featured)[0]}
      />
    );
  };

  DishWithId = ({ match }) => {
    return (
      <DishDetail
        dish={
          this.state.dishes.filter(
            (dish) => dish.id === parseInt(match.params.dishId, 10)
          )[0]
        }
        comments={this.state.comments.filter(
          (comment) => comment.id === parseInt(match.params.dishId, 10)
        )}
      />
    );
  };

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home">
            <Home
              dish={this.state.dishes.filter((dish) => dish.featured)[0]}
              promotion={
                this.state.promotions.filter((promo) => promo.featured)[0]
              }
              leader={this.state.leaders.filter((leader) => leader.featured)[0]}
            />
          </Route>
          <Route exact path="/contactus" component={Contact} />
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.state.dishes} />}
          ></Route>
          <Route path="/menu/:dishId" component={this.DishWithId} />
          <Route path="/aboutus">
            <About leaders={this.state.leaders} />
          </Route>
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
