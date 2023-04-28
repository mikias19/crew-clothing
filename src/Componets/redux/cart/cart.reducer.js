import { CartActionType } from "./cartAction.type";
import { addItemsToCart, removeItemFromCart } from "./cart-utills";

const INTIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case CartActionType.toggleCartHandler:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionType.addToCart:
      console.log("cartItem:", state.cartItems);
      return {
        ...state,
        cartItems: addItemsToCart(state.cartItems, action.payload),
      };
    case CartActionType.clearItemFromCart:
      console.log("cartItem:", state.cartItems);
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    case CartActionType.removeItemFormCart:
      console.log("cartItem:", state.cartItems);
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};
export default cartReducer;
