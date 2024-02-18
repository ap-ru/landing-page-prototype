import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { About, Market, Home, Demo, UserTypeSelection, Consumer, Affiliate, Seller } from "./components/pages";

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/market" element={<Market />} />
        <Route path="/usertypeselection" element={<UserTypeSelection />} />
        <Route path="/consumer" element={<Consumer />} />
        <Route path="/seller" element={<Seller />} />
        <Route path="/affiliate" element={<Affiliate />} />
      </Routes>
    </div>
  );
};

export default App;
