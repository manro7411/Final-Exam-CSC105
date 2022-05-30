
import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,Button
} from "reactstrap";
import DishDetail from "./DishdetailComponent";

function RenderMenuItem({ dish, onClick }) {
  return (
    <Card onClick={() => onClick(dish.id)}>
      <CardImg width="100%" src={dish.image} alt={dish.name} />
      <CardImgOverlay>
        <CardTitle>{dish.name}</CardTitle>
      </CardImgOverlay>
    </Card>
  );
}

function renderDish(dish, comments) {
  if (dish != null) return (
    <div>
      <DishDetail dish={dish}/>
      
    </div>
  );
  else return <div></div>;
}

const Menu = (props) => {
  const menu = props.dishes.map((dish) => {
    return (
      <div className="col-12 col-md-5 m-1" key={dish.id}>
        <RenderMenuItem dish={dish} onClick={props.onClick} />
      </div>
    );
  });

  return (
    <div className="container">
      <div className="setpic row">{menu}</div>
      <div className="row">{renderDish(props.dishes[props.selectedDish])}</div>
    </div>
  );
};

export default Menu;