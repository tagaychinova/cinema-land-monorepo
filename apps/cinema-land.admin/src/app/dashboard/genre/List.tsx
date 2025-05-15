'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

import { Genre } from '@types';
import { AddButton, DeleteButton, EditButton } from './buttons';

interface Props {
  genres: Genre[];
}

export function List({ genres }: Props) {
  return (
    <>
      <AddButton />
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>Название</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {genres.map((genre) => (
              <TableRow hover key={genre.id}>
                <TableCell>{genre.name}</TableCell>
                <TableCell>
                  <EditButton genre={genre} />
                  <DeleteButton genre={genre} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
