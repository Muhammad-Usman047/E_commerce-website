import Card from '../Components/Card';
import ProductsData from '../Data/ProductsData.json'
import { useMemo, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import CartModal from '../Components/CartModal';
import { CartContext } from '../Context/CartContext';

const Products = () => {

  const [visibleCount, setVisibleCount] = useState(12);
  const allProducts = useMemo(() => ProductsData.products, []);
  const { cartItems } = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);

  const visibleProducts = useMemo(() => {
    return allProducts.slice(0, visibleCount);
  }, [allProducts, visibleCount]);

  const renderedCards = useMemo(() => {
    return visibleProducts.map((product, index) => (
      <div className='cards-detail' key={index}>
        <Link>
          <Card
            key={index}
            img={product.image_url}
            title={product.name}
            category={product.category}
            price={product.price}
          />
        </Link>
      </div>
    ))
  }, [visibleProducts]);

  return (
    <div className="products">
      <div className="products-main">
        <div className='heads'>
          <h1>Products</h1>
          <p>Explore our wide range of products</p>
          <button className='cart-button btncart' onClick={() => setShowCart(!showCart)}> 🛒 ({cartItems.length}) </button>
        </div>
        <section className="products-content">
          <div className="cards">
            {renderedCards}
          </div>
        </section>

        {visibleCount < allProducts.length && (
          <div style={{ textAlign: 'right', margin: '20px 0', paddingRight: '20px' }}>
            <button
              style={{
                backgroundColor: '#e7c000', color: 'black', border: 'none', padding: '10px 20px', 
                borderRadius: '5px',
                cursor: 'pointer'
              }}
              onClick={() => { setVisibleCount(prev => prev + 12) }}
            >
              more....
            </button>
          </div>
        )}
      </div>
      <CartModal showCart={showCart} setShowCart={setShowCart} />
    </div>
  );
};

export default Products;