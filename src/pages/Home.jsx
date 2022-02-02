import UserSearch from "../components/Users/UserSearch";
import UserResults from "../components/Users/UserResults";
import AlertComponent from "../components/Alert";
import { AnimatePresence } from "framer-motion";
function Home() {
  return (
    <>
      <AnimatePresence>
        <AlertComponent key={1} />
        <UserSearch key={2} />
      </AnimatePresence>
      <UserResults />
    </>
  );
}

export default Home;
