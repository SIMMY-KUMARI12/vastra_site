export const homeQuantityToggle = (event, id, stock) => {
    // selecting current product in the card using product id
  const currentCardElement = document.querySelector(`#card${id}`);

    // finding the quantity of that product
  const productQuantity = currentCardElement.querySelector(".productQuantity");
  let quantity = parseInt(productQuantity.getAttribute("data-quantity")) || 1;


  // baised on the availability --> the addition and removal of quantity 
  if (event.target.className === "cartIncrement") {
    if (quantity < stock) {
      quantity += 1;
    } else if (quantity === stock) {
      quantity = stock;
    }
  }

  if (event.target.className === "cartDecrement") {
    if (quantity > 1) {
      quantity -= 1;
    }
  }


  productQuantity.innerText = quantity;
  productQuantity.setAttribute("data-quantity", quantity.toString());
  return quantity;
};