import { Container, Flex, chakra } from "@chakra-ui/react";

function Footer() {
  const footerYear = new Date().getFullYear();

  return (
    <chakra.footer px={4}>
      <Container
        maxW="container.xl"
        py={4}
        bgColor="gray.800"
        borderTopRadius="lg"
        boxShadow="md"
      >
        <Flex
          fontSize="sm"
          textAlign="center"
          color="gray.400"
          justifyContent="center"
        >
          Ediz Yurdakul
        </Flex>
      </Container>
    </chakra.footer>
  );
}

export default Footer;
