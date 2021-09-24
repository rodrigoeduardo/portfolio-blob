import { Box, Flex, Text, Image, VStack, Divider, Center } from '@chakra-ui/react';
import Head from 'next/head';
import { Carousel } from '../components/Carousel';
import { Contact } from '../components/Contact';
import { Header } from '../components/Header';
import { ImageLink } from '../components/ImageLink';

export default function Home() {
  return (
    <>
      <Head>
        <title>Blob Team</title>
      </Head>

      <Box as="main">
        <Header />

        <Box position="relative" h={{ base: "85vh", md: "78vh" }} mb="8rem" maxWidth="80vw" marginX="auto">
          <Flex
            h="100%"
            direction="column"
            justify="center"
            align="center"
            position="relative"
          >
            <Text as="h1">
              <Image
                src="assets/images/blob-logo-new-dark.png"
                w={{ xsm: "44.8125rem", base: "53.775rem", md: "71.7rem" }}
                h={{ xsm: "15.6875rem", base:"18.825rem", md: "25.1rem" }}
                draggable="false"
              />

              <Text
                as="span"
                display="block"
                ml="50%"
                fontSize="1.8rem"
                letterSpacing="0.3rem"
                color="purple.300"
                style={{
                  filter: "brightness(0.85)"
                }}
                userSelect="none"
              >
                A WEB <br /> DEVELOPMENT TEAM
              </Text>
            </Text>
          </Flex>

          <VStack position="absolute" left="4" bottom="0" spacing="3.5rem">
            <ImageLink href="https://github.com/blobteam" imgSrc="assets/icons/github.svg" />

            <ImageLink href="https://www.instagram.com/blob.team/" imgSrc="assets/icons/instagram.svg" />

            <ImageLink href="https://www.linkedin.com/company/blobteam" imgSrc="assets/icons/linkedin.svg" />
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

        <Box
          id="portfolio"
          h="100vh"
          bg="gray.100"
        >
          <Carousel />
        </Box>

        <Box
          id="contato"
          h={{ base: "", md: "100vh" }}
          marginX="auto"
        >
          <Contact />
        </Box>
      </Box>
    </>
  );
}
