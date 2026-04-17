import { 
  Box, 
  Grid, 
  HStack, 
  Link, 
  Image 
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Headers() {
  return (
    <Box bg="gray.800" p={{ base: 3, md: 5 }}>

      <Grid 
        templateColumns={{ base: "1fr", md: "1fr auto 1fr" }}
        alignItems="center"
        gap={4}
      >

        {/* 🔹 LOGO (mobile top / desktop center) */}
        <Box 
          justifySelf="center"
          order={{ base: 1, md: 2 }}
        >
          <Image 
            src="/images/my-logo.png"
            alt="Logo"
            boxSize={{ base: "120px", md: "200px" }}
            objectFit="cover"
            borderRadius="full"
          />
        </Box>

        {/* 🔹 LINKS */}
        <HStack 
          spacing={{ base: 4, md: 6 }} 
          justify={{ base: "center", md: "flex-start" }}
          flexWrap="wrap"
          order={{ base: 2, md: 1 }}
        >
          {["/", "/about", "/projects", "/contacts"].map((path, i) => {
            const labels = ["Home", "About", "Projects", "Contacts"];
            return (
              <Link
                key={i}
                as={RouterLink}
                to={path}
                color="white"
                fontWeight="bold"
                fontSize={{ base: "sm", md: "md" }}
                _hover={{ color: "teal.300", textDecoration: "none" }}
              >
                {labels[i]}
              </Link>
            );
          })}
        </HStack>

        {/* 🔹 ICONS */}
        <HStack 
          justify={{ base: "center", md: "flex-end" }}
          spacing={{ base: 4, md: 5 }} 
          color="white"
          order={{ base: 3, md: 3 }}
        >
          <Box 
            as="a" 
            href="https://github.com/zakariahamdani1" 
            target="_blank"
            _hover={{ color: "gray.400", transform: "scale(1.2)" }}
            transition="0.2s"
          >
            <FaGithub size={22} />
          </Box>

          <Box 
            as="a" 
            href="https://www.linkedin.com/in/zakaria-hamdani-75b626219/" 
            target="_blank"
            _hover={{ color: "blue.300", transform: "scale(1.2)" }}
            transition="0.2s"
          >
            <FaLinkedin size={22} />
          </Box>

          <Box 
            as="a" 
            href="mailto:hamdanizakaria86@gmail.com"
            _hover={{ color: "red.400", transform: "scale(1.2)" }}
            transition="0.2s"
          >
            <FaEnvelope size={22} />
          </Box>
        </HStack>

      </Grid>

    </Box>
  );
}

export default Headers;