import { Link } from 'react-router-dom';
import { ShoppingCart, Bot } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar glass-panel">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo text-gradient">
          ElectroSync
        </Link>
        
        <div className="navbar-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/products" className="nav-link">Products</Link>
        </div>

        <div className="navbar-actions">
          <button className="icon-btn">
            <ShoppingCart size={20} />
          </button>
          <button className="btn btn-primary btn-sm">
            <Bot size={18} />
            <span>AI Assistant</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
