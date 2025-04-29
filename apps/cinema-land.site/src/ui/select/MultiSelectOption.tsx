import { Checkbox, ListboxOption } from '@headlessui/react';
import { Option } from './type';
import { CheckIcon } from '@heroicons/react/20/solid';

type Props<T extends Option> = {
  option: T | null;
  title: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

export function MultiSelectOption<T extends Option>({
  option,
  title,
  checked,
  onChange,
}: Props<T>) {
  return (
    <ListboxOption
      value={option}
      className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10"
    >
      <Checkbox
        checked={checked}
        onChange={onChange}
        className="group size-6 rounded-md bg-white/10 p-1 ring-1 ring-white/15 ring-inset data-[checked]:bg-white"
      >
        <CheckIcon className="hidden size-4 fill-black group-data-[checked]:block" />
      </Checkbox>
      <div className="text-sm/6 text-white">{title}</div>
    </ListboxOption>
  );
}
