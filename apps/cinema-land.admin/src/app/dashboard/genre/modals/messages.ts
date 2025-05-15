import { ErrorCode, Genre, Result, ToastMessage } from '@types';

export const createAddResultMessage = (
  result: Result<Genre>,
  name: string,
): ToastMessage => {
  if (result.success) {
    return {
      message: `Жанр "${result.payload.name}" добавлен`,
      type: 'success',
    };
  }

  return {
    message:
      result.error.code === ErrorCode.NotUnique
        ? `Жанр с названием "${name}" уже существует`
        : 'Ошибка добавления жанра',
    type: 'error',
  };
};

export const createEditResultMessage = (
  result: Result<Genre>,
  name: string,
): ToastMessage => {
  if (result.success) {
    return {
      message: `Жанр "${result.payload.name}" отредактирована`,
      type: 'success',
    };
  }

  return {
    message:
      result.error.code === ErrorCode.NotUnique
        ? `Жанр с названием "${name}" уже существует`
        : 'Ошибка редактирования жанра',
    type: 'error',
  };
};
