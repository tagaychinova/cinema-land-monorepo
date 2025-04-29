'use client';

import { Listbox, ListboxButton, ListboxOptions } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';

type Props<T> = {
  title: string;
  multiple?: boolean;
  value: T;
  setValue: (selected: T) => void;
  children: React.ReactNode;
};

export function BaseSelect<T>({
  title,
  multiple,
  value,
  setValue,
  children,
}: Props<T>) {
  return (
    <Listbox value={value} onChange={setValue} multiple={multiple}>
      <ListboxButton
        className={clsx(
          'relative block w-38 rounded-lg bg-white/5 py-1.5 pr-8 pl-3 text-left text-sm/6 text-white',
          'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25',
        )}
      >
        {title}
        <ChevronDownIcon
          className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60"
          aria-hidden="true"
        />
      </ListboxButton>
      <ListboxOptions
        anchor="bottom"
        transition
        className={clsx(
          'w-46 rounded-xl border border-white/5 bg-white dark:bg-gray-900 p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none',
          'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0',
        )}
      >
        {children}
      </ListboxOptions>
    </Listbox>
  );
}
