import { FaGithub } from "react-icons/fa";
import { Link as RouteLink } from "react-router-dom";
import { Link, Container, Flex, Button, Icon, chakra } from "@chakra-ui/react";

function Navbar() {
  return (
    <chakra.nav px={4}>
      <Container
        maxW="container.xl"
        py={6}
        bgColor="gray.800"
        borderBottomRadius="lg"
        boxShadow="md"
      >
        <Flex justifyContent="space-between">
          <Flex alignItems="center">
            <Button variant="ghost">
              <Icon boxSize={5} as={FaGithub} />
              <Link
                ml={4}
                fontSize="md"
                fontWeight="semibold"
                as={RouteLink}
                to="/"
                _css={{}}
                _hover={{ textDecoration: "none" }}
              >
                Github Finder
              </Link>
            </Button>
          </Flex>
          <Flex>
            <Button variant="ghost">
              <Link as={RouteLink} to="/" _hover={{ textDecoration: "none" }}>
                Home
              </Link>
            </Button>
            <Button ml={2} variant="ghost">
              <Link
                as={RouteLink}
                to="/about"
                _hover={{ textDecoration: "none" }}
              >
                About
              </Link>
            </Button>
          </Flex>
        </Flex>
      </Container>
    </chakra.nav>
  );
}

export default Navbar;
