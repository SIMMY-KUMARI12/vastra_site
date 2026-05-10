import { updateCartValue } from "./updateCartValue";

// writting Function to get the  products in cart from localStorage
export const getCartProductFromLS = () => {
  let cartProducts = localStorage.getItem("cartProductLS");
  if (!cartProducts) {
   // Returning empty array if no cart data exists
    return [];
  }

  // localStorage returns data as string, so converting into JavaScript object/array
  cartProducts = JSON.parse(cartProducts);

  //update the cart button value
  updateCartValue(cartProducts);

  return cartProducts;
};