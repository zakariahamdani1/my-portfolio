import { Box, Heading, Text, Grid, Image, Button, HStack, VStack } from "@chakra-ui/react";

function About() {
  return (
    <Box
      id="about"
      bg="gray.600"
      minH="100vh"
      px={{ base: 4, md: 10 }}
      py={{ base: 10, md: 16 }}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      {/* Content */}
      <Box>
        <Heading
          mb={{ base: 6, md: 10 }}
          color="blue.500"
          textAlign="center"
          fontSize={{ base: "2xl", md: "4xl" }}
        >
          About Me
        </Heading>

        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          gap={{ base: 8, md: 12 }}
          alignItems="center"
        >
          <Text
            color="white"
            fontSize={{ base: "md", md: "lg" }}
            lineHeight="1.8"
            maxW="600px"
            mx={{ base: "auto", md: "0" }}
            textAlign={{ base: "center", md: "left" }}
          >
            I'm a passionate and self-driven developer with a strong interest in building practical and efficient solutions.
            I enjoy turning ideas into real-world projects, especially in web development and problem-solving.
            With a background in analytical thinking and a continuous desire to learn,
            I focus on improving my skills every day and exploring new technologies.
            I aim to create clean, functional, and user-friendly applications while growing toward becoming an independent and impactful developer.
          </Text>

          <Image
            src="/images/about.jpeg"
            alt="Profile"
            borderRadius="2xl"
            objectFit="cover"
            boxShadow="lg"
            border="1px solid"
            borderColor="white"
            w={{ base: "100%", md: "400px" }}
            h={{ base: "250px", md: "400px" }}
            mx="auto"
          />
        </Grid>
      </Box>

      {/* Buttons */}
      <VStack mt={10} spacing={4}>
        <HStack
          spacing={4}
          wrap="wrap"
          justify="center"
        >
          <Button
            size="lg"
            colorScheme="blue"
            as="a"
            href="https://github.com/zakariahamdani1"
            target="_blank"
            w={{ base: "100%", sm: "auto" }}
          >
            GitHub
          </Button>

          <Button
            size="lg"
            colorScheme="teal"
            as="a"
            href="mailto:hamdanizakaria86@gmail.com"
            w={{ base: "100%", sm: "auto" }}
          >
            Email
          </Button>

          <Button
            size="lg"
            bg="#0A66C2"
            color="white"
            _hover={{ bg: "#004182" }}
            as="a"
            href="https://www.linkedin.com/in/zakaria-hamdani-75b626219/"
            target="_blank"
            w={{ base: "100%", sm: "auto" }}
          >
            LinkedIn
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
}

export default About;