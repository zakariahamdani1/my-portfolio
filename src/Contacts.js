import { 
  Box, 
  Heading, 
  FormControl, 
  FormLabel,
  Input,
  Textarea,
  Button, 
  Grid, 
  Text,
  VStack
} from "@chakra-ui/react";

function Contacts() {
  return(
    <Box 
      bg="gray.600" 
      id="contacts" 
      p={{ base: 3, md: 5 }}   // 👈 responsive padding
    >
      
      <Grid 
        templateColumns={{ base: "1fr", md: "1fr 1fr" }} 
        gap={{ base: 6, md: 10 }}   // 👈 responsive gap
        alignItems="center"
      >

        {/* FORM */}
        <Box 
          p={{ base: 4, md: 6 }}
          borderRadius="xl" 
          bg="gray.800" 
          w="100%" 
          boxShadow="lg"
        >
          <Heading 
            mb={5} 
            color="blue.500"
            fontSize={{ base: "xl", md: "2xl" }} // 👈 responsive font
          >
            Contact Me
          </Heading>

          <form action="https://formspree.io/f/mgorovbl" method="POST">
            
            <FormControl mb={3}>
              <FormLabel color="gray.100">Name</FormLabel>
              <Input type="text" bg="gray.300" name="name" required />
            </FormControl>

            <FormControl mb={3}>
              <FormLabel color="gray.100">Email</FormLabel>
              <Input type="email" bg="gray.300" name="email" required />
            </FormControl>

            <FormControl mb={3}>
              <FormLabel color="gray.100">Message</FormLabel>
              <Textarea name="message" bg="gray.300" resize="none" required />
            </FormControl>

            <Button 
              type="submit" 
              colorScheme="blue" 
              mt={3}
              w="100%"
            >
              Send Message
            </Button>

          </form>
        </Box>

        {/* CONTENT */}
        <Box 
          border="1px solid"
          borderColor="gray.500"
          p={{ base: 4, md: 6 }}
          borderRadius="xl"
          bg="gray.700"
          boxShadow="lg"
        >
          <VStack align="start" spacing={4}>

            <Heading 
              color="white"
              fontSize={{ base: "xl", md: "2xl" }}
            >
              Get in Touch
            </Heading>

            <Text color="gray.300" fontSize={{ base: "sm", md: "md" }}>
              Have a project idea or just want to say hi? 
              I'm always open to new opportunities.
            </Text>

            <Text color="white">📧 Email: hamdanizakaria86@gmail.com</Text>
            <Text color="white">💼 LinkedIn: https://www.linkedin.com/in/zakaria-hamdani-75b626219/</Text>
            <Text color="white">💻 GitHub: https://github.com/zakariahamdani1</Text>

          </VStack>
        </Box>

      </Grid>
      
    </Box>
  )
}

export default Contacts;