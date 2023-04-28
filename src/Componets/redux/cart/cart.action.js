import { CartActionType } from "./cartAction.type";

export const toogleCartHandler = () => ({
  type: CartActionType.toggleCartHandler,
});

export const addToCart = (item) => ({
  type: CartActionType.addToCart,
  payload: item,
});

export const clearItemFromCart = (item) => ({
  type: CartActionType.clearItemFromCart,
  payload: item,
});

export const removeItemFormCart = (item) => ({
  type: CartActionType.removeItemFormCart,
  payload: item,
});
