# E_commerce-website
Frontend project

# Cart Genie

A React-based e-commerce frontend application with shopping cart functionality and product browsing.

## Features

- Product catalog with 50+ items across multiple categories
- Shopping cart with add/remove functionality
- Product filtering by subcategory
- Responsive design for all devices
- User authentication pages
- Contact and blog sections

## Tech Stack

- React 18 with Hooks
- React Router DOM
- Context API for state management
- Custom CSS

## Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Open `http://localhost:3000`

## Project Structure

```
src/
├── Components/     # Reusable components (Card, CartModal, Navbar, etc.)
├── Context/        # CartContext for global state
├── Data/          # ProductsData.json
├── Pages/         # Route components (Home, Products, Blog, etc.)
├── App.jsx        # Main app component
└── App.css        # Styling
```

## Key Components

- **CartContext**: Global cart state management
- **Card**: Product display component with cart functionality  
- **CartModal**: Shopping cart overlay with order confirmation
- **Productsnav**: Category filtering navigation

## Pages

- **Home**: Hero banner and featured products
- **Products**: Full product catalog with pagination
- **Blog**: Product showcase with descriptions
- **Contact**: Support information and contact details
- **Authentication**: Sign up and sign in forms
  
## Clone the Repository

- git clone https://github.com/Muhammad-Usman047/E_commerce-website.git
