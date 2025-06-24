'use client';

import {
  Box,
  Button,
  Card,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import { login } from './actions';
import { Controller, useForm } from 'react-hook-form';
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { User } from './type';
import { loginFormSchema } from '@validation';
import { zodResolver } from '@hookform/resolvers/zod';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');

  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<User>({
    resolver: zodResolver(loginFormSchema),
  });

  const onSubmit = async () => {
    const loginResult = await login(getValues());
    if (loginResult?.isError) {
      setLoginError(
        loginResult.isUserNotFoundError
          ? 'Пользователь с такой эл. почтой и паролем не найден'
          : 'Ошибка',
      );
    }
  };

  const resetLoginError = () => setLoginError('');

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

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
                defaultValue={''}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextField
                    label="Эл. почта"
                    onBlur={onBlur}
                    onChange={(e) => {
                      onChange(e);
                      resetLoginError();
                    }}
                    value={value}
                    autoComplete="off"
                    sx={() => ({
                      width: '100%',
                    })}
                    {...(errors.email
                      ? {
                          error: true,
                          helperText: errors.email.message,
                        }
                      : {})}
                  />
                )}
                name="email"
              />

              <Controller
                control={control}
                defaultValue={''}
                render={({ field: { onChange, onBlur, value } }) => (
                  <FormControl
                    sx={{ width: '100%' }}
                    variant="outlined"
                    error={!!errors.password}
                  >
                    <InputLabel htmlFor="outlined-adornment-password">
                      Пароль
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type={showPassword ? 'text' : 'password'}
                      onBlur={onBlur}
                      onChange={(e) => {
                        onChange(e);
                        resetLoginError();
                      }}
                      value={value}
                      autoComplete="off"
                      aria-describedby="password-error-text"
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label={
                              showPassword ? 'скрыть пароль' : 'показать пароль'
                            }
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            onMouseUp={handleMouseUpPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Пароль"
                    />
                    {errors.password && (
                      <FormHelperText id="password-error-text">
                        {errors.password.message}
                      </FormHelperText>
                    )}
                  </FormControl>
                )}
                name="password"
              />
              {loginError && (
                <Box sx={{ color: 'error.main' }}>{loginError}</Box>
              )}
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
