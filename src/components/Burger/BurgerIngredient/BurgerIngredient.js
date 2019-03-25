import React, { Component } from "react";
import PropTypes from "prop-types";

import classes from "./BurgerIngredient.css";

class BurgerIngredient extends Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case "bread-bottom":
        ingredient = <div className={classes.BreadBottom} />;
        break;
      case "bread-top":
        ingredient = (
          <div className={classes.BreadTop}>
            <div className={classes.Seeds1} />
            <div className={classes.Seeds2} />
          </div>
        );
        break;
      case "blackBeanBurger":
        ingredient = <div className={classes.BlackBeanBurger} />;
        break;
      case "cashewCheese":
        ingredient = <div className={classes.CashewCheese} />;
        break;
      case "lettuce":
        ingredient = <div className={classes.Lettuce} />;
        break;
      case "mushroom":
        ingredient = <div className={classes.Mushroom} />;
        break;
      default:
        ingredient = null;
    }
    return ingredient;
  }
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default BurgerIngredient;
