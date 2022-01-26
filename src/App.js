import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <main></main>
    </Router>
  );
}

export default App;
