import { useState } from "react";
import Logo from "../Components/Logo";
import { useNavigate } from "react-router-dom";
import "../Styles/signup.css";

const countryCodes = [
  "+1", "+7", "+20", "+27", "+30", "+31", "+32", "+33", "+34", "+36", "+39", "+40", "+41", "+43", "+44", "+45", "+46", "+47", "+48", "+49", "+51", "+52", "+53", "+54", "+55", "+56", "+57", "+58", "+60", "+61", "+62", "+63", "+64", "+65", "+66", "+81", "+82", "+84", "+86", "+90", "+91", "+92", "+93", "+94", "+95", "+98", "+212", "+213", "+216", "+218", "+220", "+221", "+222", "+223", "+224", "+225", "+226", "+227", "+228", "+229", "+230", "+231", "+232", "+233", "+234", "+235", "+236", "+237", "+238", "+239", "+240", "+241", "+242", "+243", "+244", "+245", "+246", "+248", "+249", "+250", "+251", "+252", "+253", "+254", "+255", "+256", "+257", "+258", "+260", "+261", "+262", "+263", "+264", "+265", "+266", "+267", "+268", "+269", "+290", "+291", "+297", "+298", "+299", "+350", "+351", "+352", "+353", "+354", "+355", "+356", "+357", "+358", "+359", "+370", "+371", "+372", "+373", "+374", "+375", "+376", "+377", "+378", "+380", "+381", "+382", "+385", "+386", "+387", "+389", "+420", "+421", "+423", "+500", "+501", "+502", "+503", "+504", "+505", "+506", "+507", "+508", "+509", "+590", "+591", "+592", "+593", "+594", "+595", "+596", "+597", "+598", "+599", "+670", "+672", "+673", "+674", "+675", "+676", "+677", "+678", "+679", "+680", "+681", "+682", "+683", "+685", "+686", "+687", "+688", "+689", "+690", "+691", "+692", "+850", "+852", "+853", "+855", "+856", "+880", "+886", "+960", "+961", "+962", "+963", "+964", "+965", "+966", "+967", "+968", "+970", "+971", "+972", "+973", "+974", "+975", "+976", "+977", "+992", "+993", "+994", "+995", "+996", "+998"
];

const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d])\S{8,}$/;
const credentialsStorageKey = "signupCredentials";

const SignupPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    email: "",
    countryCode: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreedToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const nextValue = name === "phone" ? value.replace(/\D/g, "") : value;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : nextValue,
    }));
  };

  const passwordsMatch = 
    formData.password !== "" && formData.password === formData.confirmPassword;
  const passwordIsValid = passwordPattern.test(formData.password);

  const isFormValid =
    formData.lastName.trim() !== "" &&
    formData.firstName.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.countryCode !== "" &&
    formData.phone.trim() !== "" &&
    passwordIsValid &&
    passwordsMatch &&
    formData.agreedToTerms;

  const navToSignup = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    localStorage.setItem(credentialsStorageKey, JSON.stringify({
      email: formData.email.trim().toLowerCase(),
      password: formData.password,
    }));
    navigate("/email");
  };

  return (
    <main id="signup-page-layout">
      <Logo />
      <section id="signup-main-section" className="container-child">
        <header>
          <div className="header-cnt">
            <h1 id="welcome-heading" className="message">Create an Account</h1>
            <h4 id="msg" className="message">Please enter your details to get started</h4>
          </div>
        </header>

        <div className="form-wrapper">
          <form className="signup-form" onSubmit={navToSignup}>
            <div className="form-row-names">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                className="input-field"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              <label className="label-offset">First Name</label>
              <input
                type="text"
                name="firstName"
                className="input-field"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row-email">
              <label>Email</label>
              <input
                type="email"
                name="email"
                className="input-field"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row-phone">
              <label>Phone Number</label>
              <div className="input-group">
                <select
                  className="country-select"
                  id="country-code"
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Code
                  </option>
                  {countryCodes.map((code) => (
                    <option key={code} value={code}>
                      {code}
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  name="phone"
                  className="input-field"
                  value={formData.phone}
                  onChange={handleChange}
                  inputMode="numeric"
                  pattern="[0-9]+"
                  title="Phone number must contain numbers only."
                  required
                />
              </div>
            </div>

            <div className="form-row-passwords">
              <label>Password</label>
              <input
                type="password"
                name="password"
                className="input-field"
                value={formData.password}
                onChange={handleChange}
                minLength={8}
                pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d])\S{8,}"
                title="Use at least 8 characters, including uppercase, lowercase, number, and special character."
                required
              />
              <label className="label-offset">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                className="input-field"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            {formData.password && !passwordIsValid && (
              <p style={{ color: "#FF6B6B", fontSize: "1rem", marginTop: "2rem", marginBottom: "1rem" }}>
                Password must be at least 8 characters and include uppercase, lowercase, a number, and a special character.
              </p>
            )}

            {formData.confirmPassword && !passwordsMatch && (
              <p style={{ color: "#FF6B6B", fontSize: "1rem", marginTop: "2rem", marginBottom: "1rem" }}>
                Passwords do not match
              </p>
            )}

            <div className="form-row-terms">
              <input
                type="checkbox"
                name="agreedToTerms"
                checked={formData.agreedToTerms}
                onChange={handleChange}
                required
              />
              <p>I agree to the Terms of Service & Privacy Policy</p>
            </div>

            <button type="submit" className="submit-btn" disabled={!isFormValid}>
              Sign Up
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default SignupPage;