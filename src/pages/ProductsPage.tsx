import { useEffect, useState } from 'react';
import { fetchProducts, type Product } from '../services/api';
import ProductCard from '../components/ProductCard';

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        setError('Failed to load products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  return (
    <div className="container py-16 animate-fade-in">
      <div className="mb-8">
        <h1 className="text-gradient">Our Products</h1>
        <p className="text-secondary">Explore our premium collection of electronics.</p>
      </div>

      {loading && (
        <div className="text-center py-24">
          <div className="glow-orb" style={{ width: '50px', height: '50px', position: 'relative', margin: '0 auto', top: 'auto', left: 'auto', transform: 'none' }}></div>
          <p className="mt-4 text-secondary">Loading products...</p>
        </div>
      )}

      {error && (
        <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center', borderColor: 'rgba(239, 68, 68, 0.5)' }}>
          <p style={{ color: '#ef4444' }}>{error}</p>
        </div>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
