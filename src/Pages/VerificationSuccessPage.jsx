import Logo from "../Components/Logo";
import { useNavigate } from "react-router-dom";
import "../Styles/verificationsuccess.css";

const VerificationSuccess = () => {
  const navigate = useNavigate();

  return (
     <main id="containerV">
        <Logo/>
        <section id="content-sectionV" className="container-childV">
            <div className= "divContentV">
                <header>
                    <div className="header-cntV">
                    <h1 id="welcome-headingV" className="msgceV">Verification Successful<span className="success-icon" aria-label="Success">&#10003;</span></h1>
                    </div>
                </header>
                <button className="btn-cV" onClick={() => navigate("/signin")}>
                  Continue to Login
                </button>
        </div>
        </section>
        </main>
  )
}

export default VerificationSuccess