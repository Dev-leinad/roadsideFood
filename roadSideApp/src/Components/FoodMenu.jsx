import React from "react";
import FoodMenuItems from "./FoodMenuItems";
import FoodItems from "../Helpers/FoodData";

const FoodMenu = () => {
  const id = FoodItems.length - 1;
  console.log(id);
  return (
    <>
      <section className="food__menu">
        <div className="food__menu__content">
          <h3>Food Menu</h3>
        </div>

        <div className="food__menu__list">
          {FoodItems.map((food, id) => (
            <div className="food__list" key={id}>
              <FoodMenuItems
                foodImg={food.foodImg}
                foodName={food.name}
                foodDesc={food.description}
                foodPrice={food.price}
                foodID={id}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default FoodMenu;
