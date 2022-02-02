import {
  Grid,
  GridItem,
  Box,
  ButtonGroup,
  Button,
  Flex,
  Badge,
  Icon,
  chakra,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { ExternalLinkIcon, ArrowBackIcon } from "@chakra-ui/icons";
import { FaTwitter, FaGithub } from "react-icons/fa";
import { GoRepo, GoGist, GoHeart, GoOrganization } from "react-icons/go";
import { Link as RouteLink } from "react-router-dom";
import RepoList from "./Repos/RepoList";

function UserProfile({ user, repos }) {
  return (
    <Flex w="full" flexDirection={"column"} alignItems={"flex-start"}>
      <Link as={RouteLink} to="/">
        <Button
          mb={4}
          colorScheme={"purple"}
          rounded={"md"}
          _hover={{
            transform: "translateY(-2px)",
            boxShadow: "lg",
          }}
        >
          <ArrowBackIcon mr={1} mt={"2px"} /> Go Back
        </Button>
      </Link>
      <Box
        bgColor={useColorModeValue("gray.300", "gray.800")}
        display={{ lg: "flex" }}
        width={"100%"}
        shadow={{ lg: "lg" }}
        rounded={{ lg: "lg" }}
      >
        <Box w={{ lg: "50%" }}>
          <Box
            h={{ base: 64, lg: "full" }}
            rounded={{ lg: "lg" }}
            bgSize={"cover"}
            backgroundPosition={"center"}
            style={{
              backgroundImage: `url(${user.avatar_url})`,
              backgroundPosition: "center",
            }}
          ></Box>
        </Box>

        <Box py={12} px={6} maxW={{ base: "xl", lg: "5xl" }} w={{ lg: "50%" }}>
          <Box>
            <Badge mr={2} p={1} borderRadius={"md"} colorScheme={"gray"}>
              {user.type}
            </Badge>
            {user.hireable && (
              <Badge p={1} borderRadius={"md"} colorScheme={"purple"}>
                Hireable
              </Badge>
            )}
          </Box>
          <chakra.h1
            fontSize={{ base: "2xl", md: "3xl" }}
            color={useColorModeValue("gray.800", "white")}
            fontWeight="bold"
          >
            {user.name}
          </chakra.h1>
          <chakra.p mt={4} color={useColorModeValue("gray.600", "gray.400")}>
            {user.bio}
          </chakra.p>
          <Box color={useColorModeValue("gray.800", "white")}>
            {user.location && (
              <chakra.p
                fontSize={{ base: "xl", md: "1xl" }}
                fontWeight="bold"
                mt={4}
              >
                Location
              </chakra.p>
            )}
          </Box>
          <Box color={useColorModeValue("gray.600", "gray.400")}>
            {user.location && (
              <chakra.p fontSize={"sm"} mt={1}>
                {user.location}
              </chakra.p>
            )}
          </Box>

          <Box mt={4}>
            <ButtonGroup
              flexDirection={{ base: "column", sm: "row" }}
              spacing={{ base: 0, sm: 2 }}
            >
              <Link
                href={user.html_url}
                isExternal
                _hover={{ textDecoration: "none" }}
              >
                <Button
                  colorScheme={"gray"}
                  rounded={"md"}
                  _hover={{
                    transform: "translateY(-2px)",
                    boxShadow: "lg",
                  }}
                  width={{ base: "100%" }}
                >
                  Github <Icon as={FaGithub} ml={2} />
                </Button>
              </Link>
              {user.blog && (
                <Link
                  href={`https://${user.blog}`}
                  isExternal
                  _hover={{ textDecoration: "none" }}
                  mt={{ base: 1, sm: 0 }}
                >
                  <Button
                    colorScheme={"purple"}
                    rounded={"md"}
                    _hover={{
                      transform: "translateY(-2px)",
                      boxShadow: "lg",
                    }}
                    width={{ base: "100%" }}
                  >
                    Website <ExternalLinkIcon ml={2} />
                  </Button>
                </Link>
              )}
              {user.twitter_username && (
                <Link
                  href={`https://twitter.com/${user.twitter_username}`}
                  isExternal
                  _hover={{ textDecoration: "none" }}
                  mt={{ base: 1, sm: 0 }}
                >
                  <Button
                    colorScheme="twitter"
                    rounded={"md"}
                    _hover={{
                      transform: "translateY(-2px)",
                      boxShadow: "lg",
                    }}
                    width={{ base: "100%" }}
                  >
                    Twitter <Icon as={FaTwitter} ml={2} />
                  </Button>
                </Link>
              )}
            </ButtonGroup>
          </Box>
        </Box>
      </Box>
      <Box
        mt={8}
        bg={useColorModeValue("purple.500", "purple.500")}
        width={"100%"}
        shadow={{ lg: "lg" }}
        rounded={{ lg: "lg" }}
      >
        <Grid
          templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
          justifyItems={"center"}
          gap={4}
          p={4}
        >
          <GridItem>
            <Flex flexDirection={"column"} alignItems={"center"}>
              <Icon
                as={GoRepo}
                color={useColorModeValue("gray.100", "gray.100")}
                w={6}
                h={6}
              />
              <chakra.p
                fontSize={{ base: "xl", md: "1xl" }}
                fontWeight="bold"
                color={"white"}
                mt={2}
              >
                Public Repos
              </chakra.p>
              <chakra.p color={useColorModeValue("gray.100", "gray.100")}>
                {user.public_repos}
              </chakra.p>
            </Flex>
          </GridItem>
          <GridItem>
            <Flex flexDirection={"column"} alignItems={"center"}>
              <Icon as={GoGist} color={"gray.100"} w={6} h={6} />
              <chakra.p
                fontSize={{ base: "xl", md: "1xl" }}
                fontWeight="bold"
                color={"gray.100"}
                mt={2}
              >
                Public Gists
              </chakra.p>
              <chakra.p color={"gray.100"}>{user.public_gists}</chakra.p>
            </Flex>
          </GridItem>
          <GridItem>
            <Flex flexDirection={"column"} alignItems={"center"}>
              <Icon as={GoOrganization} color={"gray.100"} w={6} h={6} />
              <chakra.p
                fontSize={{ base: "xl", md: "1xl" }}
                fontWeight="bold"
                color={"gray.100"}
                mt={2}
              >
                Followers
              </chakra.p>
              <chakra.p color={"gray.100"}>{user.followers}</chakra.p>
            </Flex>
          </GridItem>
          <GridItem>
            <Flex flexDirection={"column"} alignItems={"center"}>
              <Icon
                as={GoHeart}
                color={useColorModeValue("gray.100", "gray.100")}
                w={6}
                h={6}
              />
              <chakra.p
                fontSize={{ base: "xl", md: "1xl" }}
                fontWeight="bold"
                color={"gray.100"}
                mt={2}
              >
                Following
              </chakra.p>
              <chakra.p color={"gray.100"}>{user.following}</chakra.p>
            </Flex>
          </GridItem>
        </Grid>
      </Box>
      <RepoList repos={repos} />
    </Flex>
  );
}

export default UserProfile;
