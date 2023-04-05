import React from 'react';
import Button from '@material-ui/core/Button';

const Product = ({ id, name, price, imageUrl, onAddToCart }) => {
  const handleClick = () => {
    onAddToCart({ id, name, price });
  };

  return (
    <div className="product">
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <p>${price.toFixed(2)}</p>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Add to Cart
      </Button>
    </div>
  );
};

export default Product;
