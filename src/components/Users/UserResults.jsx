import { useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import { Spinner, Grid, GridItem, Text, chakra } from "@chakra-ui/react";
import UserCard from "./UserCard";

function UserResults() {
  const { users, loading } = useContext(GithubContext);

  if (!loading) {
    return (
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(1, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={6}
      >
        {users.map((user) => (
          <GridItem w="100%" key={user.id}>
            <UserCard user={user} />
          </GridItem>
        ))}
      </Grid>
    );
  } else {
    return (
      <chakra.div
        display="flex"
        justifyContent="center"
        alignItems="center"
        fontSize="sm"
        mt={"4"}
      >
        <Spinner size="lg" color="purple.500" />
        <Text ml={4}>Loading...</Text>
      </chakra.div>
    );
  }
}

export default UserResults;
