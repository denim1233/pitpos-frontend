import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user session (Example: Remove token from localStorage)
    localStorage.removeItem("token"); // Adjust based on your auth logic
    navigate("/login"); // Redirect to login page
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}></div>
      <ul style={styles.navLinks}>
        <li>
          <button onClick={handleLogout} style={styles.logoutButton}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    background: "#BA8D87",
    color: "#fff",
    position: "fixed" as "fixed",
    top: 0,
    width: "96%",
    zIndex: 1000,
    height: "1.5em",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  navLinks: {
    listStyleType: "none" as "none",
    display: "flex",
    gap: "15px",
    padding: 0,
  },
  logoutButton: {
    background: "red",
    color: "#fff",
    border: "none",
    padding: "8px 12px",
    cursor: "pointer",
    fontSize: "16px",
    borderRadius: "5px",
  },
};

export default Navbar;
