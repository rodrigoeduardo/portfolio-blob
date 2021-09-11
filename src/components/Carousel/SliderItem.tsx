import { Text, Box, Image } from '@chakra-ui/react';

interface SliderItemProps {
  isActive: boolean;
  title: string;
  description: string;
  imgSrc: string;
  link?: string;
}

export function SliderItem({
  isActive,
  title,
  description,
  imgSrc,
  link,
}: SliderItemProps) {
  return (
    <Box
      style={{
        filter: isActive ? '' : 'blur(6px)',
      }}
      cursor="pointer"
    >
      <Image
        src={imgSrc}
        borderRadius="5rem"
        boxSize={isActive ? '40rem' : '35rem'}
      />

      <Text color="gray.900" fontSize="4.8rem" fontWeight="extrabold">
        {title}
      </Text>

      <Text color="gray.900" fontSize="1.8rem" fontWeight="normal">
        {description}
      </Text>

      {!!link && (
        <Text
          as="a"
          href={link}
          color="gray.900"
          fontSize="1.8rem"
          fontWeight="semibold"
        >
          {link}
        </Text>
      )}
    </Box>
  );
}
