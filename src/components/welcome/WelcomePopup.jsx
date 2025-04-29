import React, { useState } from 'react';
import './WelcomePopup.css';

const WelcomePopup = ({ onClose, onNameSubmit }) => {
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onNameSubmit(name || 'User');
        onClose();
    };

    return (
        <div className="welcome-overlay">
            <div className="welcome-popup">
                <div className="welcome-header">
                    <h2>Welcome to Bogus AI !! </h2>
                    <div className="welcome-emoji">✨</div>
                </div>
                <div className="welcome-content">
                    <p className="welcome-text">
                        You might be wondering, why the name "Bogus AI"?<br />
                        Well, because it's not a real AI. I didn't train it, I didn't feed it data — I just gave it a Gemini API key and said, "Go act smart!" 😎<br />
                        So yeah... it's a little bogus, but it gets the job done!
                    </p>
                    <form onSubmit={handleSubmit} className="welcome-form">
                        <div className="input-container">
                            <input
                                type="text"
                                placeholder="Enter your name (optional)"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="welcome-input"
                            />
                            <span className="input-icon">👤</span>
                        </div>
                        <button type="submit" className="welcome-button">
                            Let's Chat! 🚀
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default WelcomePopup; 