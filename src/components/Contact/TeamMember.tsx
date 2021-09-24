import { Flex, Avatar, Text } from "@chakra-ui/react";
import { ImageLink } from "../ImageLink";

interface TeamMemberProps {
    name: string,
    avatarUrl: string,
    role: string,
    linkedinUrl: string,
    githubUrl?: string
}

export function TeamMember({ avatarUrl, name, role, linkedinUrl, githubUrl }: TeamMemberProps) {
    return (
        <Flex>
            <Avatar w="15.7rem" h="15.7rem" name={name} src={avatarUrl} />

            <Flex flexDir="column" ml="2.8rem">
                <Text color="gray.100" fontSize="3.6rem" fontWeight="bold">{name}</Text>

                <Text color="purple.300" fontSize="2.4rem" fontWeight="medium">{role}</Text>

                <Flex mt="2.5rem">
                    <ImageLink href={linkedinUrl} imgSrc="assets/icons/linkedin.svg" />
                    {!!githubUrl && <ImageLink href={githubUrl} imgSrc="assets/icons/github.svg" ml="2.8rem" />}
                </Flex>
            </Flex>
        </Flex>
    )
}