import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react';
import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';

interface InputProps extends ChakraInputProps {
  name: string;
  type: string;
  placeholder: string;
  error?: FieldError;
}

const InputComponent: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, type, placeholder, ...rest },
  ref
) => {
  return (
    <ChakraInput
      name={name}
      type={type}
      placeholder={placeholder}
      _placeholder={{
        color: 'gray.100-50',
      }}
      _hover={{
        borderColor: 'purple.300',
      }}
      borderColor="transparent"
      focusBorderColor="purple.300"
      bg="gray.900-80"
      maxW="46.6rem"
      borderRadius="20px"
      h="5.5rem"
      py="1.7rem"
      px="3rem"
      fontSize="1.8rem"
      ref={ref}
      {...rest}
    />
  );
};

export const Input = forwardRef(InputComponent);