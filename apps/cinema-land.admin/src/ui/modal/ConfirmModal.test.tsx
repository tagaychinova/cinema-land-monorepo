import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ConfirmModal from './ConfirmModal';

describe('ConfirmModal', () => {
  test('should be rendered', async () => {
    const { getByTestId } = render(
      <ConfirmModal
        title="Confirm action"
        handleCancel={() => {}}
        handleConfirm={() => {}}
      >
        <div>Please confirm action</div>
      </ConfirmModal>
    );

    expect(getByTestId('dialog')).toBeInTheDocument();
  });
});

test('displays confirm modal', async () => {
  // ARRANGE
  const { container, getByText, getByTestId } = render(
    <ConfirmModal
      title="Confirm action"
      handleCancel={() => {}}
      handleConfirm={() => {}}
    >
      <div>Please confirm action</div>
    </ConfirmModal>
  );

  expect(getByTestId('dialog')).toBeInTheDocument();

  // console.log(prettyDOM(getByTestId('dialog')));

  const title = getByTestId('dialog-title');
  // ASSERT
  expect(title).toHaveTextContent('Confirm action');
});
