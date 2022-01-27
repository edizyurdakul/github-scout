import { FaGithub } from "react-icons/fa";
import { Link as RouteLink } from "react-router-dom";
import {
  Link,
  Container,
  Flex,
  Button,
  Icon,
  chakra,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

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
          <Menu
            display={{ base: "inline-flex", sm: "inline-flex", md: "none" }}
          >
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="ghost"
              display={{ base: "inline-flex", sm: "inline-flex", md: "none" }}
            >
              Actions
            </MenuButton>
            <MenuList>
              <MenuItem>
                <Link as={RouteLink} to="/" _hover={{ textDecoration: "none" }}>
                  Home
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  as={RouteLink}
                  to="/about"
                  _hover={{ textDecoration: "none" }}
                >
                  About
                </Link>
              </MenuItem>
            </MenuList>
          </Menu>
          <Flex display={{ base: "none", sm: "none", md: "flex" }}>
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
