import { Box, Flex, Text, Image, Link, VStack, Divider, Center } from '@chakra-ui/react';
import { Header } from '../components/Header';

export default function Home() {
  return (
    <Box as="main">
      <Header />

      <Box position="relative" h="75vh" maxWidth="1440px" marginX="auto">
        <Flex
          h="100%"
          direction="column"
          justify="center"
          align="center"
          position="relative"
        >
          <Text as="h1">
            <Image src="assets/images/blob-logo-gray.png" draggable="false" />

            <Text
              as="span"
              display="block"
              ml="50%"
              fontSize="1.8rem"
              letterSpacing="0.3rem"
              color="#d1d2dc65"
              userSelect="none"
            >
              A WEB <br /> DEVELOPMENT TEAM
            </Text>
          </Text>
        </Flex>

        <VStack position="absolute" left="4" bottom="0" spacing="3.5rem">
          <Link
            href="#github"
            _focus={{ boxShadow: 'none' }}
            transitionProperty="all"
            transitionDelay="2"
            _hover={{ transform: 'scale(1.1)' }}
          >
            <Image src="assets/icons/github.svg" />
          </Link>

          <Link
            href="#instagram"
            _focus={{ boxShadow: 'none' }}
            transitionProperty="all"
            transitionDelay="2"
            _hover={{ transform: 'scale(1.1)' }}
          >
            <Image src="assets/icons/instagram.svg" />
          </Link>

          <Link
            href="#linkedin"
            _focus={{ boxShadow: 'none' }}
            transitionProperty="all"
            transitionDelay="2"
            _hover={{ transform: 'scale(1.1)' }}
          >
            <Image src="assets/icons/linkedin.svg" />
          </Link>
        </VStack>

        <VStack position="absolute" bottom="0" right="4" spacing="5rem">
          <Text
            fontSize="1.8rem"
            transform="rotate(270deg)"
            lineHeight="2.1rem"
            letterSpacing="0.3rem"
          >
            SCROLL
          </Text>

          <Center h="4rem">
            <Divider orientation="vertical" />
          </Center>
        </VStack>
      </Box>
    </Box>
  );
}
