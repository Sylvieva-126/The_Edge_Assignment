import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/signin.css";
import Logo from "../Components/Logo";
import { credentialsStorageKey, hashValue, normalizeEmail } from "../utils/credentials";

const SigninPage = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
    setErrorMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const storedCredentials = localStorage.getItem(credentialsStorageKey);
    if (!storedCredentials) {
      setErrorMessage("No account found. Please sign up first.");
      return;
    }

    let savedAccount;
    try {
      savedAccount = JSON.parse(storedCredentials);
    } catch {
      setErrorMessage("Saved account data is invalid. Please sign up again.");
      return;
    }

    if (!savedAccount.emailHash || !savedAccount.passwordHash) {
      setErrorMessage("Please sign up again to update your saved account securely.");
      return;
    }

    const emailHash = await hashValue(normalizeEmail(credentials.email));
    const passwordHash = await hashValue(credentials.password);
    const emailMatches = savedAccount.emailHash === emailHash;
    const passwordMatches = savedAccount.passwordHash === passwordHash;

    if (!emailMatches || !passwordMatches) {
      setErrorMessage("Incorrect email or password.");
      return;
    }

    setErrorMessage("");

    const selectedRole = (() => {
      try {
        return JSON.parse(localStorage.getItem("selectedRole"));
      } catch {
        return null;
      }
    })();

    navigate(selectedRole === "tutor" ? "/onboarding-1" : "/home");
  };

  return (
    <main id="signin-page-layout">
      <Logo />
      <section id="signin-main-section" className="signin-section-child">
        <header className="signin-header">
          <div className="signin-header-content">
            <h1 id="signin-heading" className="signin-message">Welcome Back</h1>
            <h4 id="signin-subheading" className="signin-message">Please enter your details to sign in</h4>
          </div>
        </header>
        
        <div className="signin-form-container">
          <form className="signin-form-element" onSubmit={handleSubmit}>
            
            <div className="signin-row-email">   
              <label>Email</label>
              <input
                type="email"
                name="email"
                className="signin-input-field"
                value={credentials.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="signin-row-password">    
              <label>Password</label>
              <div className="signin-input-group">
                <input
                  type="password"
                  name="password"
                  className="signin-input-field"
                  value={credentials.password}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>   

            {errorMessage && (
              <p className="signin-error" role="alert">{errorMessage}</p>
            )}
            
            <div className="signin-row-options">    
              <p>Forgot Password? <a href="#">Reset</a></p>
            </div>
            
            <button type="submit" className="signin-submit-btn">Sign In</button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default SigninPage;