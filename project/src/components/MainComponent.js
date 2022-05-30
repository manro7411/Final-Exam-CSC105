import React, { Component } from "react";
import Menu from "./Photogallery";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Contact from "./Aboutme";
import Home from "./Homepage";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";
import { DISHES } from "../shared/dishes";
import { Switch, Route, Redirect } from "react-router-dom";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      promotions: PROMOTIONS,
      leaders: LEADERS,
    };
  }
  selectedDish() {
    this.renderDish(this.props.dishes[this.props.selectedDish]);
  }
  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }
  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.state.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
          leader={this.state.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    };
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/menu"
            component={() => (
              <Menu
                dishes={this.state.dishes}
                selectedDish={this.state.selectedDish}
                comments={this.state.comments}
                onClick={(dishId) => this.onDishSelect(dishId)}
              />
            )}
          />
          <Route exact path="/contactus" component={Contact} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}
export default Main;
