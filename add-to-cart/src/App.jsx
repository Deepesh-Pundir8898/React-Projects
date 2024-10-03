import { useState ,useEffect } from 'react'
import { FaCartPlus } from "react-icons/fa";
import './App.css'
import ProductList from './components/ProductList';
import Cart from './components/Cart';






function App() {
  const [cartItems, setCartItems] = useState([]);
  const [additemsNUm , setAddItemsNum] = useState(0);

  const products =[
    {
      "id": 1,
      "name": "iPhone 14 Pro",
      "brand": "Apple",
      "price": 999,
      "description": "6.1-inch Super Retina XDR display, A16 Bionic chip, 5G capable, Pro camera system with Ultra Wide, Wide, and Telephoto lenses.",
      "image": "https://example.com/images/iphone14pro.jpg",
      "rating": 4.8
    },
    {
      "id": 2,
      "name": "Samsung Galaxy S23 Ultra",
      "brand": "Samsung",
      "price": 1199,
      "description": "6.8-inch Dynamic AMOLED display, Snapdragon 8 Gen 2, 5G capable, Quad camera setup with 108MP main camera.",
      "image": "https://example.com/images/galaxyS23ultra.jpg",
      "rating": 4.7
    },
    {
      "id": 3,
      "name": "Google Pixel 7 Pro",
      "brand": "Google",
      "price": 899,
      "description": "6.7-inch OLED display, Google Tensor G2 processor, 5G capable, Triple camera system with advanced AI features.",
      "image": "https://example.com/images/pixel7pro.jpg",
      "rating": 4.6
    },
    {
      "id": 4,
      "name": "OnePlus 11",
      "brand": "OnePlus",
      "price": 699,
      "description": "6.55-inch AMOLED display, Snapdragon 8 Gen 2, 5G capable, Triple camera system with Hasselblad partnership.",
      "image": "https://example.com/images/oneplus11.jpg",
      "rating": 4.5
    },
    {
      "id": 5,
      "name": "Xiaomi 13 Pro",
      "brand": "Xiaomi",
      "price": 799,
      "description": "6.73-inch AMOLED display, Snapdragon 8 Gen 2, 5G capable, 50MP triple camera system with Leica optics.",
      "image": "https://example.com/images/xiaomi13pro.jpg",
      "rating": 4.4
    },
    {
      "id": 6,
      "name": "Sony Xperia 1 IV",
      "brand": "Sony",
      "price": 1199,
      "description": "6.5-inch OLED display, Snapdragon 8 Gen 1, 5G capable, Quad camera system with real-time eye autofocus.",
      "image": "https://example.com/images/xperia1IV.jpg",
      "rating": 4.3
    },
    {
      "id": 7,
      "name": "Oppo Find X6 Pro",
      "brand": "Oppo",
      "price": 949,
      "description": "6.7-inch AMOLED display, MediaTek Dimensity 9000, 5G capable, Triple camera system with AI photography features.",
      "image": "https://example.com/images/findx6pro.jpg",
      "rating": 4.5
    },
    {
      "id": 8,
      "name": "Vivo X90 Pro",
      "brand": "Vivo",
      "price": 899,
      "description": "6.78-inch AMOLED display, MediaTek Dimensity 9200, 5G capable, Triple camera system with Zeiss optics.",
      "image": "https://example.com/images/vivox90pro.jpg",
      "rating": 4.4
    },
    {
      "id": 9,
      "name": "Motorola Edge 40 Pro",
      "brand": "Motorola",
      "price": 799,
      "description": "6.67-inch OLED display, Snapdragon 8 Gen 2, 5G capable, Triple camera system with 50MP main sensor.",
      "image": "https://example.com/images/edge40pro.jpg",
      "rating": 4.2
    },
    {
      "id": 10,
      "name": "Realme GT 2 Pro",
      "brand": "Realme",
      "price": 649,
      "description": "6.7-inch AMOLED display, Snapdragon 8 Gen 1, 5G capable, Dual camera system with ultra-wide-angle lens.",
      "image": "https://example.com/images/realmegt2pro.jpg",
      "rating": 4.1
    }
  ]

  useEffect(() => {
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    setAddItemsNum(totalItems);
  }, [cartItems]);

  const addToCart = (product) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);
    if (existingProduct) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Update product quantity
  const updateQuantity = (index, change) => {
    const newCartItems = [...cartItems];
    newCartItems[index].quantity += change;

    if (newCartItems[index].quantity === 0) {
      removeFromCart(index);
    } else {
      setCartItems(newCartItems);
    }

  };

  // Remove product from cart
  const removeFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    console.log(newCartItems)
    setCartItems(newCartItems);
  };

  // Clear the cart
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="app">
      <nav className='menu'>
        <h1>UseReducer</h1>
        <div className='cart-item'>
          <FaCartPlus />
          <p>{additemsNUm}</p>
        </div>
      </nav>
      <div className='main-container'>
        <ProductList products={products} addToCart={addToCart} />
        <Cart
          cartItems={cartItems}
          updateQuantity={updateQuantity}
          removeFromCart={removeFromCart}
          clearCart={clearCart}
        />
      </div>
     
    </div>
  );
}

export default App
