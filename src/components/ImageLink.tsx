import { Image, Link, LinkProps } from "@chakra-ui/react";

interface ImageLinkProps extends LinkProps {
    href: string,
    imgSrc: string
}

export function ImageLink({ href, imgSrc, ...rest }: ImageLinkProps) {
    return (
        <Link
            href={href}
            _focus={{ boxShadow: 'none' }}
            transitionProperty="all"
            transitionDelay="2"
            target="_blank"
            _hover={{ transform: "scale(1.1)" }}
            {...rest}
          >
            <Image src={imgSrc} />
        </Link>
    )
}
