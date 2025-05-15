'use client';

import {
  Box,
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
      <Box sx={{ ml: 2, mt: 1, mb: 1.5 }}>
        <AddButton />
      </Box>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table" sx={{ width: 600 }}>
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
                <TableCell width={120}>
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
