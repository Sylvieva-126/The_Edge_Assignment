// import { useState, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import Logo from "../Components/Logo";
// import "../Styles/emailverification.css";



// const EmailVerificationPage = () => {
//   const [otp, setOtp] = useState(new Array(6).fill(""));
//   const inputRefs = useRef([]);

//   const handleChange = (e, index) => {
//     const value = e.target.value;
//     const digit = value.replace(/[^0-9]/g, ""); 

//     if (!digit) return;

//     const newOtp = [...otp];
//     newOtp[index] = digit[digit.length - 1]; 
//     setOtp(newOtp);

//     if (index < 5) {
//       inputRefs.current[index + 1].focus();
//     }
//   };

//   const handleKeyDown = (e, index) => {
//     if (e.key === "Backspace") {
//       if (!otp[index] && index > 0) {
//         const newOtp = [...otp];
//         newOtp[index - 1] = "";
//         setOtp(newOtp);
//         inputRefs.current[index - 1].focus();
//       } else {
//         const newOtp = [...otp];
//         newOtp[index] = "";
//         setOtp(newOtp);
//       }
//     }
//   };

//   const handlePaste = (e) => {
//     e.preventDefault();
//     const pastedData = e.clipboardData
//       .getData("text")
//       .replace(/[^0-9]/g, "")
//       .slice(0, 6);

//     if (pastedData) {
//       const newOtp = [...otp];
//       pastedData.split("").forEach((char, i) => {
//         newOtp[i] = char;
//       });
//       setOtp(newOtp);

//       const focusIndex = Math.min(pastedData.length, 5);
//       inputRefs.current[focusIndex]?.focus();
//     }
//   };
//     const navigate = useNavigate();
//     const navToVerified = (e) => {
//     e.preventDefault();
//     console.log("Form submitted successfully!");
//     navigate("/verified");
//   };


//   return (
//     <main id="email-page-layout">
//       <Logo />
//       <section id="content-section" className="container-child">
//         <div className="divContent">
//           <header>
//             <div className="header-cnt">
//               <h1 id="welcome-heading" className="msgce">Email Verification</h1>
//               <h4 id="msg" className="msgc">Enter the 6-digit code sent to your email.</h4>
//             </div>
//           </header>
//           <div id="divH">
//             <div className="div-inp-cnt">
//               {otp.map((digit, index) => (
//                 <input
//                   key={index}
//                   type="text"
//                   maxLength="1"
//                   inputMode="numeric"
//                   value={digit}
//                   ref={(el) => (inputRefs.current[index] = el)}
//                   onChange={(e) => handleChange(e, index)}
//                   onKeyDown={(e) => handleKeyDown(e, index)}
//                   onPaste={handlePaste}
//                   required
//                 />
//               ))}
//             </div>
//           </div>
//           <div id="Dmsg">
//             <h4 className="message">Didn't receive the code?<span> Resend </span></h4>
//           </div>
//           <button className="btn-c" onClick={navToVerified}>Verify</button>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default EmailVerificationPage;

import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../Components/Logo";
import "../Styles/emailverification.css";

const EmailVerificationPage = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  // Check if all 6 inputs contain a digit
  const isOtpComplete = otp.every((digit) => digit !== "");

  const handleChange = (e, index) => {
    const value = e.target.value;
    const digit = value.replace(/[^0-9]/g, ""); 

    if (!digit) return;

    const newOtp = [...otp];
    newOtp[index] = digit[digit.length - 1]; 
    setOtp(newOtp);

    if (index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (!otp[index] && index > 0) {
        const newOtp = [...otp];
        newOtp[index - 1] = "";
        setOtp(newOtp);
        inputRefs.current[index - 1].focus();
      } else {
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      }
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData
      .getData("text")
      .replace(/[^0-9]/g, "")
      .slice(0, 6);

    if (pastedData) {
      const newOtp = [...otp];
      pastedData.split("").forEach((char, i) => {
        newOtp[i] = char;
      });
      setOtp(newOtp);

      const focusIndex = Math.min(pastedData.length, 5);
      inputRefs.current[focusIndex]?.focus();
    }
  };

  const navToVerified = (e) => {
    e.preventDefault();
    console.log("Form submitted successfully!");
    navigate("/verified");
  };

  return (
    <main id="email-page-layout">
      <Logo />
      <section id="content-section" className="container-child">
        <div className="divContent">
          <header>
            <div className="header-cnt">
              <h1 id="welcome-heading" className="msgce">Email Verification</h1>
              <h4 id="msg" className="msgc">Enter the 6-digit code sent to your email.</h4>
            </div>
          </header>
          <div id="divH">
            <div className="div-inp-cnt">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  inputMode="numeric"
                  value={digit}
                  ref={(el) => (inputRefs.current[index] = el)}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  onPaste={handlePaste}
                  required
                />
              ))}
            </div>
          </div>
          <div id="Dmsg">
            <h4 className="message">Didn't receive the code?<span> Resend </span></h4>
          </div>
          <button 
            className="btn-c" 
            onClick={navToVerified} 
            disabled={!isOtpComplete}
          >
            Verify
          </button>
        </div>
      </section>
    </main>
  );
};

export default EmailVerificationPage;