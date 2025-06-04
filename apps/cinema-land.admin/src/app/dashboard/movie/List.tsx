'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';
import { Movie } from '@types';

interface Props {
  movies: Movie[];
}

export default function List({ movies }: Props) {
  const handleChangePage = (event: unknown, newPage: number) => {};

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {};

  return (
    <>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>Название</TableCell>
              <TableCell>Жанр</TableCell>
              <TableCell>Год выпуска</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {movies.map((movie) => (
              <TableRow hover key={movie.id}>
                <TableCell>
                  <Link href={`/dashboard/movie/${movie.id}`}>
                    {movie.title}
                  </Link>
                </TableCell>
                <TableCell>{movie.genre}</TableCell>
                <TableCell>{movie.yearOfIssue}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={500}
        rowsPerPage={25}
        page={0}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
}
