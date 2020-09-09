import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderComments(comments) {
    if (comments) {
      return (
        <div>
          <h4>Comments</h4>
          <ul>
            {comments.map((comment) => {
              return (
                <li key={comment.id}>
                  <CardText>{comment.comment}</CardText>
                  <CardText>
                    -- {comment.author}, {comment.date}
                  </CardText>
                </li>
              );
            })}
          </ul>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  renderDish() {
    return (
      <Card>
        <CardImg
          top
          src={this.props.selectedDish.image}
          alt={this.props.selectedDish.name}
        />
        <CardBody>
          <CardTitle heading>{this.props.selectedDish.name}</CardTitle>
          <CardText>{this.props.selectedDish.description}</CardText>
        </CardBody>
      </Card>
    );
  }

  render() {
    return (
      <div className="row">
        <div className="col-12 col-md-5 m-1">{this.renderDish()}</div>
        <div className="col-12 col-md-5 m-1">
          {this.renderComments(this.props.selectedDish.comments)}
        </div>
      </div>
    );
  }
}

export default DishDetail;
