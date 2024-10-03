import React from 'react';

const ProductList = ({ products, addToCart }) => {
  return (
    <div className='products'>
    <h1>Product List</h1>
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
    
    </div>
    
  );
};

export default ProductList;
