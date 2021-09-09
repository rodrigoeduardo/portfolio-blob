import { Flex, Image, Stack, FlexProps } from '@chakra-ui/react';
import { HeaderLink } from './HeaderLink';

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
        <HeaderLink href="#portfolio">portfolio</HeaderLink>

        <HeaderLink href="#contato">contato</HeaderLink>
      </Stack>
    </Flex>
  );
}
