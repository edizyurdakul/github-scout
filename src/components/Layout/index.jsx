import Navbar from "./Navbar";
import Footer from "./Footer";
import { Container, chakra } from "@chakra-ui/react";

function Layout({ children }) {
  return (
    <chakra.div
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      height="100vh"
    >
      <Navbar />
      <main>
        <Container
          maxW="container.xl"
          py={6}
          px={{
            base: "4",
            sm: "4",
            md: "4",
            lg: "4",
            xl: "0",
          }}
        >
          {children}
        </Container>
      </main>
      <Footer />
    </chakra.div>
  );
}

export default Layout;
