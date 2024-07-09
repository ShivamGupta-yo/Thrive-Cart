# Thrive Cart

Thrive Cart is a comprehensive e-commerce platform built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. This application provides a seamless shopping experience for customers and powerful management tools for administrators.

## Features

### Admin Dashboard
- Login and authentication
- Create, update, and delete products
- Add and manage product categories
- View all products
- Manage users and view user information

### User Dashboard
- User registration and login
- Browse and search products
- Filter products by category and price
- Add items to the cart
- Update user profile
- View order history and track orders
- Secure payment processing using Razorpay API

## Installation

1. **Clone the repository:**
   ```sh
        git clone https://github.com/ShivamGupta-yo/Thrive-Cart.git
   cd Thrive-Cart
2. **Install server dependencies:**
   ```sh
   cd server
   npm install
3. **Install client dependencies:**
   ```sh
   cd ../client
   npm install
4. **Set up environment variables:**
   Create a .env file in the server directory and add the following:
   ```makefile
   PORT = 4000
   MONGO_URL = your_url
   JWT_SECRET =your-key
   RAZORPAY_KEY_ID =your-id
   RAZORPAY_SECRET =your-secret-key
5. **Run the server:**
   ```sh
   cd ../server
   npx nodemon index.js
6. **Run the client:**
   ```sh
   cd ../client
   npm start

## Usage:
1. Admin Login: Access the admin dashboard to manage products and users.
2. User Registration and Login: Create a new user account or log in to access personalized features.
3. Browsing and Shopping: Browse products, add items to the cart, and proceed to checkout.
4. Order Management: View and track order history.

## Technologies Used: 
MongoDB: NoSQL database for storing product and user data.
Express.js: Backend framework for building RESTful APIs.
React.js: Frontend library for building user interfaces.
Node.js: JavaScript runtime for the server-side environment.
Razorpay API: Payment gateway for secure transactions.

## Contributing: 
Contributions are welcome! Please follow these steps to contribute:
1. Fork the repository.
2. Create a new branch (git checkout -b feature-branch).
3. Make your changes and commit them (git commit -m 'Add new feature').
4. Push to the branch (git push origin feature-branch).
5. Create a pull request.

## Contact Us:
For any queries, Contact Us at:
shivam1234snr@gmail.com

### Thank you for checking out Thrive Cart! We hope you find it useful for your e-commerce needs.

   












   
