import React from 'react';
import { StartSolidIcon } from '../../icons/StartSolidIcon';

type Props = {
  value: number;
};

const LEFT_STAR_OFFSET = 2;
const STAR_WIDTH = 20;

function getStar(starIndex: number, value: number) {
  if (starIndex < value) {
    if (starIndex + 1 > value) {
      const fillWidth = Math.round(
        (value - Math.floor(value)) * STAR_WIDTH + LEFT_STAR_OFFSET,
      );
      return (
        <div className="relative">
          <StartSolidIcon />
          <div
            className="absolute top-0 left-0 overflow-hidden"
            style={{ width: `${fillWidth}px` }}
          >
            <StartSolidIcon className="text-yellow-600 dark:text-yellow-500" />
          </div>
        </div>
      );
    }

    return <StartSolidIcon className="text-yellow-600 dark:text-yellow-500" />;
  }

  return <StartSolidIcon />;
}

export function Rating({ value }: Props) {
  return (
    <div data-testid="rating" className="flex">
      {[...Array(10).keys()].map((index) => (
        <React.Fragment key={index}>{getStar(index, value)}</React.Fragment>
      ))}
    </div>
  );
}
