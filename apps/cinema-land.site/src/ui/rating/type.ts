export type RatingStarData =
  | {
      type: 'empty' | 'filled';
    }
  | {
      type: 'partially_filled';
      filledPart: number;
    };
