import { Button } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/20/solid';
import React from 'react';

type Props = {
  title: string;
  onClose: () => void;
};

export function Tag({ title, onClose }: Props) {
  return (
    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 bg-white/10 rounded-lg px-2 py-1.5">
      {title}
      <Button onClick={onClose}>
        <XMarkIcon className="size-5 fill-white/60" />
      </Button>
    </div>
  );
}
