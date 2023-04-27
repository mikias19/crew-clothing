import { createSelector } from "reselect";

const selectCart = (state) => {
  return state.cart.cartItems;
};

export const selectCartItems = createSelector([selectCart], (cartItems) => {
  return cartItems;
});

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulator, cartItem) => accumulator + cartItem.quantitiy,
      0
    )
);
