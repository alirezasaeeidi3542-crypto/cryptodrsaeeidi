import { useState, useEffect } from 'react';
import { Product } from '../../../types';
import { generateMockProducts } from '../../../data/seed';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        const mockProducts = generateMockProducts(50);
        setProducts(mockProducts);
      } catch (e) {
        setError('Failed to fetch products');
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};
