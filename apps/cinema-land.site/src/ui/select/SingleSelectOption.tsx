import { ListboxOption } from '@headlessui/react';
import { Option } from './type';
import { CheckIcon } from '@heroicons/react/20/solid';

type Props<T extends Option> = {
  option: T | null;
  title: string;
};

export function SingleSelectOption<T extends Option>({
  option,
  title,
}: Props<T>) {
  return (
    <ListboxOption
      value={option}
      className="group flex cursor-default items-center justify-between rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10"
    >
      <div className="text-sm/6 text-white">{title}</div>
      <CheckIcon className="invisible size-4 fill-white group-data-[selected]:visible" />
    </ListboxOption>
  );
}
