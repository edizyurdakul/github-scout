import {
  Box,
  Heading,
  LinkBox,
  LinkOverlay,
  Text,
  Icon,
  useColorModeValue,
  Badge,
} from "@chakra-ui/react";
import { GoEye, GoStar, GoRepoForked, GoIssueOpened } from "react-icons/go";

const getDayDiff = (date) => {
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const today = new Date().toISOString();

  const diffInMilliseconds =
    new Date(today).getTime() - new Date(date).getTime();
  const diffDays = Math.round(Math.abs(diffInMilliseconds / oneDay));
  if (diffDays === 0) {
    return "Updated today";
  } else {
    return `Updated ${diffDays} ago`;
  }
};

function RepoItem({ repo }) {
  console.log(repo);
  return (
    <Box>
      <LinkBox
        as="article"
        p="5"
        bgColor={useColorModeValue("gray.300", "gray.800")}
      >
        <Box as="time" dateTime="2021-01-15 15:30:00 +0000 UTC">
          {getDayDiff(repo.pushed_at)}
        </Box>
        <Heading size={"md"} my={"2"}>
          <LinkOverlay href={repo.html_url} isExternal>
            {repo.name}
          </LinkOverlay>
        </Heading>
        <Text>{repo.description}</Text>
        <Badge
          display={"inline-flex"}
          alignItems={"center"}
          p={2}
          mr={2}
          my={"2"}
          borderRadius={"lg"}
          colorScheme={"green"}
        >
          <Icon as={GoStar} mr={2} />
          {repo.stargazers_count}
        </Badge>
        <Badge
          display={"inline-flex"}
          alignItems={"center"}
          p={2}
          mr={2}
          borderRadius={"lg"}
          colorScheme={"blue"}
        >
          <Icon as={GoEye} mr={2} />
          {repo.watchers_count}
        </Badge>
        <Badge
          display={"inline-flex"}
          alignItems={"center"}
          p={2}
          mr={2}
          borderRadius={"lg"}
          colorScheme={"orange"}
        >
          <Icon as={GoRepoForked} mr={2} />
          {repo.forks_count}
        </Badge>
        <Badge
          display={"inline-flex"}
          alignItems={"center"}
          p={2}
          borderRadius={"lg"}
          colorScheme={"red"}
        >
          <Icon as={GoIssueOpened} mr={2} />
          {repo.open_issues_count}
        </Badge>
      </LinkBox>
    </Box>
  );
}

export default RepoItem;
