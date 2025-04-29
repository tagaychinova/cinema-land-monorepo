'use client';

import { useState } from 'react';
import { MultiSelect, SingleSelect } from '../select';

type Option = {
  id: number;
  name: string;
};

const genre = [
  { id: 1, name: 'Боевик' },
  { id: 2, name: 'Детектив' },
  { id: 3, name: 'Документальный' },
  { id: 4, name: 'Драма' },
  { id: 5, name: 'История' },
];

const ages = [
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
  const [selectedGenre, setSelectedGenre] = useState<Option[]>([]);
  const [selectedAge, setSelectedAge] = useState<Option | null>(null);
  const [selectedYear, setSelectedYear] = useState<Option[]>([]);

  return (
    <div className="flex gap-8">
      <MultiSelect
        title="Жанр"
        resetOptionTitle="Любой жанр"
        options={genre}
        value={selectedGenre}
        setValue={setSelectedGenre}
      />
      <MultiSelect
        title="Год выпуска"
        resetOptionTitle="все года"
        options={yearOfIssues}
        value={selectedYear}
        setValue={setSelectedYear}
      />
      <SingleSelect
        title="Все возраста"
        resetOptionTitle="Все возраста"
        options={ages}
        value={selectedAge}
        setValue={setSelectedAge}
      />
    </div>
  );
}
