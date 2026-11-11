# Vastra – E-Commerce Website

## About the Project

Vastra is a frontend e-commerce website designed for clothing and fashion accessories. It provides users with an interface to explore different products and interact with shopping-related features.

The project focuses on building a structured and interactive shopping interface using HTML, CSS and JavaScript.

## Technologies Used

- **HTML5** – Used to structure the website and its content.
- **CSS** – Used for styling, layouts and responsive design.
- **JavaScript** – Used to implement dynamic product rendering and interactive functionalities.
- **JSON** – Used to maintain product information.


## Features

- **Product Display:** Displays product information such as name, category, brand, price, description and images.
- **Dynamic Product Rendering:** Generates product cards dynamically using JavaScript and reusable HTML templates.
- **Quantity Management:** Allows users to increase or decrease product quantities while respecting stock limits.
- **Add to Cart:** Implements JavaScript logic to add selected products to the shopping cart.
- **Cart Counter:** Displays the number of distinct products stored in the cart.
- **Responsive Layout:** Uses CSS media queries to adapt the website layout to different screen sizes.

## Project Structure

```text
Vastra/
│
├── api/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── addToCart.js
│   ├── counter.js
│   ├── getCartProducts.js
│   ├── homeProductcards.js
│   ├── homeQuantityToggle.js
│   ├── main.js
│   ├── style.css
│   └── updateCartValue.js
│
├── index.html
├── package.json
├── package-lock.json
└── .gitignore
```

## How to Run the Project Locally

1. Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

2. Navigate to the project directory:

```bash
cd Vastra
```

3. Install the dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open the local URL displayed in the terminal to view the website.

## How It Works

- Product information is maintained in `api/products.json`.
- `main.js` imports the product data and initializes product rendering.
- `homeProductcards.js` dynamically generates product cards using an HTML template.
- `homeQuantityToggle.js` handles product quantity increment and decrement operations.
- `addToCart.js` manages adding products to the cart.
- `updateCartValue.js` updates the cart counter displayed on the website.

## Future Enhancements

- Implement a complete shopping cart page.
- Implement a complete contact page.


## Author

**Simmy Kumari**
