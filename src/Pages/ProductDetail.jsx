import Footer from "../Components/Footer";
import "../Styles/productDetail.css";
import Navbar from "../Components/NavBar";

const ProductDetail = () => {
  return (
    <div className="product-page">
      <Navbar />
      
      <section className="content-section product-hero-section">
        <div className="product-hero-grid">
          <div className="product-img-col">
            <img
              src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1000&q=80"
              alt="Gourmet hearty meal"
              className="product-main-img"
            />
          </div>
          <div className="product-info-col">
            <h1>Product name</h1>
            <p className="product-subheading">Subheading</p>
            <div className="product-price">$10.99</div>
            <p className="product-description">
              Body text for describing what this product is and why this product is simply a must-buy.
            </p>
            <button className="primary-btn full-btn">Add to cart</button>
            <p className="product-fine-print">Text box for additional details or fine print</p>
          </div>
        </div>
      </section>
      
      <section className="content-section">
        <h2>Related products</h2>
        <div className="grid-3">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
              alt="Juicy burger"
              className="card-img"
            />
            <h3>Product</h3>
            <p>Description of first product</p>
            <div className="card-price">$10.99</div>
          </div>
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80"
              alt="Healthy salad bowl"
              className="card-img"
            />
            <h3>Product</h3>
            <p>Description of second product</p>
            <div className="card-price">$10.99</div>
          </div>
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80"
              alt="Fresh pizza slice"
              className="card-img"
            />
            <h3>Product</h3>
            <p>Description of third product</p>
            <div className="card-price">$10.99</div>
          </div>
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=600&q=80"
              alt="Delicious pasta dish"
              className="card-img"
            />
            <h3>Product</h3>
            <p>Description of fourth product</p>
            <div className="card-price">$10.99</div>
          </div>
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=600&q=80"
              alt="Artisanal baked bread"
              className="card-img"
            />
            <h3>Product</h3>
            <p>Description of fifth product</p>
            <div className="card-price">$10.99</div>
          </div>
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80"
              alt="Healthy meal bowl"
              className="card-img"
            />
            <h3>Product</h3>
            <p>Description of sixth product</p>
            <div className="card-price">$10.99</div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;