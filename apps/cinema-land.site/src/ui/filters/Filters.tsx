'use client';

import { Option } from '@types';
import { MultiSelect, SingleSelect } from '../select';
import { useAppDispatch, useAppSelector } from '@lib/hooks';
import { setGenreFilter, setYearFilter, setAgeFilter } from '@lib/features';
import { SelectedFilters } from './SelectedFilters';

const genre = [
  { id: 1, name: 'Боевик' },
  { id: 2, name: 'Детектив' },
  { id: 3, name: 'Документальный' },
  { id: 4, name: 'Драма' },
  { id: 5, name: 'История' },
];

const ages: Option[] = [
  { id: 1, name: 'до 12' },
  { id: 2, name: 'до 16' },
  { id: 3, name: 'до 18' },
  { id: 4, name: '18+' },
];

const yearOfIssues: Option[] = [
  { id: 1, name: 'до 1990' },
  { id: 2, name: '1990 — 2000' },
  { id: 3, name: '2000 — 2010' },
  { id: 4, name: '2010 — сегодня' },
];

export function Filters() {
  const filters = useAppSelector((state) => state.filters);

  const dispatch = useAppDispatch();

  const setSelectedGenre = (selected: Option[]) =>
    dispatch(setGenreFilter(selected));

  const setSelectedYear = (selected: Option[]) =>
    dispatch(setYearFilter(selected));

  const setSelectedAge = (selected: Option | null) =>
    dispatch(setAgeFilter(selected));

  return (
    <>
      <div className="flex gap-8 mb-5 mt-5">
        <MultiSelect
          title="Жанр"
          resetOptionTitle="Любой жанр"
          options={genre}
          value={filters.genreFilter}
          setValue={setSelectedGenre}
        />
        <MultiSelect
          title="Год выпуска"
          resetOptionTitle="все года"
          options={yearOfIssues}
          value={filters.yearFilter}
          setValue={setSelectedYear}
        />
        <SingleSelect
          title="Все возраста"
          resetOptionTitle="Все возраста"
          options={ages}
          value={filters.ageFilter}
          setValue={setSelectedAge}
        />
      </div>
      <SelectedFilters />
    </>
  );
}
