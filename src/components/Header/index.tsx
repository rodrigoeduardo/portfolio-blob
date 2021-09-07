import { Flex, Image, Link, Stack, FlexProps } from '@chakra-ui/react';

interface HeaderProps extends FlexProps {}

export function Header({ ...rest }: HeaderProps) {
  return (
    <Flex
      as="header"
      maxWidth="1440px"
      marginX="auto"
      justify="space-between"
      align="center"
      px="4"
      mt="20"
      height="8.4rem"
      {...rest}
    >
      <Image src="assets/icons/blob-circle-black.svg" w="80px" h="80px" />

      <Stack direction="row" spacing="10rem" fontWeight="medium">
        <Link
          href="#portfolio"
          fontSize="2.4rem"
          textTransform="uppercase"
          fontWeight="bold"
          style={{ textDecoration: 'none', transition: 'all .2s' }}
          _hover={{
            filter: 'brightness(0.9)',
          }}
        >
          portfolio
        </Link>

        <Link
          href="#contato"
          fontSize="2.4rem"
          textTransform="uppercase"
          fontWeight="bold"
          style={{ textDecoration: 'none', transition: 'all .2s' }}
          _hover={{
            filter: 'brightness(0.9)',
          }}
        >
          contato
        </Link>
      </Stack>
    </Flex>
  );
}
