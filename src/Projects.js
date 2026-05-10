import {
  Box,
  Heading,
  Text,
  Image,
  SimpleGrid,
  Link,
} from "@chakra-ui/react";

const ProjectCard = ({ title, image, description, link }) => (
  <Box
    border="2px solid white"
    borderRadius="10px"
    p={{ base: 3, md: 4 }}
    textAlign="center"
    transition="0.3s"
    _hover={{
      transform: "scale(1.05)",
    }}
  >
    <Link href={link} isExternal _hover={{ textDecoration: "none" }}>
      <Text fontWeight="bold" mb={2} fontSize={{ base: "md", md: "lg" }}>
        {title}
      </Text>

      <Image
        src={image}
        alt={title}
        w="100%"
        h={{ base: "160px", md: "200px" }}
        objectFit="cover"
        borderRadius="md"
      />
    </Link>

    <Text mt={3} fontSize={{ base: "xs", md: "sm" }}>
      {description}
    </Text>
  </Box>
);

function Projects() {
  return (
    <Box
      bg="gray.600"
      color="white"
      px={{ base: 4, md: 10 }}
      py={{ base: 10, md: 16 }}
      id="projects"
      minH="100vh"
    >
      <Heading
        color="blue.500"
        mb={4}
        fontSize={{ base: "2xl", md: "4xl" }}
        textAlign="center"
      >
        My Projects
      </Heading>

      <Text
        fontSize={{ base: "md", md: "lg" }}
        textAlign="center"
        maxW="800px"
        mx="auto"
      >
        My name is Hamdani Zakaria and I am a Front-End developer using React.js
      </Text>

      <Text
        fontWeight="bold"
        fontSize={{ base: "lg", md: "xl" }}
        mt={6}
        mb={8}
        textAlign="center"
      >
        Some of my work:
      </Text>

      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3 }}
        spacing={{ base: 5, md: 8 }}
      >
        <ProjectCard
          title="Vigenere Cipher"
          image="/images/vigenere-cipher-1.png"
          link="https://vigenere-cipher-17.netlify.app/"
          description="A classical encryption app built with React."
        />

        <ProjectCard
          title="Daily Anxiety Scale"
          image="/images/daily_anx_1.png"
          link="https://daily-anxiety-scale-17.netlify.app/"
          description="Track your daily stress levels easily."
        />

        <ProjectCard
          title="Guess The Number"
          image="/images/guess-the-number-1.png"
          link="https://guess-number-game-17.netlify.app/"
          description="Simple interactive number guessing game."
        />

        <ProjectCard
          title="Caesar Cipher"
          image="/images/caesar_encry_.png"
          link="https://caesar-cipher-react-17.netlify.app/"
          description="A classical encryption app built with React."
        />

        <ProjectCard
          title="Plugin Report"
          image="/images/plugin-report.png"
          link="https://generate-plugin-report-17.netlify.app/"
          description="Generating a WordPress report file with notifications."
        />

        <ProjectCard
          title="Plugin Archive"
          image="/images/plugin-archive.png"
          link="https://plugin-archive-17.netlify.app/"
          description="Stores plugin names and vulnerabilities using local storage."
        />

        <ProjectCard
          title="Text to Blocks"
          image="/images/text-to-blocks.png"
          link="https://text-to-blocks-17.netlify.app/"
          description="Transfer text to blocks"
        />

        <ProjectCard
          title="Restaurent La Maison"
          image="/images/R-la-maison.png"
          link="https://la-maison-restaurent-17.netlify.app/"
          description="Restaurent landing page"
        />
        <ProjectCard
          title="Coffee Corner"
          image="/images/coffee-corner.png"
          link="https://coffee-corner-17.netlify.app/"
          description="Coffee shop landing page"
        />
        <ProjectCard
          title="Motor Gear"
          image="/images/auto-parts.png"
          link="https://auto-parts-17.netlify.app/"
          description="landing page for selling car parts."
        />
      </SimpleGrid>
    </Box>
  );
}

export default Projects;