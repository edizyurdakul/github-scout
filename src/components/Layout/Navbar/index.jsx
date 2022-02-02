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
  Box,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { HamburgerIcon } from "@chakra-ui/icons";

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <chakra.nav px={4}>
      <Container
        maxW="container.xl"
        py={6}
        bgColor={useColorModeValue("gray.300", "gray.800")}
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
              _hover={{ textDecoration: "none" }}
            >
              <Button
                variant="ghost"
                bgColor={useColorModeValue("whiteAlpha.500", "gray.700")}
                _hover={{ bgColor: useColorModeValue("gray.400", "gray.600") }}
              >
                <Icon boxSize={5} mr={2} as={FaGithub} />
                Github Scout
              </Button>
            </Link>
          </Flex>
          <Box>
            <Menu
              display={{ base: "inline-flex", sm: "inline-flex", md: "none" }}
            >
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="ghost"
                bgColor={useColorModeValue("whiteAlpha.500", "gray.700")}
                _hover={{
                  bgColor: useColorModeValue("whiteAlpha.800", "gray.600"),
                }}
                display={{ base: "inline-flex", sm: "inline-flex", md: "none" }}
              >
                Actions
              </MenuButton>
              <MenuList py={0}>
                <MenuItem py={0} px={0}>
                  <Link
                    as={RouteLink}
                    to="/"
                    _hover={{ textDecoration: "none" }}
                    w={"100%"}
                    p={2}
                  >
                    Home
                  </Link>
                </MenuItem>
                <MenuItem py={0} px={0}>
                  <Link
                    as={RouteLink}
                    to="/about"
                    _hover={{ textDecoration: "none" }}
                    w={"100%"}
                    p={2}
                  >
                    About
                  </Link>
                </MenuItem>
              </MenuList>
              <Button
                display={{ base: "inline-flex", sm: "inline-flex", md: "none" }}
                ml={2}
                bgColor={useColorModeValue("whiteAlpha.500", "gray.700")}
                _hover={{
                  bgColor: useColorModeValue("whiteAlpha.800", "gray.600"),
                }}
                onClick={toggleColorMode}
              >
                {colorMode === "light" ? (
                  <Icon color={"black"} as={MdDarkMode} />
                ) : (
                  <Icon as={MdLightMode} />
                )}
              </Button>
            </Menu>
          </Box>
          <Flex display={{ base: "none", sm: "none", md: "flex" }}>
            <Link
              ml={2}
              as={RouteLink}
              to="/"
              _hover={{ textDecoration: "none" }}
            >
              <Button
                bgColor={useColorModeValue("whiteAlpha.500", "gray.700")}
                _hover={{ bgColor: useColorModeValue("gray.400", "gray.600") }}
                variant="ghost"
              >
                Home
              </Button>
            </Link>
            <Link
              as={RouteLink}
              to="/about"
              _hover={{ textDecoration: "none" }}
              ml={2}
            >
              <Button
                bgColor={useColorModeValue("whiteAlpha.500", "gray.700")}
                _hover={{ bgColor: useColorModeValue("gray.400", "gray.600") }}
                variant="ghost"
              >
                About
              </Button>
            </Link>
            <Button
              bgColor={useColorModeValue("whiteAlpha.500", "gray.700")}
              _hover={{
                bgColor: useColorModeValue("whiteAlpha.800", "gray.600"),
              }}
              ml={2}
              onClick={toggleColorMode}
            >
              {colorMode === "light" ? (
                <Icon color={"black"} as={MdDarkMode} />
              ) : (
                <Icon as={MdLightMode} />
              )}
            </Button>
          </Flex>
        </Flex>
      </Container>
    </chakra.nav>
  );
}

export default Navbar;
