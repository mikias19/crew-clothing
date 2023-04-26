import { CartActionType } from "./cartAction.type";

export const toogleCartHandler = () => ({
  type: CartActionType.toggleCartHandler,
});

export const addToCart = (item) => ({
  type: CartActionType.addToCart,
  payload: item,
});
