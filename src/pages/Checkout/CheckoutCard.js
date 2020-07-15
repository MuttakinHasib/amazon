import React from 'react';
import { Button, Divider } from 'antd';
import ButtonGroup from 'antd/lib/button/button-group';
import { MinusOutlined, PlusOutlined, DeleteTwoTone } from '@ant-design/icons';

const CheckoutCard = ({ id, title, img, description, price, rating }) => {
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
            <Button type='dashed'>1</Button>
            <Button>
              <PlusOutlined />
            </Button>
          </ButtonGroup>
        </div>
        <div className='cart-item price'>
          <h4>
            $ <strong>{price}</strong>
          </h4>
        </div>
        <button className='cart-item btn remove-item'>
          <DeleteTwoTone twoToneColor='#f36' style={{ fontSize: '30px' }} />
        </button>
      </div>
    </div>
  );
};

export default CheckoutCard;
