import { Box, Stack, Textarea, Button } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Input } from './Input';

type FormData = {
  name: string;
  email: string;
  message: string;
};

export function Form() {
  const { register, reset, handleSubmit, formState } = useForm();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log(data);
  };

  return (
    <Box as="form" mt="4rem" onSubmit={handleSubmit(onSubmit)}>
      <Stack direction="column" spacing="3rem">
        <Input
          name="name"
          type="text"
          placeholder="Seu nome"
          {...register('name')}
        />

        <Input
          name="email"
          type="email"
          placeholder="Seu melhor e-mail"
          {...register('email')}
        />

        <Textarea
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
          {...register('message')}
        />

        <Button
          bg="gray.900-80"
          w="46.6rem"
          h="5.5rem"
          type="submit"
          borderRadius="20px"
          fontSize="1.8rem"
          fontWeight="bold"
          _hover={{
            bg: 'purple.300',
          }}
        >
          ENVIAR
        </Button>
      </Stack>
    </Box>
  );
}
