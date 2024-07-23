
import FoodMenuItems from "./FoodMenuItems";
import FoodItems from "../../Helpers/FoodData";
import Button from "../ButtonsComponent/Button";
import { useContext} from "react";
import {CartContext} from '../../Contexts/CartContext'


const FoodMenu = () => {
  const {  dispatch } = useContext(CartContext);

  // const [quantity, setQuantity] = useState(1);
// const dispatch = useContext(CartContext)
  const handleAddToCart = (item) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload:item
    });
  };


  return (
    <>
      <section className="food__menu">
        <div className="food__menu__content">
          <h3>Food Menu</h3>
        </div>

        <div className="food__menu__list">
          {FoodItems.map((food) => (
            <div className="food__list" key={food.id}>
              <FoodMenuItems
                foodImg={food.foodImg}
                foodName={food.name}
                foodDesc={food.description}
                foodPrice={food.price}
                foodID={food.id}
              />
              <button type="submit" onClick={() => handleAddToCart(food)}>
              Add to Cart
            </button>
             
            </div>
          ))}
          <Button buttonName='Show More' className='show__btn' 
          onClick ={()=> handleAddToCart () }/>
        </div>
      </section>
    </>
  );
};

export default FoodMenu;
