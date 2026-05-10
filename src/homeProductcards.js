import { addToCart } from "./addToCart";
import { homeQuantityToggle } from "./homeQuantityToggle";

// getting the product container
const productContainer = document.querySelector("#productContainer");
// getting the template for product cards
const productTemplate = document.querySelector("#productTemplate");

export const showProductContainer = (products) => {
  if (!products) {
    // if products are not available then stop 
    return false;
  }

  // looping through all products
  products.forEach((curProd) => {
    const { brand, category, description, id, image, name, price, stock } =
      curProd;

    const productClone = document.importNode(productTemplate.content, true);
    
    // setting unique id for each card
    productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);

    // adding product details dynamically
    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".productImage").src = image;
    productClone.querySelector(".productImage").alt = name;
    productClone.querySelector(".productStock").textContent = stock;
    productClone.querySelector(".productDescription").textContent = description;
    productClone.querySelector(".productPrice").textContent = `₹${price}`;
    productClone.querySelector(".productActualPrice").textContent = `₹${
      price * 2}`;
    
    // handling quantity
    productClone.querySelector(".stockElement")
    .addEventListener("click", (event) => {
        homeQuantityToggle(event, id, stock);
      });

      // adding product to cart
    productClone.querySelector(".add-to-cart-button")
      .addEventListener("click", (event) => {
        addToCart(event, id, stock);
      });

    productContainer.append(productClone);
  });
};