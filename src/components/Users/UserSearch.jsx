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

function UserSearch() {
  const [text, setText] = useState("");
  const { users, searchUsers, setClear } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text === "") {
      setAlert("Please enter something", "error");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  const handleClear = () => {
    setClear();
  };
  return (
    <Flex align={"center"} justify={"center"}>
      <Container
        maxW={"2xl"}
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
            {users.length > 0 && (
              <Button
                variant={"outline"}
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "lg",
                }}
                w="100%"
                mt={2}
                onClick={handleClear}
              >
                Clear
              </Button>
            )}
          </FormControl>
        </Stack>
      </Container>
    </Flex>
  );
}

export default UserSearch;
