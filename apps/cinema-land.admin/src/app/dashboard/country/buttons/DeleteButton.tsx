import * as React from 'react';

import { Country } from '@types';
import { DeleteButton as DeleteEntityButton } from '@ui';
import { deleteCountry } from '../actions';

interface Props {
  country: Country;
}

export function DeleteButton({ country }: Props) {
  return (
    <DeleteEntityButton
      confirmMessage={
        <>
          Вы действительно хотите удалить страну &quot;
          <strong>{country.name}</strong>&quot;?
        </>
      }
      deleteAction={() => deleteCountry(country.id)}
    />
  );
}
