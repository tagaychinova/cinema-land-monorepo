import { RatingStarData } from './type';

const START_COUNT = 10;

export function calculateRatingStar(
  starIndex: number,
  value: number,
): RatingStarData {
  if (starIndex < value && starIndex + 1 > value) {
    return {
      type: 'partially_filled',
      filledPart: value - Math.floor(value),
    };
  }

  return {
    type: starIndex < value ? 'filled' : 'empty',
  };
}

export function calculateRatingStars(value: number): RatingStarData[] {
  const result: RatingStarData[] = [...Array(START_COUNT).keys()].map(
    (starIndex) => calculateRatingStar(starIndex, value),
  );

  return result;
}
