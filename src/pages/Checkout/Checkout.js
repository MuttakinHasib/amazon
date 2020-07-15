import React from 'react';
import './Checkout.scss';
import CheckoutCard from './CheckoutCard';
import { useStateValue } from '../../context/StateProvider';
import { Divider } from 'antd';

const Checkout = () => {
  const [{ carts }] = useStateValue();

  const total = carts.reduce((current, carts) => current + carts.price, 0);

  const showCartList = (
    <div>
      <div className='d-flex py-4 border-bottom cart-header justify-content-between align-items-center'>
        <div className='text-muted h4'>Products</div>
        <div className='text-muted h4'>Description</div>
        <div className='text-muted h4'>Quantity</div>
        <div className='text-muted h4'>Price</div>
        <div className='text-muted h4'>Remove</div>
      </div>
      {carts?.map(item => (
        <CheckoutCard key={item.id} {...item} />
      ))}
      <Divider orientation='right'>
        <h4 className='text-dark'>Subtotal : $ {total}</h4>
      </Divider>
    </div>
  );

  return (
    <div className='container'>
      {carts?.length === 0 ? (
        <div>
          <h3 className='display-1 mt-5 text-center'>Cart is Empty</h3>
          <p className='lead text-center'>
            You have no items in your cart. To buy one or more item, Click "Add
            to Cart" next to the item .
          </p>
        </div>
      ) : (
        showCartList
      )}
    </div>
  );
};

export default Checkout;
