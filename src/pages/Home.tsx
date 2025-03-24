import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to PitPos</h1>
      <Link to="/products">
        <button style={{ padding: '10px 20px', marginTop: '20px', cursor: 'pointer' }}>
          View Products
        </button>
      </Link>
    </div>
  );
};

export default Home;
