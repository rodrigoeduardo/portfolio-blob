import { Box, Stack, Input, Text, Button, Flex, Textarea } from "@chakra-ui/react";

export function ContactForm() {
    return (
        <Flex align="center" flexDir="column" bg="purple.800" py="4.2rem" px="7rem" borderRadius="20px">
            <Text
                fontSize="3.6rem"
                fontWeight="bold"
                maxW="46.6rem"
                textAlign="center"
            >
                Entre em contato para desenvolvermos sua ideia!
            </Text>
            <Box as="form" mt="4rem">
                <Stack direction="column" spacing="3rem">
                    <Input
                        name="name"
                        placeholder="Seu nome"
                        _placeholder={{
                            color: 'gray.100-50'
                        }}
                        border="none"
                        focusBorderColor="purple.300"
                        bg="gray.900-80"
                        maxW="46.6rem"
                        borderRadius="20px"
                        h="5.5rem"
                        py="1.7rem"
                        px="3rem"
                        fontSize="1.8rem"
                    />

                    <Input
                        name="email"
                        placeholder="Seu melhor e-mail"
                        _placeholder={{
                            color: 'gray.100-50'
                        }}
                        border="none"
                        focusBorderColor="purple.300"
                        bg="gray.900-80"
                        maxW="46.6rem"
                        borderRadius="20px"
                        h="5.5rem"
                        py="1.7rem"
                        px="3rem"
                        fontSize="1.8rem"
                    />

                    <Textarea
                        name="message"
                        placeholder="Nos conte o que você ou sua empresa precisa"
                        _placeholder={{
                            color: 'gray.100-50'
                        }}
                        border="none"
                        focusBorderColor="purple.300"
                        bg="gray.900-80"
                        maxW="46.6rem"
                        minH="22rem"
                        borderRadius="20px"
                        py="1.7rem"
                        px="3rem"
                        fontSize="1.8rem"
                        resize="none"
                    />

                    <Button
                        bg="gray.900-80"
                        w="46.6rem"
                        h="5.5rem"
                        borderRadius="20px"
                        fontSize="1.8rem"
                        fontWeight="bold"
                        _hover={{
                            bg: "purple.300"
                        }}
                    >
                        ENVIAR
                    </Button>
                </Stack>
            </Box>
        </Flex>
    )
}