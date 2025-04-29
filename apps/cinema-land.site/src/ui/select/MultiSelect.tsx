'use client';

import { BaseSelect } from './BaseSelect';
import { Fragment } from 'react';
import { Option } from './type';
import { MultiSelectOption } from './MultiSelectOption';

type Props<T extends Option> = {
  title: string;
  resetOptionTitle?: string;
  options: T[];
  value: T[];
  setValue: (selected: T[]) => void;
};

const RESET_OPTION_VALUE = null;

export function MultiSelect<T extends Option>({
  title,
  resetOptionTitle,
  options,
  value,
  setValue,
}: Props<T>) {
  const handleCheckboxClick = (checked: boolean, selected: T) => {
    setValue(
      checked
        ? [...value, selected]
        : value.filter(({ id }) => id !== selected.id),
    );
  };

  const handleResetClick = () => setValue([]);

  const handleSetValueClick = (selected: T[]) => {
    const isContainedResetValue = selected.some(
      (v) => v === RESET_OPTION_VALUE,
    );

    setValue(isContainedResetValue ? [] : selected);
  };

  return (
    <BaseSelect
      title={value.length > 0 ? `${title} (${value.length})` : title}
      value={value}
      setValue={handleSetValueClick}
      multiple
    >
      {resetOptionTitle && (
        <MultiSelectOption
          option={RESET_OPTION_VALUE}
          title={resetOptionTitle}
          checked={value.length === 0}
          onChange={handleResetClick}
        />
      )}
      {options.map((option) => (
        <Fragment key={option.id}>
          <MultiSelectOption
            option={option}
            title={option.name}
            checked={value.some((v) => v.id === option.id)}
            onChange={(checked) => handleCheckboxClick(checked, option)}
          />
        </Fragment>
      ))}
    </BaseSelect>
  );
}
