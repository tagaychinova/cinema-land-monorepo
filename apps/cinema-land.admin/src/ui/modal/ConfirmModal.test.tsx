import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ConfirmModal from './ConfirmModal';

describe('ConfirmModal', () => {
  const title = 'Подтвердите действие';
  const childrenText = 'Вы уверены, что хотите продолжить?';

  const handleCancel = jest.fn();
  const handleConfirm = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('отображает заголовок и содержимое', () => {
    render(
      <ConfirmModal
        title={title}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      >
        {childrenText}
      </ConfirmModal>,
    );

    // Проверка отображения заголовка
    expect(screen.getByText(title)).toBeInTheDocument();

    // Проверка отображения содержимого
    expect(screen.getByText(childrenText)).toBeInTheDocument();

    // Проверка наличия кнопок с правильными названиями
    expect(screen.getByText('Отмена')).toBeInTheDocument();
    expect(screen.getByText('Да')).toBeInTheDocument();
  });

  test('при клике на кнопку "Отмена" вызывается handleCancel', () => {
    render(
      <ConfirmModal
        title={title}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      >
        {childrenText}
      </ConfirmModal>,
    );

    const cancelButton = screen.getByText('Отмена');
    fireEvent.click(cancelButton);
    expect(handleCancel).toHaveBeenCalledTimes(1);
  });

  test('при клике на кнопку "Да" вызывается handleConfirm', () => {
    render(
      <ConfirmModal
        title={title}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      >
        {childrenText}
      </ConfirmModal>,
    );

    const okButton = screen.getByText('Да');
    fireEvent.click(okButton);
    expect(handleConfirm).toHaveBeenCalledTimes(1);
  });

  test('при клике на иконку закрытия вызывается handleCancel', () => {
    render(
      <ConfirmModal
        title={title}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      >
        {childrenText}
      </ConfirmModal>,
    );

    const closeButton = screen.getByLabelText('close');
    fireEvent.click(closeButton);
    expect(handleCancel).toHaveBeenCalledTimes(1);
  });
});
