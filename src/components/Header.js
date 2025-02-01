import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
    const location = useLocation();

    return (
        <header className="header animated bounceInDown">
            <div className="logo">JM Foundation</div>
            <nav className="nav">
                <ul>
                    <li>
                        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link to="/mission" className={location.pathname === "/mission" ? "active" : ""}>
                            Mission
                        </Link>
                    </li>
                    <li>
                        <Link to="/services" className={location.pathname === "/services" ? "active" : ""}>
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link to="/ai-agents" className={location.pathname === "/ai-agents" ? "active" : ""}>
                            AI Agents
                        </Link>
                    </li>
                    <li>
                        <Link to="/donate" className={location.pathname === "/donate" ? "active" : ""}>
                            Donate
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header; 