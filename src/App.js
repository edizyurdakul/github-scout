import { Route, Routes } from "react-router-dom";
import { GithubProvider } from "./context/github/GithubContext";
import { Home, About, NotFound } from "./pages";

function App() {
  return (
    <GithubProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </GithubProvider>
  );
}

export default App;
