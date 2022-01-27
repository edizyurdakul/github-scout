import { useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import { Spinner, Grid, GridItem, chakra } from "@chakra-ui/react";
import UserCard from "./UserCard";

function UserResults() {
  const { users, loading } = useContext(GithubContext);

  if (!loading) {
    return (
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
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
      >
        <Spinner size="lg" color="purple.500" mr={2} />
        Loading...
      </chakra.div>
    );
  }
}

export default UserResults;
