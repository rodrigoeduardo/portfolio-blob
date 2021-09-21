import { Flex, Stack } from "@chakra-ui/react";
import { ContactFormSection } from "./ContactFormSection";
import { TeamMember } from "./TeamMember";

export function Contact() {
    return (
        <Flex h="100%" justify="space-evenly" align="center">
            <Stack direction="column" spacing="8rem">
                <TeamMember
                    avatarUrl="assets/images/teamMembers/rodrigo.jpg"
                    name="Rodrigo Eduardo"
                    role="Co-Founder & CEO"
                    linkedinUrl="https://linkedin.com/in/rodrigoedb"
                    githubUrl="https://github.com/rodrigoeduardo"
                />

                <TeamMember
                    avatarUrl="assets/images/teamMembers/vinicius.jpg"
                    name="Vinicius Victor"
                    role="Co-Founder & CTO"
                    linkedinUrl="https://linkedin.com/in/martins-vinicius"
                    githubUrl="https://github.com/martinsvinicius"
                />

                <TeamMember
                    avatarUrl="assets/images/teamMembers/mariaeduarda.jpg"
                    name="Maria Eduarda"
                    role="Co-Founder & Manager"
                    linkedinUrl="https://www.linkedin.com/in/mariaeduluz"
                />
            </Stack>

            <ContactFormSection />
        </Flex>
    )
}