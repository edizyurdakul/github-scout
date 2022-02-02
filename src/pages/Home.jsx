import UserSearch from "../components/Users/UserSearch";
import UserResults from "../components/Users/UserResults";
import AlertComponent from "../components/Alert";
import { AnimatePresence } from "framer-motion";
function Home() {
  return (
    <>
      <AnimatePresence>
        <AlertComponent />
        <UserSearch />
      </AnimatePresence>
      <UserResults />
    </>
  );
}

export default Home;
