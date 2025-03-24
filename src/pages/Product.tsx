import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { setProducts } from '../features/productSlice';
import { fetchProducts } from '../api/productApi';

const Products = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products, status } = useSelector((state: RootState) => state.product);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        dispatch(setProducts(data));
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    getProducts();
  }, [dispatch]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Failed to load products.</p>;

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.length > 0 ? (
          products.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}
            </li>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </ul>
    </div>
  );
};

export default Products;
