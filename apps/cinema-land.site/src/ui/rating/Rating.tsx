import { StartSolidIcon } from '../../icons/StartSolidIcon';

type Props = {
  value: number;
};

export function Rating({ value }: Props) {
  return (
    <div data-testid="rating">
      <StartSolidIcon />
      <StartSolidIcon />
      <StartSolidIcon />
      <StartSolidIcon />
      <StartSolidIcon />
      <StartSolidIcon />
      <StartSolidIcon />
      <StartSolidIcon />
      <StartSolidIcon />
      <StartSolidIcon />
    </div>
  );
}
