# Phase-1-Project
 

# SHOP-IG

This README file provides an overview and explanation of the functionality of a web application that interacts with an API to display and manage products. 
The application allows users to view product details, search for products, buy products (reducing stock), and add new products.


## Overview

The application ensures the DOM has loaded by adding an event listener to the `DOMContentLoaded` event. It then fetches product data from an API at "https://shop-ig.onrender.com/products" using the `fetch` API.

## Setting up
 1. Clone the repository to your local machine, in your terminal run, <br>
   git clone git@github.com:Mercy2525/Phase-1-Project.git
 2. Since the API is rendered, one manny not need to run it locally 

## Technologies Used
- HTML, CSS, and JavaScript for the frontend interface.
- Fetch API to communicate with the external API.
- Backend API (not included) to manage product data.
- Node.js (optional) for setting up a local server during development.

## Features

1. **Displaying Products**
   - The `displayProducts` function is responsible for rendering the product details on the web page.
   - It creates an option for each product's title in a search list (`datalistOptions`) to enable product searching based on their titles.
   - For each product, a `div` with class "card" is created to display the product's image, title, price, stock, description, a "Buy" button, and a "Remove" button.
   - Each "Buy" button is associated with an event listener that reduces the stock of the product and updates it in the API when clicked. If the stock becomes zero, the button is disabled and labeled "Sold Out."
   - Each "Remove" button is associated with an event listener that deletes the product from the API and removes its card from the web page.

2. **Searching Products**
   - The `searchInput` field allows users to input text for product searching.
   - An `input` event listener is added to the search input to filter and display only the products whose titles match the search term.

3. **Adding New Products**
   - The application provides a form (`form`) for adding new products.
   - When the form is submitted, the `postProducts` function is called to add the new product to the API using the `POST` method.
   - The form inputs include fields for providing the image URL, title, price, stock, and description of the new product.

## API Endpoints

The application interacts with the following endpoints on the API:

- **GET** - "https://shop-ig.onrender.com/products": Retrieves the list of existing products.
- **POST** - "https://shop-ig.onrender.com/products": Adds a new product to the list.
- **PATCH** - "https://shop-ig.onrender.com/products/{id}": Updates the stock of a product when it is purchased.
- **DELETE** - "https://shop-ig.onrender.com/products/{id}": Deletes a product from the list.

## How to Use

1. Ensure that the DOM has loaded before interacting with the application.
2. The product list will be fetched from the API and displayed on the web page.
3. Use the search input (`#search`) to filter and display products whose titles match the search term.
4. To purchase a product, click the "Buy" button associated with that product. The stock will be reduced by one in the API, and the product's stock will be updated accordingly.
5. If a product's stock reaches zero, the "Buy" button will be disabled and labeled "Sold Out."
6. To remove a product from the list, click the "Remove" button associated with that product. The product will be deleted from the API, and its card will be removed from the web page.
7. To add a new product, fill out the form (`#form`) with the required details (image URL, title, price, stock, description) and submit the form. The new product will be added to the API and displayed on the web page.

## Dependencies

The application relies on the following:

- The `fetch` API to interact with the external API.
- DOM manipulation to create and display product cards and update stock information.

### LICENSE
This project is licensed under the [MIT License](LICENSE).

## Author

[MERCY MURIITHI](https://github.com/Mercy2525)