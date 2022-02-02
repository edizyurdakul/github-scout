import { Spinner, Text, chakra } from "@chakra-ui/react";

function SpinnerComponent() {
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

export default SpinnerComponent;
