import React from 'react';
import { Rate, Button } from 'antd';
import { useStateValue } from '../../context/StateProvider';
const Product = ({ id, title, img, description, price, rating }) => {
  const [, dispatch] = useStateValue();

  const addToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      item: { id, title, img, description, price, rating },
    });
  };

  return (
    <div className='card mb-5'>
      <img src={img} alt={title} className='cart-img-top img-fluid' />
      <div className='card-body'>
        <div className='d-flex justify-content-between align-items-center'>
          <h3 className='cart-title'>{title}</h3>
          <p className='text-muted'>
            $ <strong>{price}</strong>
          </p>
        </div>
        <p className='cart-text'>{description}</p>
        <div className='d-flex justify-content-between align-items-center'>
          <Rate allowHalf disabled defaultValue={rating} />
          <Button onClick={addToCart} type='default'>
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Product;
