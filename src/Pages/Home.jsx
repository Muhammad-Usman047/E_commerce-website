import { Link } from 'react-router-dom';
import Card from '../Components/Card';
import ProductsData from '../Data/ProductsData.json'
import Productsnav from '../Components/Productsnav';
import { useMemo, useState } from 'react';

const Home = () => {
  const [filteredProducts, setFilteredProducts] = useState(ProductsData.products);

  const filteredBysubCategory = (subCategory) => {
    if (subCategory === 'ALL') {
      setFilteredProducts(ProductsData.products);
    }
    else {
      const filterd = ProductsData.products.filter((product) => product.subcategory === subCategory);
      setFilteredProducts(filterd);
    }
  }

  const renderedCards = useMemo(() => {
    return filteredProducts.slice(0, 10).map((item, index) => (
      <div className="cards-detail" key={index}>
        <Link>
          <Card img={item.image_url} title={item.name} category={item.category} price={item.price} />
        </Link>
      </div>
    ))
  }, [filteredProducts]);

  return (
    <div className="home-page">
      {/* Hero Banner */}
      <section className="hero-banner">
        <div className="hero-content">
          <h1>Summer Sale Up To 50% Off</h1>
          <p>Discover amazing deals on top brands</p>
          <Link to="/products" className="shop-now-btn">Shop Now</Link>
        </div>
      </section>

      <Productsnav ALL="ALL" Kitchen="Kitchen" Smartphones="Smartphones" Shirts="Shirts" Pants="Pants" Cart="🛒" filteredBysubCategory={filteredBysubCategory} />

      <section className="cards">
        {renderedCards}
      </section>
    </div>
  );
};

export default Home;