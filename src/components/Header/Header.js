import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingOutlined } from '@ant-design/icons';
import amazonLogo from '../../assets/images/amazon.png';
import './Header.scss';
import { Badge } from 'antd';
import { useStateValue } from '../../context/StateProvider';
const Header = () => {
  const [{ cart }] = useStateValue();
console.log(cart);
  return (
    <header className='sticky-top'>
      <nav className='navbar navbar-expand-xl navbar-light bg-light'>
        <div className='container-fluid'>
          <Link to='/' className='navbar-brand'>
            <img
              height='30'
              className='d-inline-block align-top'
              src={amazonLogo}
              alt='amazon'
            />
          </Link>
          <button
            className='navbar-toggler border-0'
            type='button'
            data-toggle='collapse'
            data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <form className='d-md-flex flex-grow-1 mx-5 my-3'>
              <input
                className='form-control mr-sm-2'
                type='search'
                placeholder='Search here'
                aria-label='Search'
              />
              <button
                className='btn btn-outline-dark my-2 my-md-0'
                type='submit'
              >
                Search
              </button>
            </form>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item mx-1'>
                <Link to='/' className='nav-link'>
                  <div className='d-flex flex-column'>
                    <span>Hello</span>
                    <span className='font-weight-bold text-dark'>Sign in</span>
                  </div>
                </Link>
              </li>
              <li className='nav-item mx-1'>
                <Link to='/' className='nav-link'>
                  <div className='d-flex flex-column'>
                    <span>Returns</span>
                    <span className='font-weight-bold text-dark'>& Orders</span>
                  </div>
                </Link>
              </li>
              <li className='nav-item mx-1'>
                <Link to='/' className='nav-link'>
                  <div className='d-flex flex-column'>
                    <span>Your</span>
                    <span className='font-weight-bold text-dark'>Prime</span>
                  </div>
                </Link>
              </li>
              <li className='nav-item mx-1'>
                <Link to='/checkout' className='nav-link'>
                  {/* <div className='cart-icon d-inline-block'>
                    <ShoppingOutlined style={{ fontSize: '50px' }} />
                    <span className='font-weight-bold text-dark cart-item-count'>
                      0
                    </span>
                  </div> */}
                  <Badge count={cart?.length}>
                    <ShoppingOutlined style={{ fontSize: '35px' }} />
                  </Badge>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
