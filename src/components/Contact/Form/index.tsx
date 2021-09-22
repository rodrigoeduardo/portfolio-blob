import { Box, Stack, Textarea, Button } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from './Input';

type FormData = {
  name: string;
  email: string;
  message: string;
};

const sendMessageFormSchema = Yup.object().shape({
  name: Yup.string().required('Nome obrigatório'),
  email: Yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  message: Yup.string().required('Mensagem obrigatória')
})

export function Form() {
  const { register, reset, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(sendMessageFormSchema)
  } as any);

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
          error={errors.name}
          {...register('name')}
        />

        <Input
          name="email"
          type="email"
          placeholder="Seu melhor e-mail"
          error={errors.email}
          {...register('email')}
        />

        <Textarea
          error={errors.message}
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
