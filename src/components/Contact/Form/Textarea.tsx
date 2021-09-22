import {
    FormControl,
    FormErrorMessage,
    Textarea as ChakraTextarea,
    TextareaProps as ChakraTextareaProps,
  } from '@chakra-ui/react';
  import { forwardRef, ForwardRefRenderFunction } from 'react';
  import { FieldError } from 'react-hook-form';
  
  interface TextareaProps extends ChakraTextareaProps {
    error?: FieldError;
  }
  
  const TextareaComponent: ForwardRefRenderFunction<HTMLTextAreaElement, TextareaProps> = (
    { error, ...rest },
    ref
  ) => {
    return (
      <FormControl isInvalid={!!error}>
        <ChakraTextarea
          name="message"
          placeholder="Nos conte o que você ou sua empresa precisa"
          _placeholder={{
            color: 'gray.100-50',
          }}
          borderColor="transparent"
          focusBorderColor="purple.300"
          bg="gray.900-80"
          maxW="46.6rem"
          minH="22rem"
          borderRadius="20px"
          py="1.7rem"
          px="3rem"
          fontSize="1.8rem"
          resize="none"
          ref={ref}
          {...rest}
        />
  
        { !!error && (
            <FormErrorMessage fontSize="1.5rem">{error.message}</FormErrorMessage>
        ) }
      </FormControl>
    );
  };
  
  export const Textarea = forwardRef(TextareaComponent);