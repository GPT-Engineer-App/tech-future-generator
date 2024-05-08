import { Box, Button, Container, Flex, Grid, GridItem, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="1440px" p={0} m="auto">
      {/* Section 1 */}
      <VStack spacing={4} align="center" justify="center" minH="100vh" bgImage="url('/sci-fi-background.jpg')" bgSize="cover" bgPosition="center">
        <Heading as="h1" size="2xl" color="white" textShadow="2px 2px 4px rgba(0,0,0,0.5)">
          AIGCode
        </Heading>
        <VStack spacing={3}>
          <Text fontSize="3xl" color="white" textShadow="1px 1px 2px rgba(0,0,0,0.7)">
            Advancing Industries with Groundbreaking Technologies
          </Text>
          <Text fontSize="xl" color="white" opacity="0.8" mt="2">
            Explore the frontier of technology with us.
          </Text>
          <Text fontSize="3xl" bgGradient="linear(to-r, teal.300, blue.500, purple.300)" bgClip="text" style={{ overflow: "hidden", whiteSpace: "nowrap", borderRight: "3px solid orange", width: "0", animation: "typing 3.5s steps(50, end), blink-caret .75s step-end infinite" }}>
            Next-Gen Code Models_
          </Text>
          <style>
            {`
              @keyframes typing {
                from { width: 0 }
                to { width: 100% }
                0% { width: 0 }
              }
              @keyframes blink-caret {
                from, to { border-color: transparent }
                50% { border-color: orange; }
              }
            `}
          </style>
        </VStack>
        <Button mt="20px" colorScheme="teal" size="lg" boxShadow="0px 0px 12px rgba(0,255,255,0.6)" _hover={{ transform: "scale(1.05)" }}>
          Apply for testing
        </Button>
      </VStack>

      {/* Section 2 */}
      <Box bg="#06062C" w="full" h="1020px" position="relative">
        <Text fontSize="34px" fontWeight="700" lineHeight="38px" textAlign="center" mt="100px" bgGradient="linear(to-r, #CF6FFF, #766FFF, #736FFF, #3E8BFF, #48E3FF)" bgClip="text">
          AIGCode is capable of end-to-end application development
        </Text>
        <Flex justify="center" mt="34px">
          <Stack direction="row" spacing={6} align="center" bg="#29177E" p={1} borderRadius="83px">
            <Box bgGradient="linear(to-r, #CA88EB, #7A77F1, #80D5E4)" p={1} borderRadius="33px">
              <Text fontSize="14px" fontWeight="500" lineHeight="22px" color="white">
                Data
              </Text>
            </Box>
            <Text fontSize="14px" fontWeight="500" lineHeight="22px" color="white">
              App
            </Text>
            <Text fontSize="14px" fontWeight="500" lineHeight="22px" color="white">
              Web
            </Text>
          </Stack>
        </Flex>
        <Text fontSize="26px" fontWeight="700" lineHeight="28px" color="white" textAlign="center" mt="23px">
          Data Dashboard generation
        </Text>
        <Box w="1195px" h="620px" bgGradient="linear(to-l, #7928CA, #FF0080)" mt="16px" mx="auto">
          <Text color="white" textAlign="center" mt="290px">
            Sci-Fi Styled Image
          </Text>
        </Box>
      </Box>

      {/* Section 3 */}
      <Box bg="#06062C" w="full" h="616px">
        <Box w="400px" h="411.11px" bgGradient="linear(to-r, #0F2027, #203A43, #2C5364)" mt="26px" mx="auto">
          <Text color="white" textAlign="center" mt="205px">
            Sci-Fi Styled Image
          </Text>
        </Box>
        <Text fontSize="36px" fontWeight="700" lineHeight="47px" color="white" textAlign="center" mt="156px">
          Acumen beta testing recruitment
        </Text>
        <Text fontSize="22px" fontWeight="400" lineHeight="29px" color="white" textAlign="center" mt="63px">
          Please complete the form to try our product
        </Text>
        <Button w="224px" h="36px" bg="#0096FF" color="white" fontSize="16px" fontWeight="700" lineHeight="17px" mt="45px" mx="auto">
          Apply for beta testing →
        </Button>
      </Box>

      {/* Section 4 */}
      <Box bg="#06062C" w="full" h="731px">
        <Text fontSize="38px" fontWeight="700" lineHeight="56px" textAlign="center" mt="100px" bgGradient="linear(to-r, #CA88EB, #7E78F1, #7A77F1, #7AA9F1, #80D5E4)" bgClip="text">
          What can the AIGCODE App do?
        </Text>
        <Text fontSize="16px" fontWeight="400" lineHeight="21px" color="#D0D0FF" textAlign="center" mt="10px">
          AIGCode is capable of end-to-end application generation
        </Text>
        <Grid templateColumns="repeat(2, 1fr)" gap={6} mt="261px" mx="138px">
          {/* Four rectangles with text */}
          {/* Placeholder for actual content */}
        </Grid>
      </Box>

      {/* Section 5 */}
      <Box bg="#06062C" w="full" h="829px">
        <Text fontSize="38px" fontWeight="500" lineHeight="56px" textAlign="center" mt="100px" bgGradient="linear(to-r, #167CFA, #AC7BF6)" bgClip="text">
          AIGCode Community
        </Text>
        <Text fontSize="16px" fontWeight="500" lineHeight="21px" color="#1F1F66" textAlign="center" mt="10px">
          We welcome everyone to join our big family and engage in open communication with us
        </Text>
        <Grid templateColumns="repeat(4, 1fr)" gap={6} mt="20px" mx="auto">
          {/* Placeholder for community member rectangles */}
        </Grid>
      </Box>

      {/* Section 6 */}
      <Box bg="#06062C" w="full" h="649px">
        <Text fontSize="38px" fontWeight="500" lineHeight="56px" textAlign="center" mt="100px" bgGradient="linear(to-r, #167CFA, #AC7BF6)" bgClip="text">
          Welcome to join us
        </Text>
        <Text fontSize="16px" fontWeight="500" lineHeight="21px" color="#1A184A" textAlign="center" mt="10px">
          Shaping the future with technological innovations
        </Text>
        <Flex justify="space-around" mt="20px">
          {/* Placeholder for three rectangles */}
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;
