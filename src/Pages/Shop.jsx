import Footer from "../Components/Footer";
import "../Styles/shop.css";
import Navbar from "../Components/NavBar";

const Shop = () => {
  return (
    <div className="shop-page">
      <Navbar />
      <section className="hero shop-hero">
        <div className="hero-bg-img-container">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1400&q=80"
            alt="Delicious food spread hero background"
            className="shop-hero-bg"
          />
        </div>
        <div className="hero-content shop-hero-content">
          <h1>Shop title</h1>
          <p>Subheading with description of your shopping site</p>
          <button className="primary-btn">Button</button>
        </div>
      </section>
      <section className="split-section">
        <div className="split-text-col">
          <h2>Heading</h2>
          <p className="section-subtext">A subheading for this section, as long or as short as you like</p>
          <div className="button-group">
            <button className="primary-btn">Button</button>
            <button className="secondary-btn">Secondary button</button>
          </div>
        </div>
        <div className="split-img-col">
          <img
            src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80"
            alt="Healthy colorful salad bowl"
            className="large-card-img"
          />
        </div>
      </section>
      <section className="split-section reverse">
        <div className="split-img-col">
          <img
            src="https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?auto=format&fit=crop&w=800&q=80"
            alt="Gourmet pastry and coffee"
            className="large-card-img"
          />
        </div>
        <div className="split-text-col">
          <h2>Heading</h2>
          <p className="section-subtext">A subheading for this section, as long or as short as you like</p>
          <div className="button-group">
            <button className="primary-btn">Button</button>
            <button className="secondary-btn">Secondary button</button>
          </div>
        </div>
      </section>
      <section className="content-section">
        <h2>Section heading</h2>
        <div className="shop-grid">
          <div className="shop-main-item">
            <img
              src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80"
              alt="Featured gourmet pasta dish"
              className="card-img tall"
            />
            <h3>Featured product</h3>
            <p className="product-desc">Description of featured product.</p>
            <span className="price">$10.99</span>
          </div>
          <div className="shop-side-column">
            <div className="shop-sub-item">
              <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
                alt="Juicy artisan burger"
                className="card-img sm"
              />
              <h3>Product</h3>
              <p className="product-desc">Description of top product.</p>
              <span className="price">$10.99</span>
            </div>
            <div className="shop-sub-item">
              <img
                src="https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=600&q=80"
                alt="Fresh fruit smoothie drink"
                className="card-img sm"
              />
              <h3>Product</h3>
              <p className="product-desc">Description of lower product.</p>
              <span className="price">$10.99</span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Shop;