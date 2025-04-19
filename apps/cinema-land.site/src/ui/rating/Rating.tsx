import React from 'react';
import { StartSolidIcon } from '../../icons/StartSolidIcon';
import { RatingStarData } from './type';
import { calculateRatingStars } from './calculateRatingStars';

type Props = {
  value: number;
};

const LEFT_STAR_OFFSET = 2;
const STAR_WIDTH = 20;

const FilledStar = () => (
  <StartSolidIcon className="text-yellow-600 dark:text-yellow-500" />
);

const PartiallyFilledStar = ({ filledPart }: { filledPart: number }) => {
  const filledWidth = Math.round(filledPart * STAR_WIDTH) + LEFT_STAR_OFFSET;

  return (
    <div className="relative">
      <StartSolidIcon />
      <div
        className="absolute top-0 left-0 overflow-hidden"
        style={{ width: `${filledWidth}px` }}
      >
        <FilledStar />
      </div>
    </div>
  );
};

function notReachable(_: never): never {
  throw new Error(`Should never be reached ${_}`);
}

function renderStar(data: RatingStarData) {
  switch (data.type) {
    case 'empty':
      return <StartSolidIcon />;
    case 'filled':
      return <FilledStar />;
    case 'partially_filled':
      return <PartiallyFilledStar filledPart={data.filledPart} />;

    default:
      return notReachable(data);
  }
}

export function Rating({ value }: Props) {
  const stars = calculateRatingStars(value);

  return (
    <div className="flex">
      {stars.map((star, index) => (
        <React.Fragment key={index}>{renderStar(star)}</React.Fragment>
      ))}
    </div>
  );
}
