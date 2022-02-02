import { Route, Routes } from "react-router-dom";
import { GithubProvider } from "./context/github/GithubContext";
import { AlertProvider } from "./context/alert/AlertContext";
import { Home, About, User, NotFound } from "./pages";

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user/:login" element={<User />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
