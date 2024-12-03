# 💐 Flower Shop React App

A simple and elegant flower shop application built using **React JS**. This project provides a smooth user interface where users can browse flowers, add them to their cart, and view the total price of their selections. 

## 🏗️ Project Structure

The application is composed of the following main components:

1. **App.js**  
   The entry point for the app, which sets up the layout and includes the `Products` component.

2. **Products.js**  
   Displays a list of products (flowers) fetched from the database (`FlowerDB`). Users can add items to the cart from this component.

3. **Product.js**  
   Represents a single product card. Users can specify the quantity of a flower and add it to the cart.

4. **Cart.js**  
   Displays all the items added to the cart with their quantity and the total price.

## ✨ Features

- Browse a catalog of flowers.
- Add items to a shopping cart with specified quantities.
- View and manage the cart contents dynamically.
- Calculate the grand total price in real time.
- A responsive grid layout for the product list.

## 📂 Folder Structure

```plaintext
project/
├── src/
│   ├── assets/
│   │   ├── CSS/
│   │   │   └── layout.css
│   │   └── image/
│   │       └── [flower images]
│   ├── components/
│   │   ├── App.js
│   │   ├── Products.js
│   │   ├── Product.js
│   │   └── Cart.js
│   ├── FlowerDB.js
│   └── index.js
└── README.md
```

## 🚀 Getting Started

Follow these steps to set up the project on your local machine.

### Prerequisites

Ensure you have the following installed:
- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/LayuruLK/IT3133-ICAE_01.git
   cd flower-shop-react
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## 🌼 Components Overview

### **App.js**

Sets up the main layout using a grid container and renders the `Products` component.

### **Products.js**

- Fetches flower data from `FlowerDB.js`.
- Displays a list of products using the `Product` component.
- Manages the cart state and provides the `addtoCart` function.

### **Product.js**

- Displays individual product details such as name, price, and image.
- Allows users to specify a quantity and add items to the cart.

### **Cart.js**

- Displays items added to the cart, their quantities, and the total price.
- Dynamically calculates and updates the grand total.

## 🌷 Styling

The project uses CSS for styling:
- **File**: `layout.css`
- The layout is built using a responsive grid system.
- Includes styling for cards, buttons, and the table in the cart.

### Example Card Styling
```css
.card {
  border: 1px solid #ddd;
  padding: 16px;
  margin: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}
```

## 📜 Flower Database (FlowerDB.js)

The `flowers` object contains an array of flower details:
```javascript
export const flowers = [
  { id: 1, name: "Rose", price: 5, img: "rose.jpg" },
  { id: 2, name: "Tulip", price: 7, img: "tulip.jpg" },
  // Add more flowers as needed
];
```

## 🛠️ Built With

- **React JS**: Frontend framework
- **CSS**: Styling and layout

## 📸 Screenshots

### Flower List
![Flower List Screenshot](/myapp/src/assets/image/Screenshots/Screenshot 2024-12-03 231438.png)

### Cart
![Cart Screenshot](/myapp/src/assets/image/Screenshots/Screenshot 2024-12-03 231448.png)

## 🌟 Future Improvements

- Add user authentication for personalized carts.
- Integrate a backend for real-time data storage.
- Enhance the UI/UX with animations and transitions.
- Add payment gateway integration for checkout.

## 🏆 Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue.

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-branch
   ```
3. Make your changes and commit:
   ```bash
   git commit -m "Description of changes"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-branch
   ```
5. Submit a pull request.

## 📜 License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

Thank you for visiting! Enjoy exploring the **Flower Shop React App**. 🌼