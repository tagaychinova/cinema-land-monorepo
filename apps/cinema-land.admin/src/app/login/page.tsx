'use client';

import { Button, Card, Stack, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { login } from './actions';
import { Controller, useForm } from 'react-hook-form';

interface User {
  email: string;
  password: string;
}

export default function LoginPage() {
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<User>();

  const onSubmit = () => login(getValues());

  return (
    <Grid
      container
      justifyContent="center"
      sx={{ height: '100vh', background: '#dce2f275' }}
    >
      <Grid
        size={12}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Card elevation={9} sx={{ p: 4, width: '100%', maxWidth: '500px' }}>
          <Typography
            variant="h6"
            textAlign="center"
            color="textSecondary"
            mb={3}
          >
            Cinema Land. Admin Dashboard
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2}>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                defaultValue={''}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextField
                    label="Эл. почта"
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                    autoComplete="off"
                    sx={() => ({
                      width: '100%',
                    })}
                    {...(errors.email
                      ? {
                          error: true,
                          helperText: 'Обязательное поле',
                        }
                      : {})}
                  />
                )}
                name="email"
              />

              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                defaultValue={''}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextField
                    label="Пароль"
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                    autoComplete="off"
                    sx={() => ({
                      width: '100%',
                    })}
                    {...(errors.password
                      ? {
                          error: true,
                          helperText: 'Обязательное поле',
                        }
                      : {})}
                  />
                )}
                name="password"
              />

              <Button
                color="primary"
                variant="contained"
                size="large"
                fullWidth
                type="submit"
                disabled={isSubmitting}
              >
                Войти
              </Button>
            </Stack>
          </form>
        </Card>
      </Grid>
    </Grid>
  );
}
