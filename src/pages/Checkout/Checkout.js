import React from 'react';
import './Checkout.scss';
import CheckoutCard from './CheckoutCard';
import { useStateValue } from '../../context/StateProvider';
import { Divider } from 'antd';

const Checkout = () => {
  const [{ cart }] = useStateValue();
  console.log(cart);
  const showCartList = (
    <div>
      <div className='d-flex py-4 border-bottom cart-header justify-content-between align-items-center'>
        <div className='text-muted h4'>Products</div>
        <div className='text-muted h4'>Description</div>
        <div className='text-muted h4'>Quantity</div>
        <div className='text-muted h4'>Price</div>
        <div className='text-muted h4'>Remove</div>
      </div>
      {cart?.map(item => (
        <CheckoutCard key={item.id} {...item} />
      ))}
      <Divider orientation='right'>
        <h4 className='text-muted'>Subtotal : $ 124.3</h4>
      </Divider>
    </div>
  );

  return (
    <div className='container'>
      {cart.length === 0 ? (
        <h3 className='display-4 mt-5 text-center'>Cart is Empty</h3>
      ) : (
        showCartList
      )}
    </div>
  );
};

export default Checkout;
