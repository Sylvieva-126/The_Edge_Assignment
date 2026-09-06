import Footer from '../Components/Footer'
import '../Styles/article.css'
import Navbar from "../Components/NavBar"

const Article = () => {
  return (
    <div className="article-page">
      <Navbar/>
      <section className="hero article-hero">
        <div className="hero-content">
          <h1>Article or post title</h1>
          <p>Subheading that sets up context, shares more info about the author, or generally gets people psyched to keep reading.</p>
        </div>
      </section>
      <section className="content-section article-main-img-section">
        <img
          src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80"
          alt="Article featured image"
          className="article-hero-img"
        />
      </section>
      <section className="content-section article-text-section">
        <div className="article-text-container">
          <p className="lead-text">
            Body text for your whole article or post. We'll put in some lorem ipsum to show how a filled-out page might look:
          </p>
          <p>Excepteur efficient emerging, minim veniam anim aute carefully curated conversation exquisite perfect nostrud nisi intricate.</p>
        </div>
      </section>
      <section className="content-section">
        <div className="grid-2">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80"
              alt="Fresh salad bowl"
              className="card-img wide"
            />
          </div>
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&w=800&q=80"
              alt="Healthy fruit board"
              className="card-img wide"
            />
          </div>
        </div>
      </section>
      <section className="content-section article-text-section pt-none">
        <div className="article-text-container">
          <p>Excepteur efficient emerging, minim veniam anim cloying aute carefully curated gaucho.</p>
        </div>
      </section>
      <section className="content-section">
        <h2>Related articles or posts</h2>
        <div className="grid-3">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=600&q=80"
              alt="Breakfast bowl"
              className="card-img"
            />
            <h3>Title</h3>
            <p className="author-label">Author</p>
          </div>
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=600&q=80"
              alt="Gourmet meal"
              className="card-img"
            />
            <h3>Title</h3>
            <p className="author-label">Author</p>
          </div>
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1495214783159-3503fd1b572d?auto=format&fit=crop&w=600&q=80"
              alt="Avocado toast"
              className="card-img"
            />
            <h3>Title</h3>
            <p className="author-label">Author</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Article;