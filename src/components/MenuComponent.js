import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import DishDetail from "./DishDetailsComponent";
import { Media } from "reactstrap";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDish: null,
    };
  }

  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }

  renderDish(dish) {
    if (dish) {
      return <DishDetail selectedDish={dish}></DishDetail>;
    } else {
      return <div></div>;
    }
  }

  render() {
    //Props as a parameter passed from App component to Menu Component
    const menu = this.props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
          {/* <Media tag="li">
            <Media left middle>
              <Media object src={dish.image} alt="{dish.name}" />
            </Media>
            <Media body className="ml-5">
              <Media heading>{dish.name}</Media>
              <p>{dish.description}</p>
            </Media>
          </Media> */}
          <Card onClick={() => this.onDishSelect(dish)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle heading>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row">
          {/*<Media list>
                        {menu}
                    </Media>*/}
          {menu}
        </div>
        {this.renderDish(this.state.selectedDish)}
      </div>
    );
  }
}

export default Menu;
