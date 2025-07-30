import { MovieType } from '@types';
import { z } from 'zod';

const MIN_YEAR_OF_ISSUE = 1888;
const MAX_YEAR_OF_ISSUE = 2050;

const MIN_RATING = 0;
const MAX_RATING = 10;

export const movieFormSchema = z.object({
  id: z.string(),
  title: z.string().nonempty('Значение не может быть пустым'),
  movieType: z.number().refine((val) => !!val, 'Выберите значение'),
  countryIds: z.array(z.number()),
  genreIds: z.array(z.number()),
  durationMinutes: z.number(),
  ageRating: z.number().refine((val) => !!val, 'Выберите значение'),

  yearOfIssue: z
    .number()
    .min(MIN_YEAR_OF_ISSUE, {
      message: `Значение не может быть меньше ${MIN_YEAR_OF_ISSUE}`,
    })
    .max(MAX_YEAR_OF_ISSUE, {
      message: `Значение не может быть больше ${MAX_YEAR_OF_ISSUE}`,
    }),

  coverFileId: z.number().optional(),

  rating: z
    .number()
    .min(MIN_RATING, { message: `Значение не может быть меньше ${MIN_RATING}` })
    .max(MAX_RATING, {
      message: `Значение не может быть больше ${MAX_RATING}`,
    }),

  description: z.string().nonempty('Значение не может быть пустым'),
});
