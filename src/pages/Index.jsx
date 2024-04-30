import { Box, Flex, Heading, Text, Image, VStack, HStack, SimpleGrid } from '@chakra-ui/react';
import { FaMedal, FaBook, FaImages } from 'react-icons/fa';

const Index = () => {
  return (
    <Box p={5}>
      <Flex direction="column" align="center" justify="center">
        <Heading mb={4} as="h1" size="2xl">Thomas Jefferson</Heading>
        <Text fontSize="lg" mb={10}>Founding Father and Third President of the United States</Text>
        <VStack spacing={8} align="stretch">
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
            <HStack spacing={4}>
              <FaBook />
              <Text fontSize="xl" fontWeight="bold">Biography</Text>
            </HStack>
            <Text mt={4}>
              Thomas Jefferson was born on April 13, 1743, in Shadwell, Virginia. He was a draftsman of the U.S. Declaration of Independence; the nation's first secretary of state (1789-94); second vice president (1797-1801); and, as the third president (1801-09), the statesman responsible for the Louisiana Purchase.
            </Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
            <HStack spacing={4}>
              <FaMedal />
              <Text fontSize="xl" fontWeight="bold">Achievements</Text>
            </HStack>
            <Text mt={4}>
              Jefferson's major presidential achievement was the Louisiana Purchase, through which the United States acquired all the land owned by the French in North America. He also significantly contributed to the philosophical and ideological foundations of the nation.
            </Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
            <HStack spacing={4}>
              <FaImages />
              <Text fontSize="xl" fontWeight="bold">Gallery</Text>
            </HStack>
            <SimpleGrid columns={3} spacing={4} mt={4}>
              <Image src="/images/jefferson1.jpg" alt="Thomas Jefferson 1" boxSize="100px" />
              <Image src="/images/jefferson2.jpg" alt="Thomas Jefferson 2" boxSize="100px" />
              <Image src="/images/jefferson3.jpg" alt="Thomas Jefferson 3" boxSize="100px" />
            </SimpleGrid>
          </Box>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Index;