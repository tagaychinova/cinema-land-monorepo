'use client';

import { BaseSelect } from './BaseSelect';
import { SingleSelectOption } from './SingleSelectOption';
import { Fragment } from 'react';

type Option = {
  id: number;
  name: string;
};

type Props<T extends Option> = {
  title: string;
  resetOptionTitle: string;
  options: T[];
  value: T | null;
  setValue: (selected: T | null) => void;
};

export function SingleSelect<T extends Option>({
  title,
  resetOptionTitle,
  options,
  value,
  setValue,
}: Props<T>) {
  return (
    <BaseSelect
      title={value ? value.name : title}
      value={value}
      setValue={setValue}
    >
      {resetOptionTitle && (
        <SingleSelectOption option={null} title={resetOptionTitle} />
      )}
      {options.map((option) => (
        <Fragment key={option.id}>
          <SingleSelectOption option={option} title={option.name} />
        </Fragment>
      ))}
    </BaseSelect>
  );
}
