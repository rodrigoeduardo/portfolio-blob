import { Flex, Text } from "@chakra-ui/react";
import { Form } from "./Form";

export function ContactFormSection() {
    return (
        <Flex align="center" flexDir="column" bg="purple.800" py="4.2rem" px={{ base: "4rem", sm: "7rem" }} my={{ base: "8rem", md: "0" }} borderRadius="20px">
            <Text
                fontSize="3.6rem"
                fontWeight="bold"
                maxW="46.6rem"
                textAlign="center"
            >
                Entre em contato para desenvolvermos sua ideia!
            </Text>
            
            <Form />
        </Flex>
    )
}