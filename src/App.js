import { BrowserRouter as Router, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";

function App() {
  return (
    <Router>
      <Layout />
      {/* <Navbar />
      <main></main>
      <Footer /> */}
    </Router>
  );
}

export default App;
