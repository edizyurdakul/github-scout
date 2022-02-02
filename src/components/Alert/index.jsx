import { useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";
import { Alert, AlertIcon, Container } from "@chakra-ui/react";
import { motion } from "framer-motion";

function AlertComponent() {
  const { alert } = useContext(AlertContext);

  if (alert !== null) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Container maxW="container.xl" px={0}>
          <Alert status={alert.type} borderRadius={"md"} mb={4}>
            <AlertIcon />
            {alert.msg}
          </Alert>
        </Container>
      </motion.div>
    );
  } else {
    return null;
  }
}

export default AlertComponent;
