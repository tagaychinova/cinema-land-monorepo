import {
  closeAgeFilter,
  closeGenreFilter,
  closeYearFilter,
} from '@lib/features';
import { useAppDispatch, useAppSelector } from '@lib/hooks';
import { Tag } from '../tag/Tag';

export function SelectedFilters() {
  const filters = useAppSelector((state) => state.filters);

  const dispatch = useAppDispatch();

  const handleCloseGenre = (id: number) => dispatch(closeGenreFilter(id));
  const handleCloseYear = (id: number) => dispatch(closeYearFilter(id));
  const handleCloseAge = () => dispatch(closeAgeFilter());

  const hasSelectedFilters =
    filters.genreFilter.length ||
    filters.yearFilter.length ||
    filters.ageFilter;

  if (!hasSelectedFilters) {
    return null;
  }

  return (
    <div className="flex items-center gap-8 mb-5 mt-5 text-gray-500 dark:text-gray-400">
      <span>Найдено: 35</span>
      {filters.genreFilter.map(({ id, name }) => (
        <Tag key={id} title={name} onClose={() => handleCloseGenre(id)} />
      ))}
      {filters.yearFilter.map(({ id, name }) => (
        <Tag key={id} title={name} onClose={() => handleCloseYear(id)} />
      ))}
      {filters.ageFilter && (
        <Tag title={filters.ageFilter.name} onClose={() => handleCloseAge()} />
      )}
    </div>
  );
}
