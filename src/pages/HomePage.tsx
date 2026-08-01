import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Shield, Zap } from 'lucide-react';
import './HomePage.css';

export default function HomePage() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content animate-fade-in">
            <h1 className="hero-title">
              Next-Gen <span className="text-gradient">Electronics</span> for the Modern World
            </h1>
            <p className="hero-subtitle">
              Discover cutting-edge technology designed to elevate your everyday experience. From ultra-thin laptops to immersive audio, we have it all.
            </p>
            <div className="hero-actions">
              <Link to="/products" className="btn btn-primary">
                Shop Now <ArrowRight size={18} />
              </Link>
              <button className="btn btn-outline">
                Talk to AI Assistant
              </button>
            </div>
          </div>
          
          <div className="hero-image-wrapper animate-fade-in stagger-2">
            <div className="glow-orb"></div>
            <img 
              src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800" 
              alt="Retro modern gaming setup" 
              className="hero-image glass-panel"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features bg-secondary py-24">
        <div className="container">
          <div className="grid grid-cols-3">
            <div className="feature-card glass-panel text-center">
              <div className="feature-icon"><Zap size={32} /></div>
              <h3>Lightning Fast</h3>
              <p>Experience the latest processors and instantaneous load times.</p>
            </div>
            <div className="feature-card glass-panel text-center">
              <div className="feature-icon"><Shield size={32} /></div>
              <h3>Secure Checkout</h3>
              <p>Your data is protected with enterprise-grade encryption.</p>
            </div>
            <div className="feature-card glass-panel text-center">
              <div className="feature-icon"><Cpu size={32} /></div>
              <h3>AI Powered</h3>
              <p>Our intelligent chatbot helps you find exactly what you need.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
