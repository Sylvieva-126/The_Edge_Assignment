import Footer from "../Components/Footer";
import "../Styles/about.css";
import Navbar from "../Components/NavBar";

const About = () => {
  return (
    <div className="about-page">
      <Navbar/>
      <section className="about-section">
        <div className="about-text-col">
          <h1>About</h1>
          <p className="about-subheading">Subheading for description or instructions</p>
          <p className="about-body-text">
            Body text for your whole article or post. We'll put in some lorem ipsum to show how a filled-out page might look:
          </p>
          <p className="about-body-text">
            Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate.
          </p>

          <div className="contact-container">
            <h2>Contact me</h2>
            <form>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First name</label>
                  <input type="text" id="firstName" placeholder="Jane" />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last name</label>
                  <input type="text" id="lastName" placeholder="Smitherton" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email" id="email" placeholder="email@janesfakedomain.net" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your message</label>
                <textarea id="message" placeholder="Enter your question or message"></textarea>
              </div>
              <button type="submit" className="submit-btn">Submit</button>
            </form>
          </div>
        </div>

        <div className="about-img-col">
          <img
            src="src\assets\pic.png"
            alt="Person portrait"
            className="about-main-img"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;