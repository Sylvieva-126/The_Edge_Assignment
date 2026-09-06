import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Pages/HomePage"
import Signup from "./Pages/SignupPage"
import Email from "./Pages/EmailVerificationPage"
import Verified from "./Pages/VerificationSuccessPage"
import Sign from "./Pages/SigninPage"

import LandingPage from "./Pages/LandingPage";
import About from "./Pages/About";
import Article from "./Pages/Article";
import Shop from "./Pages/Shop";
import ProductDetail from "./Pages/ProductDetail";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/email" element={<Email/>}/>
        <Route path="/verified" element={<Verified/>}/>
        <Route path="/signin" element={<Sign/>}/>

        <Route path="/about" element={<About />} />
        <Route path="/article" element={<Article />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product" element={<ProductDetail />} />
        <Route path="/home" element={<LandingPage />} />
        
      </Routes>
    </Router>
  )
}

export default App