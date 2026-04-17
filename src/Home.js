import { Box, Heading, Text, Image } from "@chakra-ui/react";

function Home() {
  return (
    <Box 
      p={5} 
      h="100vh" 
      display="flex" 
      justifyContent="center" 
      alignItems="center"
      flexDirection="column"
      bg="gray.600"
    >
      <Heading mb={4} color="blue.500">
        Home
      </Heading>

      <Text color="gray.300" mb={2}>
        React • JavaScript • UI/UX
      </Text>

      <Image 
        src="/images/zaki.jpeg" 
        boxSize="250px"
        objectFit="cover"
        border="2px solid white"
        borderRadius="full"
        mt={4}
      />

      <Text 
        color="white" 
        fontWeight="bold" 
        fontSize="lg"
        textAlign="center"
        maxW="500px"
        mt={4}
      >
        I am a Front-End developer passionate about building modern and responsive web applications.
      </Text>
    </Box>
  );
}

export default Home;