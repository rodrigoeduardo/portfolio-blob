import { Flex, Text, Box, Image, Button } from '@chakra-ui/react';

interface SliderItemProps {
  isActive: boolean;
  title: string;
  description: string;
  imgSrc: string;
  link?: string;
}

export function SliderItem({
  isActive,
  title,
  description,
  imgSrc,
  link,
}: SliderItemProps) {
  return (
    <Flex
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      style={{
        filter: isActive ? '' : 'blur(3px)',
      }}
      cursor="pointer"
    >
      <Image
        src={imgSrc}
        borderRadius="5rem"
        boxSize={isActive ? '40rem' : '35rem'}
      />

      <Text
        color="gray.900"
        fontSize="4.8rem"
        fontWeight="black"
        letterSpacing="5px"
        mt="8"
      >
        {title}
      </Text>

      <Text color="gray.900" fontSize="2rem" fontWeight="normal" maxW="400px">
        {description}
      </Text>

      {!!link && (
        <Button
          as="a"
          href={link}
          target="_blank"
          bg="purple.800"
          p="3.5rem 4rem"
          borderRadius="20px"
          fontSize="2.4rem"
          fontWeight="medium"
          mt="2rem"
          transitionProperty="all"
          transitionDelay="2"
          _hover={{
            filter: "brightness(1.2)"
          }}
        >
            VER PROJETO
        </Button>
      )}
    </Flex>
  );
}
