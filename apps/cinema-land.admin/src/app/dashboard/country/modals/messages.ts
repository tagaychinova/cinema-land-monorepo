import { ErrorCode, Country, Result, ToastMessage } from '@types';

export const createAddResultMessage = (
  result: Result<Country>,
  name: string,
): ToastMessage => {
  if (result.success) {
    return {
      message: `Страна "${result.payload.name}" добавлена`,
      type: 'success',
    };
  }

  return {
    message:
      result.error.code === ErrorCode.NotUnique
        ? `Страна с названием "${name}" уже существует`
        : 'Ошибка добавления страны',
    type: 'error',
  };
};

export const createEditResultMessage = (
  result: Result<Country>,
  name: string,
): ToastMessage => {
  if (result.success) {
    return {
      message: `Страна "${result.payload.name}" отредактирована`,
      type: 'success',
    };
  }

  return {
    message:
      result.error.code === ErrorCode.NotUnique
        ? `Страна с названием "${name}" уже существует`
        : 'Ошибка редактирования страны',
    type: 'error',
  };
};
