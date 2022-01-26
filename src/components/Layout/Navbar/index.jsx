import { FaGithub } from "react-icons/fa";
import { Link as RouteLink } from "react-router-dom";
import { Link, Container, Flex, Box, Icon } from "@chakra-ui/react";

function Navbar() {
  return (
    <nav>
      <Container maxW="container.xl" py={6}>
        <Flex justifyContent="space-between">
          <Flex alignItems="center">
            <Icon boxSize={5} as={FaGithub} _hover={{ color: "purple.300" }} />
            <Link
              ml={4}
              fontSize="md"
              fontWeight="semibold"
              as={RouteLink}
              to="/"
              _css={{}}
              _hover={{ textDecoration: "none", color: "purple.300" }}
            >
              Github Finder
            </Link>
          </Flex>
          <Flex>
            <Link
              as={RouteLink}
              to="/"
              _hover={{ textDecoration: "none", color: "purple.300" }}
            >
              Home
            </Link>
            <Link
              ml={4}
              as={RouteLink}
              to="/about"
              _hover={{ textDecoration: "none", color: "purple.300" }}
            >
              About
            </Link>
          </Flex>
        </Flex>
      </Container>
    </nav>
  );
}

export default Navbar;
