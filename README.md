# Swiggy Clone

This project is a clone of the Swiggy food delivery application. It includes features such as user authentication, viewing and managing the cart, placing orders, and viewing order history.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- User Authentication (Sign Up, Log In, Log Out)
- View and manage cart items
- Place orders
- View order history
- Responsive design

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/swiggy-clone.git
   cd swiggy-clone



Install the dependencies:
npm install

Run the application:ng serve

Open your browser and navigate to http://localhost:4200.

Usage
User Authentication
Sign Up: Create a new account by providing your name, email, and password.
Log In: Log in to your account using your email and password.
Log Out: Log out of your account.
Cart Management
Add to Cart: Add items to your cart from the menu.
Update Cart: Increment or decrement the quantity of items in your cart.
View Cart: View the items in your cart and the total price.
Order Placement
Place Order: Place an order with the items in your cart.
Order History: View your past orders.
Project Structure

src/
├── app/
│   ├── components/
│   │   ├── navbar/
│   │   │   ├── navbar.component.html
│   │   │   ├── [navbar.component.ts](http://_vscodecontentref_/1)
│   │   │   ├── navbar.component.css
│   ├── pages/
│   │   ├── cart-details/
│   │   │   ├── cart-details.component.html
│   │   │   ├── cart-details.component.ts
│   │   │   ├── cart-details.component.css
│   │   ├── order-history/
│   │   │   ├── order-history.component.html
│   │   │   ├── order-history.component.ts
│   │   │   ├── order-history.component.css
│   │   ├── favourites/
│   │   │   ├── favourites.component.html
│   │   │   ├── favourites.component.ts
│   │   │   ├── favourites.component.css
│   ├── services/
│   │   ├── login/
│   │   │   ├── login.service.ts
│   │   ├── cart/
│   │   │   ├── cart.service.ts
│   │   ├── order/
│   │   │   ├── order.service.ts
│   │   ├── fav/
│   │   │   ├── fav.service.ts
│   ├── interfaces/
│   │   ├── restaurant.interface.ts
│   ├── app.module.ts
│   ├── app.component.html
│   ├── app.component.ts
│   ├── app.component.css
├── assets/
├── environments/
├── index.html
├── main.ts


