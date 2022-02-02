import RepoItem from "./RepoItem";
import { Heading, Box } from "@chakra-ui/react";

function RepoList({ repos }) {
  return (
    <>
      <Heading mt={8} mb={4} as={"h2"}>
        Latest Repositories
      </Heading>
      {repos.map((repo) => {
        return (
          <Box mt={4} width={"100%"}>
            <RepoItem repo={repo} />
          </Box>
        );
      })}
    </>
  );
}

export default RepoList;
