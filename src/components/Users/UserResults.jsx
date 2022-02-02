import { useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import { Grid, GridItem } from "@chakra-ui/react";
import SpinnerComponent from "../shared/Spinner";
import UserCard from "./UserCard";

function UserResults() {
  const { users, loading } = useContext(GithubContext);
  if (!loading) {
    return (
      <>
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
      </>
    );
  } else {
    return <SpinnerComponent />;
  }
}

export default UserResults;
