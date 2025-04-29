import { render, screen, fireEvent } from '@testing-library/react';
import { MultiSelect } from './MultiSelect';

const mockSetValue = jest.fn();

const options = [
  { id: 1, name: 'Option 1' },
  { id: 2, name: 'Option 2' },
];

describe('MultiSelect', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders with title and options', () => {
    render(
      <MultiSelect
        title="Test MultiSelect"
        options={options}
        value={[]}
        setValue={mockSetValue}
      />,
    );

    const select = screen.getByText('Test MultiSelect');

    expect(select).toBeInTheDocument();

    fireEvent.click(select);

    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
  });

  test('selects an option when checkbox is clicked', () => {
    render(
      <MultiSelect
        title="Test MultiSelect"
        options={options}
        value={[]}
        setValue={mockSetValue}
      />,
    );

    const select = screen.getByText('Test MultiSelect');
    fireEvent.click(select);

    const checkbox = screen.getByText('Option 1');
    fireEvent.click(checkbox);

    expect(mockSetValue).toHaveBeenCalledWith([{ id: 1, name: 'Option 1' }]);
  });

  test('deselects an option when checkbox is clicked again', () => {
    render(
      <MultiSelect
        title="Test MultiSelect"
        options={options}
        value={[options[0]]} // Initially selected Option 1
        setValue={mockSetValue}
      />,
    );

    const select = screen.getByText('Test MultiSelect (1)');
    fireEvent.click(select);

    const checkbox = screen.getByText('Option 1');
    fireEvent.click(checkbox);

    expect(mockSetValue).toHaveBeenCalledWith([]);
  });

  test('resets selection when reset option is clicked', () => {
    render(
      <MultiSelect
        title="Test MultiSelect"
        resetOptionTitle="Reset"
        options={options}
        value={[options[0]]} // Initially selected Option 1
        setValue={mockSetValue}
      />,
    );

    const select = screen.getByText('Test MultiSelect (1)');
    fireEvent.click(select);

    const resetCheckbox = screen.getByText('Reset');

    fireEvent.click(resetCheckbox);

    expect(mockSetValue).toHaveBeenCalledWith([]);
  });

  test('displays the correct title with selected count', () => {
    const mockValue = [options[0]];

    render(
      <MultiSelect
        title="Test MultiSelect"
        options={options}
        value={mockValue} // Initially selected Option 1
        setValue={mockSetValue}
      />,
    );

    expect(screen.getByText('Test MultiSelect (1)')).toBeInTheDocument();
  });
});
