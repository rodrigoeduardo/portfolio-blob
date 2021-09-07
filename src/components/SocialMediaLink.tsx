import { Image, Link, LinkProps } from "@chakra-ui/react";

interface SocialMediaLinkProps extends LinkProps {
    href: string,
    imgSrc: string
}

export function SocialMediaLink({ href, imgSrc, ...rest }: SocialMediaLinkProps) {
    return (
        <Link
            href={href}
            _focus={{ boxShadow: 'none' }}
            transitionProperty="all"
            transitionDelay="2"
            _hover={{ transform: 'scale(1.1)' }}
            {...rest}
          >
            <Image src={imgSrc} />
        </Link>
    )
}