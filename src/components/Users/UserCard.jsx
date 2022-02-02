import {
  Heading,
  Box,
  Center,
  Image,
  Flex,
  Stack,
  Button,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Link as RouteLink } from "react-router-dom";

function UserCard({ user: { login, avatar_url, html_url } }) {
  return (
    <Center py={6}>
      <Box
        maxW={"100%"}
        w={"full"}
        bgColor={useColorModeValue("gray.300", "gray.800")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Image h={"120px"} w={"full"} src={avatar_url} objectFit={"cover"} />
        <Flex justify={"center"}></Flex>
        <Box p={6}>
          <Stack spacing={0} align={"center"} mb={5}>
            <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
              {login}
            </Heading>
          </Stack>

          <Link
            as={RouteLink}
            to={`/user/${login}`}
            _hover={{ textDecoration: "none" }}
          >
            <Button
              w={"full"}
              mt={2}
              colorScheme={"purple"}
              rounded={"md"}
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "lg",
              }}
            >
              View Profile
            </Button>
          </Link>
          <Link href={html_url} isExternal _hover={{ textDecoration: "none" }}>
            <Button
              w={"full"}
              mt={4}
              colorScheme={"gray"}
              rounded={"md"}
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "lg",
              }}
            >
              Github <ExternalLinkIcon mx="2px" />
            </Button>
          </Link>
        </Box>
      </Box>
    </Center>
  );
}

export default UserCard;
