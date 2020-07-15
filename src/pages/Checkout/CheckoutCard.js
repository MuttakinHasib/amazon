import React from 'react';
import { Button } from 'antd';
import ButtonGroup from 'antd/lib/button/button-group';
import { MinusOutlined, PlusOutlined, DeleteTwoTone } from '@ant-design/icons';
import { useStateValue } from '../../context/StateProvider';
import { REMOVE_FROM_CART } from '../../context/types';

const CheckoutCard = ({ id, title, img, price, quantity }) => {
  const [{ carts }, dispatch] = useStateValue();
  console.log(carts);
  const removeCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      id,
    });
  };
  return (
    <div>
      <div className='cart-body d-flex pt-5 justify-content-between align-items-center'>
        <div className='cart-item'>
          <img src={img} alt={title} />
        </div>
        <div className='cart-item'>
          <h5 className='mt-3 font-weight-bold'>{title}</h5>
        </div>
        <div className='cart-item cart-quantity'>
          <ButtonGroup>
            <Button>
              <MinusOutlined />
            </Button>
            <Button type='dashed'>{quantity}</Button>
            <Button>
              <PlusOutlined />
            </Button>
          </ButtonGroup>
        </div>
        <div className='cart-item price'>
          <h6>
            $ <strong>{price}</strong>
          </h6>
        </div>
        <button onClick={removeCart} className='cart-item btn remove-item'>
          <DeleteTwoTone twoToneColor='#f36' style={{ fontSize: '30px' }} />
        </button>
      </div>
    </div>
  );
};

export default CheckoutCard;
