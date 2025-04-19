import { calculateRatingStars } from './calculateRatingStars';
import { RatingStarData } from './type';
describe('calculateRatingStars', () => {
  test('all stars should be empty if rating less then 0', async () => {
    const actualStars = calculateRatingStars(-1);

    const expectedStars: RatingStarData[] = [
      { type: 'empty' },
      { type: 'empty' },
      { type: 'empty' },
      { type: 'empty' },
      { type: 'empty' },
      { type: 'empty' },
      { type: 'empty' },
      { type: 'empty' },
      { type: 'empty' },
      { type: 'empty' },
    ];

    expect(actualStars).toEqual(expectedStars);
  });

  test('all stars should be filled if rating more then 10', async () => {
    const actualStars = calculateRatingStars(11);

    const expectedStars: RatingStarData[] = [
      { type: 'filled' },
      { type: 'filled' },
      { type: 'filled' },
      { type: 'filled' },
      { type: 'filled' },
      { type: 'filled' },
      { type: 'filled' },
      { type: 'filled' },
      { type: 'filled' },
      { type: 'filled' },
    ];

    expect(actualStars).toEqual(expectedStars);
  });
});
