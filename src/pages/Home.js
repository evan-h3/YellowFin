import React from "react";

function Home() {
    return (
        <section
            id="home"
            className="hero"
            style={{
                backgroundImage: `url('/images/ai-education.jpg')`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                backgroundSize: 'cover'
            }}
        >
            <div className="hero-content animated fadeIn">
                <h1>Welcome to JM Foundation</h1>
                <p>Innovating Education Through AI</p>
                <a href="/about" className="cta-btn">
                    Learn More
                </a>
            </div>
            <div className="hero-overlay"></div>
        </section>
    );
}

export default Home; 