import "bootstrap/dist/css/bootstrap.min.css";
//import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./components/layout/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
