// We use a relative path here so that in production, CloudFront routes /api to the ALB
// During local development, Vite will proxy /api to the local .NET server
const API_BASE = '/api';

export interface Category {
  id: number;
  name: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: Category;
}

export const fetchProducts = async (page = 1, limit = 20): Promise<Product[]> => {
  try {
    const response = await fetch(`${API_BASE}/products?pageNumber=${page}&pageSize=${limit}`);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    return response.json();
  } catch (error) {
    console.error('API Error:', error);
    // Return mock data if API is down for UI demonstration purposes
    return [
      {
        id: 1,
        name: "Quantum X Pro Laptop",
        description: "Ultra-thin, powerful laptop with M2 chip and 32GB RAM.",
        price: 1899.99,
        imageUrl: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=1000",
        category: { id: 1, name: "Laptops" }
      },
      {
        id: 2,
        name: "Neon Mechanical Keyboard",
        description: "Wireless mechanical keyboard with custom RGB lighting.",
        price: 149.99,
        imageUrl: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=1000",
        category: { id: 2, name: "Accessories" }
      },
      {
        id: 3,
        name: "Aura Noise-Cancelling Headphones",
        description: "Premium over-ear headphones with active noise cancellation.",
        price: 299.99,
        imageUrl: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=1000",
        category: { id: 3, name: "Audio" }
      }
    ];
  }
};
