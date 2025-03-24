import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <div style={styles.appContainer}>
      <Sidebar />

      <div style={styles.mainContent}>
        <Navbar />
        <div id="page-content" style={styles.pageContent}>
          <AppRouter />
        </div>
      </div>
    </div>
  );
}

const styles = {
  appContainer: {
    display: "flex",
    height: "93vh",
  },
  mainContent: {
    flex: 1,
    marginLeft: "160px", // Offset for sidebar width
    display: "flex",
    flexDirection: "column" as "column",
  },
  pageContent: {
    flex: 1,
    padding: "20px",
    marginTop: "3px", // Offset for navbar height
    overflowY: "auto",
  },
};

export default App;
