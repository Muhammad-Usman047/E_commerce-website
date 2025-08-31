import React from 'react';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <section>
          <h3>Shop</h3>
          <ul>
            <li>All Products</li>
            <li>New Arrivals</li>
            <li>Best Sellers</li>
          </ul>
        </section>
        <section>
          <h3>Support</h3>
          <ul>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Returns</li>
          </ul>
        </section>
        <section>
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Privacy Policy</li>
          </ul>
        </section>
      </div>
      <div className='copyright'>
        <p>© {new Date().getFullYear()} Your E-Commerce Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;