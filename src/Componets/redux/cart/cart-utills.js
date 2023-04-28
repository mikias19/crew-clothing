export const addItemsToCart = (cartItems, cartItemTOAdd) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemTOAdd.id
  );
  if (existingItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemTOAdd.id
        ? { ...cartItem, quantitiy: cartItem.quantitiy + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemTOAdd, quantitiy: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingItem.quantitiy > 1) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantitiy: cartItem.quantitiy - 1 }
        : cartItem
    );
  }
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
};
