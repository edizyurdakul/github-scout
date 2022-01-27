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
            <Link
              ml={4}
              fontSize="md"
              fontWeight="semibold"
              as={RouteLink}
              to="/"
              _css={{}}
              _hover={{ textDecoration: "none" }}
            >
              <Button variant="ghost">
                <Icon boxSize={5} mr={2} as={FaGithub} />
                Github Scout
              </Button>
            </Link>
          </Flex>
          <Flex>
            <Link as={RouteLink} to="/" _hover={{ textDecoration: "none" }}>
              <Button variant="ghost"> Home </Button>
            </Link>

            <Link
              as={RouteLink}
              to="/about"
              _hover={{ textDecoration: "none" }}
            >
              <Button ml={2} variant="ghost">
                About
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Container>
    </chakra.nav>
  );
}

export default Navbar;
