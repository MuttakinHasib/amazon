import React from 'react';
import banner from '../../assets/images/banner.jpg';
import Product from '../../components/Product/Product';
import amd from '../../assets/images/ryzen7.jpg';
const Home = () => {
  const products = [
    {
      id: '1',
      title: 'Ryzen 7',
      img: amd,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,sapiente culpa mollitia distinctio',
      rating: 4.5,
      price: '25.5',
    },
    {
      id: '2',
      title: 'Intel',
      img: amd,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,sapiente culpa mollitia distinctio',
      rating: 3.9,
      price: '99.5',
    },
    {
      id: '3',
      title: 'Zotac',
      img: amd,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,sapiente culpa mollitia distinctio',
      rating: 4.4,
      price: '80.5',
    },
  ];
  return (
    <div className='container'>
      <img src={banner} alt='banner' className='d-block m-auto img-fluid' />
      <div className='row'>
        {products.map(item => (
          <div key={item?.id} className='col-sm-6 col-md-6 col-lg-4 my-3'>
            <Product {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
