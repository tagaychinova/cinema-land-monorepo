import * as React from 'react';

import { Genre } from '@types';
import { DeleteButton as DeleteEntityButton } from '@ui';
import { deleteGenre } from '../actions';

interface Props {
  genre: Genre;
}

export function DeleteButton({ genre }: Props) {
  return (
    <DeleteEntityButton
      confirmMessage={
        <>
          Вы действительно хотите удалить жанр &quot;
          <strong>{genre.name}</strong>&quot;?
        </>
      }
      deleteAction={() => deleteGenre(genre.id)}
    />
  );
}
