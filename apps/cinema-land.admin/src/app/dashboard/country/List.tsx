'use client';

import * as React from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

import { Country } from '@types';
import { DeleteButton, EditButton } from './buttons';

interface Props {
  countries: Country[];
}

export default function List({ countries }: Props) {
  return (
    <TableContainer>
      <Table stickyHeader aria-label="sticky table" sx={{ width: 600 }}>
        <TableHead>
          <TableRow>
            <TableCell>Название</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {countries.map((country) => (
            <TableRow hover key={country.id}>
              <TableCell>{country.name}</TableCell>
              <TableCell width={120}>
                <EditButton country={country} />
                <DeleteButton country={country} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
