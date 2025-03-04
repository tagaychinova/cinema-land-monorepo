import { z } from 'zod';

export const loginFormSchema = z.object({
  email: z
    .string()
    .nonempty({ message: 'Обязательное поле' })
    .email({ message: 'Неверный формат эл. почты' }),
  password: z
    .string()
    .nonempty({ message: 'Обязательное поле' })
    .min(4, { message: 'Пароль слишком короткий' }),
});
