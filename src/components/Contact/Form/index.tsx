import { Box, Stack, Button } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';

import { EmailjsParams, emailjsApi } from '../../../services/emailjs';

import { Input } from './Input';
import { Textarea } from './Textarea';

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
    
    try {

      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
      const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string;

      const dataRequest: EmailjsParams = {
        service_id: serviceId,
        template_id: templateId,
        user_id: userId,
        template_params: data
      };

      await emailjsApi.post('/email/send', dataRequest);

      toast.success('Sucesso ao enviar o e-mail!');
      reset();
      
    } catch (error) {

      toast.error('Erro ao enviar o e-mail!');
      console.log(error);

    }
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
