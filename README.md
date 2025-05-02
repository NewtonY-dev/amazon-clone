# Amazon Clone

## Description

This project is a clone of the Amazon e-commerce platform, built using React and Firebase. It includes features for user authentication, product display, shopping cart management, and payment processing.

## Features

* User authentication (Sign In and Sign Up)
* Product listing and display
* Shopping cart functionality (add and remove items)
* Payment processing using Stripe
* Responsive design

## Technology Stack

* **React:** A JavaScript library for building user interfaces. [https://reactjs.org/](https://reactjs.org/)
* **Firebase:** A platform for building web and mobile applications. Used for authentication and potentially other backend services (like Firestore or Realtime Database, though not explicitly detailed in provided snippets beyond functions). [https://firebase.google.com/](https://firebase.google.com/)
    * `firebase-admin`: For backend services in Firebase Functions. [https://firebase.google.com/docs/admin](https://firebase.google.com/docs/admin)
    * `firebase-functions`: For deploying backend code to Firebase. [https://firebase.google.com/docs/functions](https://firebase.google.com/docs/functions)
* **Stripe:** A platform for online payment processing. [https://stripe.com/](https://stripe.com/)
    * `@stripe/react-stripe-js` and `@stripe/stripe-js`: For integrating Stripe with React. [https://stripe.com/docs/stripe-js](https://stripe.com/docs/stripe-js)
* **Axios:** A promise-based HTTP client for the browser and node.js. [https://axios-http.com/](https://axios-http.com/)
* **React Router DOM:** For handling routing within the React application. [https://reactrouter.com/web/guides/quick-start](https://reactrouter.com/web/guides/quick-start)
* **@mui/material & @emotion/react/@emotion/styled:** Material UI for React components. [https://mui.com/](https://mui.com/)
* **react-responsive-carousel:** For implementing a carousel in the UI. [http://react-responsive-carousel.js.org/](http://react-responsive-carousel.js.org/)
* **react-spinners:** For loading spinners. [https://www.davidhu.io/react-spinners/](https://www.davidhu.io/react-spinners/)
* **Numeral:** For formatting numbers, likely currency. [http://numeraljs.com/](http://numeraljs.com/)

## Directory Structure

```
└── newtony-dev-amazon-clone/
├── README.md
├── firebase.json
├── package.json
├── .firebaserc
├── functions/
│   ├── index.js          # Firebase Functions code
│   ├── package-lock.json
│   ├── package.json      # Dependencies for Firebase Functions
│   └── .gitignore
├── public/
│   ├── index.html        # Main HTML file
│   ├── manifest.json
│   └── robots.txt
└── src/
├── App.css
├── App.js            # Main React application component
├── index.css
├── index.js          # Entry point for the React app
├── Router.jsx        # Defines application routes
├── API/
│   ├── axios.js        # Axios configuration
│   └── endPoint.js     # API endpoints
├── Components/       # Reusable React components
│   ├── Carousel/
│   │   ├── Carousel.module.css
│   │   ├── CarouselEffect.jsx
│   │   └── img/
│   │       └── data.js
│   ├── Category/
│   │   ├── Category.jsx
│   │   ├── category.module.css
│   │   ├── CategoryCard.jsx
│   │   └── categoryFullInfo.js
│   ├── CurrencyFormat/
│   │   └── CurrencyFormat.jsx
│   ├── DataProvider/
│   │   └── DataProvider.jsx # Context API for data management
│   ├── Header/
│   │   ├── Header.jsx
│   │   ├── Header.module.css
│   │   └── LowerHeader.jsx
│   ├── LayOut/
│   │   └── LayOut.jsx      # Main layout component
│   ├── Loader/
│   │   └── Loader.jsx
│   ├── Product/
│   │   ├── Product.jsx
│   │   ├── Product.module.css
│   │   └── ProductCard.jsx # Individual product card component
│   └── ProtectedRoute/
│       └── ProtectedRoute.jsx # Component for protected routes
├── Pages/            # Application pages
│   ├── Auth/
│   │   ├── Auth.jsx        # Authentication page
│   │   └── SignUp.module.css
│   ├── Cart/
│   │   ├── Cart.jsx        # Shopping cart page
│   │   └── Cart.module.css
│   ├── Landing/
│   │   └── Landing.jsx     # Landing page
│   ├── Orders/
│   │   ├── Orders.jsx      # Order history page
│   │   └── Orders.module.css
│   ├── Payment/
│   │   ├── Payment.jsx     # Payment page
│   │   └── Payment.module.css
│   ├── ProductDetail/
│   │   ├── ProductDetail.jsx # Product detail page
│   │   └── ProductDetail.module.css
│   └── Results/
│       ├── Results.jsx     # Search results page
│       └── Results.module.css
└── Utility/          # Utility functions and context
├── action.type.js
├── firebase.js         # Firebase configuration
└── reducer.js          # Reducer for Context API
```

## Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/NewtonY-dev/amazon-clone.git
    cd newtony-dev-amazon-clone
    ```

2.  **Install dependencies for the React app:**
    ```bash
    npm install
    ```

3.  **Install dependencies for Firebase Functions:**
    ```bash
    cd functions
    npm install
    cd ..
    ```

4.  **Set up Firebase:**
    * Create a Firebase project on the [Firebase Console](https://console.firebase.google.com/).
    * Install the Firebase CLI: `npm install -g firebase-tools`
    * Log in to Firebase: `firebase login`
    * Associate your local project with your Firebase project: `firebase use --add`
    * Set up your Stripe secret key in Firebase Functions environment variables.

5.  **Set up Stripe:**
    * Create a Stripe account on the [Stripe website](https://stripe.com/).
    * Get your Stripe secret key.

## Usage

1.  **Start the development server:**
    ```bash
    npm start
    ```
    The application will be available at `http://localhost:3000`.

2.  **Deploy Firebase Functions (for payment processing):**
    ```bash
    firebase deploy --only functions
    ```

## API Reference

### Payment Creation

Handles the creation of a payment intent using Stripe.

* **URL:** `YOUR_FIREBASE_FUNCTIONS_ENDPOINT/api/payment/create` 
* **Method:** `POST`
* **Query Parameters:**
    * `total`: The total amount to charge (in cents).
* **Response:**
    * Success (Status Code 201):
        ```json
        {
          "clientSecret": "..."
        }
        ```
    * Error (Status Code 401):
        ```json
        {
          "message": "total must be greater than 0"
        }
        ```

MIT License

Copyright (c) 2025 Newton Yetsedaw

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software 
without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit
persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT
OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.