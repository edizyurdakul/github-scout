import { useState, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";
import {
  Stack,
  FormControl,
  Input,
  Button,
  useColorModeValue,
  Container,
  Flex,
} from "@chakra-ui/react";
import { searchUsers } from "../../context/github/GithubActions";

function UserSearch() {
  const [text, setText] = useState("");
  const { users, dispatch } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (text === "") {
      setAlert("Please enter something", "error");
    } else {
      dispatch({ type: "SET_LOADING" });
      const users = await searchUsers(text);
      dispatch({ type: "GET_USERS", payload: users });
      setText("");
    }
  };

  const handleClear = () => {
    dispatch({ type: "CLEAR_USERS" });
  };
  return (
    <Flex flexDirection={"column"} alignItems={"flex-end"} justify={"center"}>
      <Container
        maxW={"100%"}
        bgColor={useColorModeValue("gray.300", "gray.800")}
        boxShadow={"xl"}
        rounded={"lg"}
        p={6}
        direction={"column"}
      >
        <Stack
          direction={{ base: "column", md: "row" }}
          as={"form"}
          spacing={"12px"}
          onSubmit={handleSubmit}
        >
          <FormControl>
            <Input
              variant={"solid"}
              color={"gray.800"}
              _placeholder={{
                color: "gray.400",
              }}
              focusBorderColor="purple.500"
              id={"search"}
              type={"search"}
              placeholder={"Search"}
              aria-label={"Search"}
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </FormControl>
          <FormControl w={{ base: "100%", md: "40%" }}>
            <Button
              type="submit"
              colorScheme={"purple"}
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "lg",
              }}
              w="100%"
            >
              Search
            </Button>
          </FormControl>
        </Stack>
      </Container>
      {users.length > 0 && (
        <Button
          colorScheme={"red"}
          _hover={{
            transform: "translateY(-2px)",
            boxShadow: "lg",
          }}
          mt={6}
          onClick={handleClear}
        >
          Clear
        </Button>
      )}
    </Flex>
  );
}

export default UserSearch;
