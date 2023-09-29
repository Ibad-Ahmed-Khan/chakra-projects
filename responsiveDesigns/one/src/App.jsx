import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { About } from "./pages/about/About";
import { Blog } from "./pages/blog/Blog";
import { Navbar } from "./components/navbar/Navbar";
import { Classes } from "./pages/classes/Classes";
import { Contact } from "./pages/contact/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <h1>Belle & Carrie</h1>
        <h3>REHABILITATION YOGA</h3>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Classes" element={<Classes />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Blog" element={<Blog />} />
        </Routes>
        <p className="footer-one">123 St. City Location, Country | 987654321</p>
        <p className="footer-two">
          © 2023 by Belle & Carrie Rehabilitation Yoga. All rights reserved.
        </p>
      </Router>
    </div>
  );
}

export default App;
