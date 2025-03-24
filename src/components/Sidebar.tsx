import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside style={styles.sidebar}>
      <h2 style={styles.title}>PitPos</h2>
      <ul style={styles.menu}>
        <li style={styles.menuItem}>
          <Link to="/" style={styles.link}>🏠 Home</Link>
        </li>
        <li style={styles.menuItem}>
          <Link to="/products" style={styles.link}>📦 Products</Link>
        </li>
        <li style={styles.menuItem}>
          <Link to="/login" style={styles.link}>🔑 Login</Link>
        </li>
      </ul>
    </aside>
  );
};

const styles = {
  sidebar: {
    width: '10em',
    height: '100vh',
    background: '#BA8D87',
    color: '#fff',
    padding: '20px',
    position: 'fixed' as 'fixed',
    top: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
  },
  title: {
    marginBottom: '20px',
  },
  menu: {
    listStyleType: 'none' as 'none',
    padding: 0,
    width: '100%',
  },
  menuItem: {
    padding: '10px 0',
  },
  link: {
    color: '#fff',
    textDecoration: 'none' as 'none',
    fontSize: '18px',
    display: 'block',
    textAlign: 'center' as 'center',
    padding: '10px 15px',
    borderRadius: '5px',
    transition: 'background 0.3s',
  },
};

export default Sidebar;
