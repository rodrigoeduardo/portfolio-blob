import { Flex, Image, Stack, FlexProps } from '@chakra-ui/react';
import { HeaderLink } from './HeaderLink';

interface HeaderProps extends FlexProps {}

export function Header({ ...rest }: HeaderProps) {
  return (
    <Flex
      as="header"
      maxWidth="80vw"
      marginX="auto"
      justify="space-between"
      align="center"
      px="4"
      mt="20"
      height="8.4rem"
      {...rest}
    >
      <Image src="assets/icons/blob-circle-gray.svg" alt="Blob Team logo" w="10rem" h="10rem" />

      <Stack direction="row" spacing={{ base: "5rem", md: "10rem" }} fontWeight="medium">
        <HeaderLink href="#portfolio">portfolio</HeaderLink>

        <HeaderLink href="#contato">contato</HeaderLink>
      </Stack>
    </Flex>
  );
}
