import React, { useState, useEffect } from "react";

function Donate() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section
            id="donate"
            className="section"
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
            }}
        >
            <h2>Support Our Mission</h2>
            <div className="donate-content">
                <div className="donate-info">
                    <h3>Why Donate?</h3>
                    <p>
                        Your contribution helps us provide quality education to students worldwide.
                        Every donation makes a difference in transforming education through AI technology.
                    </p>
                    <ul className="donation-impact">
                        <li>$50 - Provides AI learning tools for one student</li>
                        <li>$100 - Supports personalized education planning</li>
                        <li>$500 - Funds AI education research and development</li>
                        <li>$1000 - Sponsors comprehensive education programs</li>
                    </ul>
                </div>
                <div className="donate-form">
                    <h3>Make a Donation</h3>
                    <form onSubmit={(e) => { e.preventDefault(); alert('Thank you for your donation!'); }}>
                        <div className="form-group">
                            <label>Select Amount</label>
                            <select>
                                <option value="50">$50</option>
                                <option value="100">$100</option>
                                <option value="500">$500</option>
                                <option value="1000">$1000</option>
                                <option value="other">Other Amount</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Your Email" required />
                        </div>
                        <button type="submit" className="donate-btn">
                            Donate Now
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Donate; 