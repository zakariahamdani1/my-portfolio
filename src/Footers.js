import { 
  HStack, 
  VStack,
  Link, 
  Text 
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function Footers() {
  return (
    <VStack
      spacing={{ base: 3, md: 0 }}
      py={{ base: 4, md: 4 }}
      px={{ base: 4, md: 8 }}
      bg="gray.800"
      color="white"
    >

      {/* LINKS */}
      <HStack
        spacing={{ base: 4, md: 6 }}
        flexWrap="wrap"
        justify="center"
      >
        <Link as={RouterLink} to="/" fontWeight="bold"
          _hover={{ color: "teal.300", textDecoration: "none" }}>
          Home
        </Link>

        <Link as={RouterLink} to="/about" fontWeight="bold"
          _hover={{ color: "teal.300", textDecoration: "none" }}>
          About
        </Link>

        <Link as={RouterLink} to="/projects" fontWeight="bold"
          _hover={{ color: "teal.300", textDecoration: "none" }}>
          Projects
        </Link>

        <Link as={RouterLink} to="/contacts" fontWeight="bold"
          _hover={{ color: "teal.300", textDecoration: "none" }}>
          Contacts
        </Link>
      </HStack>

      {/* COPYRIGHT */}
      <Text 
        fontSize={{ base: "xs", md: "sm" }} 
        color="gray.400"
        textAlign="center"
      >
        © {new Date().getFullYear()} Hamdani Zakaria. All rights reserved.
      </Text>

    </VStack>
  );
}

export default Footers;