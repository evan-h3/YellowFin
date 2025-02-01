import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Mission from "./pages/Mission";
import Services from "./pages/Services";
import AIAgents from "./pages/AIAgents";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
    return (
        <Router>
            <div className="app">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/mission" element={<Mission />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/ai-agents" element={<AIAgents />} />
                        <Route path="/donate" element={<Donate />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App; 