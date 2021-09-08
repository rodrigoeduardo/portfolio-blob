import { ReactNode } from "react";
import { Link, LinkProps } from "@chakra-ui/react";

interface HeaderLinkProps extends LinkProps {
    href: string,
    children: ReactNode
}

export function HeaderLink({ href, children, ...rest }: HeaderLinkProps) {
    return (
        <Link
          href={href}
          fontSize="2.4rem"
          textTransform="uppercase"
          fontWeight="bold"
          style={{ textDecoration: 'none', transition: 'all .2s' }}
          _hover={{
            filter: 'brightness(0.9)',
          }}
          {...rest}
        >
          {children}
        </Link>
    )
}
