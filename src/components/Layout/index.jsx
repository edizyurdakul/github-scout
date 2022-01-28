import Navbar from "./Navbar";
import { Container, chakra } from "@chakra-ui/react";

function Layout({ children }) {
  return (
    <chakra.div>
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
    </chakra.div>
  );
}

export default Layout;
