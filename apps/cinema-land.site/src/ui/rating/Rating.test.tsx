import { render } from '@testing-library/react';
import { Rating } from './Rating';

describe('Rating', () => {
  test('should be rendered', async () => {
    const { getByTestId } = render(<Rating value={1} />);

    expect(getByTestId('rating')).toBeInTheDocument();
  });
});
