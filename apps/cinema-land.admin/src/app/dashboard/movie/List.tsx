'use client';
import * as React from 'react';
import { useGetMoviesQuery } from '../../../lib/services/movie';
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

export default function List() {
  const { data, error, isLoading } = useGetMoviesQuery();

  if (error) {
    return <div>Error</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleChangePage = (event: unknown, newPage: number) => {};

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
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
            {(data || []).map((movie) => (
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
