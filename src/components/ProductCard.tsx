import { ShoppingCart } from 'lucide-react';
import type { Product } from '../services/api';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="product-card glass-panel">
      <div className="product-image-container">
        <img src={product.imageUrl} alt={product.name} className="product-image" />
        <div className="product-category">{product.category.name}</div>
      </div>
      
      <div className="product-info">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-desc">{product.description}</p>
        
        <div className="product-footer">
          <span className="product-price">${product.price.toFixed(2)}</span>
          <button className="btn btn-primary btn-icon">
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
