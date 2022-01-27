import Navbar from "./Navbar";
import Footer from "./Footer";
import { chakra } from "@chakra-ui/react";

function Layout({ children }) {
  return (
    <chakra.div
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      height="100vh"
    >
      <Navbar />
      <main>{children}</main>
      <Footer />
    </chakra.div>
  );
}

export default Layout;
