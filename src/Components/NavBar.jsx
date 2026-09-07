import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <header
      className="navbar"
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "100%",
      }}
    >
      <div className="logo" style={{ marginRight: "3rem", flexShrink: 0 }}>
         <img 
  src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=100&h=100&q=80" 
  alt="Hearty meal icon" 
  style={{ width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover" }}/>

      </div>
      <nav className="nav-links" style={{ flexWrap: "wrap", rowGap: "1rem" }}>
        <Link to="/home">Home</Link>
        <Link to="/article">Article</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/product">Product</Link>
        <Link to="/about">About</Link>
        <button className="nav-btn">Button</button>
      </nav>
    </header>
  );
};

export default Navbar;