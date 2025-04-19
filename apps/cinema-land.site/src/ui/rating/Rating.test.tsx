import { render } from '@testing-library/react';
import { Rating } from './Rating';

import { StartSolidIcon } from '../../icons/StartSolidIcon';

jest.mock('../../icons/StartSolidIcon', () => {
  const originalModule = jest.requireActual('../../icons/StartSolidIcon');

  return {
    ...originalModule,
    StartSolidIcon: jest.fn(),
  };
});

describe('Rating', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should be rendered', async () => {
    const { container } = render(<Rating value={1} />);

    expect(container.firstChild).not.toBeNull();
  });

  test('should render 10 stars when rating is 1', async () => {
    render(<Rating value={1} />);

    expect(StartSolidIcon).toHaveBeenCalledTimes(10);
  });
});
