import  { useContext } from "react";
import { CartContext } from "../../Contexts/CartContext";
import Header from "../../Components/Header";
import Button from "../../Components/ButtonsComponent/Button";
import { ImCancelCircle } from "react-icons/im";
import { EmptyBox } from "../../assets/index";

// import styles from './';

const Cart = () => {
  const { state, dispatch } = useContext(CartContext);

  const totalAmount = state.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const increaseQuantity = (item) => {
    dispatch({ type: "INCREASE_QUANTITY", payload: { id: item.id }});
  };

  const decreaseQuantity = (item) => {
    dispatch({ type: "DECREASE_QUANTITY", payload: { id: item.id }});

  };

  const removeFromCart = (item) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { id: item.id }});

  };

  return (
    <>
      <Header />

      <section className="cart__container">
        {state.items.length === 0 ? (
          <div className="cart_err">
          <p> No items in the cart</p>
          <img src={EmptyBox} width={200} alt="empty box" /> 
          </div>
        ) : (
          <ul>
            {state.items.map((item) => (
              <li key={item.id} className="cart__list__container">
                <div className="cart__image">
                  <img src={item.foodImg} alt="item picture" />
                </div>
                <div className="cart__items__details">
                  <p>{item.name}</p>
                  <p>
                    ${item.price} x {item.quantity}


                  </p>

                  <p>Total: ${item.price * item.quantity}</p>
                </div>

                <div className="cart__actions">


                  <Button 
                  onClick={() => increaseQuantity(item)} 
                   buttonName='+'
                  className='action__btn'
                  />


                  <Button
                   onClick={() => decreaseQuantity(item)} buttonName='-' 
                   className='action__btn'
                   />


                  <ImCancelCircle
                   style={{color:'red', cursor:'pointer'}} 
                   onClick={() => removeFromCart(item)} 
                   />
                </div>
              </li>
            ))}
            
            <div className="check__out">
         
 <p> Total price is : ${totalAmount.toFixed(2)}</p>
  <Button buttonName='checkOut' className='check__out__btn' />
        </div>

          </ul>
        )}

        
       
      </section>
    </>
  );
};

export default Cart;
