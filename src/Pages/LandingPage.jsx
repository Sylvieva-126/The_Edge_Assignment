import Navbar from "../Components/NavBar"; 
import Footer from "../Components/Footer";
import "../Styles/landingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navbar />
      
      <section className="hero">
        <div className="hero-content">
          <h1>Landing page title</h1>
          <p>Subheading that sets up context, shares more info about the website, or generally gets people psyched to keep scrolling.</p>
          <button className="primary-btn">Button</button>
        </div>
      </section>
      
      <section className="content-section">
        <h2>Section heading</h2>
        <div className="grid-3">
          <div className="card">
            <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80" alt="Plated dish" className="card-img" />
            <h3>Subheading</h3>
            <p>Body text for whatever you'd like to add more to the subheading.</p>
          </div>
          <div className="card">
            <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80" alt="Healthy salad" className="card-img" />
            <h3>Subheading</h3>
            <p>Body text for whatever you'd like to expand on the main point.</p>
          </div>
          <div className="card">
            <img src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=600&q=80" alt="Pasta bowl" className="card-img" />
            <h3>Subheading</h3>
            <p>Body text for whatever you'd like to share more.</p>
          </div>
        </div>
      </section>

      <section className="split-section">
        <div className="split-text-col">
          <h2>Section heading</h2>
          <div className="split-item">
            <h3>Subheading</h3>
            <p>Body text for whatever you'd like to expand on the main point.</p>
          </div>
          <div className="split-item">
            <h3>Subheading</h3>
            <p>Body text for whatever you'd like to say.</p>
          </div>
        </div>
        <div className="split-img-col">
          <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80" alt="Restaurant dining atmosphere" className="large-card-img" />
        </div>
      </section>

      <section className="content-section">
        <h2>Section heading</h2>
        <div className="grid-2">
          <div className="card">
            <img src="https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80" alt="Artisanal bread" className="card-img wide" />
            <h3>Subheading</h3>
            <p>Body text for whatever you'd like to add more to the subheading.</p>
          </div>
          <div className="card">
            <img src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=800&q=80" alt="Pastry spread" className="card-img wide" />
            <h3>Subheading</h3>
            <p>Body text for whatever you'd like to expand on the main point.</p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h2>Section heading</h2>
        <div className="grid-3">
          <div className="testimonial-card">
            <p className="quote">"A terrific piece of praise"</p>
            <div className="author">
              <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80" alt="Avatar 1" className="avatar" />
              <div className="author-info">
                <span className="name">Name</span>
                <span className="handle">@handle</span>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <p className="quote">"A fantastic bit of feedback"</p>
            <div className="author">
              <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=100&q=80" alt="Avatar 2" className="avatar" />
              <div className="author-info">
                <span className="name">Name</span>
                <span className="handle">@handle</span>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <p className="quote">"A genuinely glowing review"</p>
            <div className="author">
              <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80" alt="Avatar 3" className="avatar" />
              <div className="author-info">
                <span className="name">Name</span>
                <span className="handle">@handle</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section table-section">
        <div className="table-header-row">
          <h2>Section heading</h2>
          <div className="table-actions">
            <button className="primary-btn sm">Button</button>
            <button className="secondary-btn sm">Secondary button</button>
          </div>
        </div>
        <div className="table-container">
          <div className="table-row head">
            <span>Site name</span>
            <span>Yes</span>
            <span>Yes</span>
            <span>Yes</span>
          </div>
          <div className="table-row">
            <span></span>
            <span>Yes</span>
            <span>Yes</span>
            <span>Yes</span>
          </div>
          <div className="table-row">
            <span></span>
            <span>Yes</span>
            <span>Yes</span>
            <span>Yes</span>
          </div>
          <div className="table-row">
            <span></span>
            <span>Yes</span>
            <span>Yes</span>
            <span>Yes</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;