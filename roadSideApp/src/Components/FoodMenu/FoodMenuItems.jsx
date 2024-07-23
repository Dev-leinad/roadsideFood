import React from "react";
import { FaShareAlt } from "react-icons/fa";

const FoodMenuItems = ({
  foodPrice,
  shareIcon,
  foodName,
  foodDesc,
  reviewCount,
  foodImg,
  foodID,
}) => {
  return (
    <>
      <div className="food__img">
        <img src={foodImg} alt="food picture" />
      </div>
      <div className="food__img__content">
        <div className="food__title__row">
          <h4>{foodName}</h4>
          <span>
            <FaShareAlt role="button" className="share__icon" />
          </span>
        </div>
        <div className="food__description">
          <p>{foodDesc}</p>
        </div>
        <div className="food__pricing__rating">
          <p className="food__price">
            $<span>{foodPrice} </span>
          </p>

          <p>
            <span>5.0</span> Reviews
          </p>
        </div>
      </div>
    </>
  );
};

export default FoodMenuItems;
