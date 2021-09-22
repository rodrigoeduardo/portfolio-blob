import { Flex } from '@chakra-ui/layout';
import { Slider } from './Slider';

export function Carousel() {
  return (
    <Flex textAlign="center" alignItems="center" justifyContent="center" h="100%" flexDir="column">
      <Slider />
    </Flex>
  );
}
