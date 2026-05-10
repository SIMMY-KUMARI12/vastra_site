import { getCartProductFromLS } from "./getCartProducts";
import { updateCartValue } from "./updateCartValue";

// to get the data of products present in the cart from localStorage

// for updating the cart value &  also to get the data from localStorage

getCartProductFromLS();

// now adding the data into localStorage
export const addToCart = (event, id, stock) => {
  let arrLocalStorageProduct = getCartProductFromLS();

  const currentProdElem = document.querySelector(`#card${id}`);
  let quantity = currentProdElem.querySelector(".productQuantity").innerText;
  let price = currentProdElem.querySelector(".productPrice").innerText;
  price = price.replace("₹", "");   // will just get the price 

  let existingProd = arrLocalStorageProduct.find(
    (curProd) => curProd.id === id
  );

  console.log(existingProd);

  if (existingProd && quantity > 1) {
    quantity = Number(existingProd.quantity) + Number(quantity);
    price = Number(price * quantity);
    let updatedCart = { id, quantity, price };

    updatedCart = arrLocalStorageProduct.map((curProd) => {
       if(curProd.id === id){
        return updatedCart;
       }
       else{
        return curProd;
      }
    });
    console.log(updatedCart);

    localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));
    
  }

  if (existingProd) {
    // so that the duplicate elements does not show up in the count value of the cart
    return false;
  }


  price = Number(price * quantity);
  quantity = Number(quantity);

  arrLocalStorageProduct.push({ id, quantity, price });
  localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));

  //update the cart button value
  updateCartValue(arrLocalStorageProduct);

  //show toast when product added to the cart
  showToast("add", id);
};