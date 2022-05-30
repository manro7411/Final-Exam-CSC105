import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
const renderDish = (dish) => {
  return (
    <Card>
      <CardImg top src={dish.image} alt={dish.name} />
      <CardBody>
        <CardTitle>
          <b>{dish.name}</b>
        </CardTitle>
        <CardText>{dish.description}</CardText>
      </CardBody>
    </Card>
  );
};
const DishDetail = ({ dish }) => {
  return (
    <div className="row col-12">
      <div className="col-12 col-md-5 m-1">{renderDish(dish)}</div>
      <div className="col-12 col-md-5 m-1">
      </div>
    </div>
  );
};

export default DishDetail;
