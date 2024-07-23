
import {useReducer, useContext, createContext} from 'react'

const initialState= {
  items :[]
}

const CartContext = createContext();

const reducer = (state, action ) =>{
  
  const existingItem =  state.items.find(item => item.id === action.payload.id); 
    switch (action.type) {
      case 'ADD_TO_CART':
     
      if (existingItem) {
        return state;
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      };

      case 'INCREASE_QUANTITY':
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };

        case 'DECREASE_QUANTITY':
          return {
            ...state,
            items: state.items.map(item =>
              item.id === action.payload.id && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          };
  

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id),
      };

    
      default:
        return state;
    }
}



const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};


export {CartContext, CartProvider}