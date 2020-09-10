import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderComments({ comments }) {
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
                  -- {comment.author},{" "}
                  {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                  }).format(new Date(Date.parse(comment.date)))}
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

function RenderDish({ dish }) {
  return (
    <Card>
      <CardImg top src={dish.image} alt={dish.name} />
      <CardBody>
        <CardTitle heading>{dish.name}</CardTitle>
        <CardText>{dish.description}</CardText>
      </CardBody>
    </Card>
  );
}

const DishDetail = (props) => {
  return (
    <div className="container">
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/menu">Menu</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
      </Breadcrumb>
      <div className="col-12">
        <h3>{props.dish.name}</h3>
        <hr />
      </div>
      {props.dish ? (
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <RenderDish dish={props.dish} />
          </div>
          <div className="col-12 col-md-5 m-1">
            <RenderComments comments={props.comments} />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default DishDetail;
