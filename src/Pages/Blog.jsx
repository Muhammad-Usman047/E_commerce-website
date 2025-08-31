import React, { useState } from 'react';
import ProductsData from '../Data/ProductsData.json';

const Blog = () => {
  const [visibleIndex, setVisibleIndex] = useState(null); 

  const toggleDescription = (index) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  return (
    <div className='blog'>
      <div className='blogs-container'>
        <h1>Our Latest Blog Posts</h1>
        {ProductsData.products.slice(0, 10).map((product, index) => (
          <div className='blog-data' key={index} style={{ marginBottom: '20px' }}>
            <div>
              <img
                src={product.image_url}
                alt=""
                style={{ objectFit: 'cover', height: '150px', width: '200px', marginTop: '15px' }}
              />
            </div>
            <div className='blog-details'>
              <h4>{product.name}</h4>
              <h4>{product.category}</h4>
              <h5>${product.price}</h5>
              <p>{product.subcategory}</p>
              <p>{product.brand}</p>
              {visibleIndex === index && <p>{product.description}</p>}
              <button className='blogbutton' onClick={() => toggleDescription(index)}>
                {visibleIndex === index ? 'Hide' : 'Read more'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
