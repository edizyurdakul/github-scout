import { useState, useEffect } from "react";
import { Spinner, Grid, GridItem, chakra } from "@chakra-ui/react";
import UserCard from "./UserCard";

function UserResults() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    });
    const data = await res.json();
    console.log(data);
    setUsers(data);
    setLoading(false);
  };

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
            <UserCard
              name={user.login}
              avatar={user.avatar_url}
              url={user.html_url}
            />
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
