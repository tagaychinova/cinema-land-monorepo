'use client';

import * as React from 'react';

import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';

import { Country } from '@types';
import AddCountryModal from './AddCountryModal';
import { deleteCountry } from './actions';
import DeleteCountryButton from './DeleteCountryButton';

interface Props {
  countries: Country[];
}

export default function List({ countries }: Props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleDeleteClick = (country: Country) => {
    // deleteCountry(id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="contained" onClick={handleClickOpen}>
        Добавить
      </Button>
      {open && <AddCountryModal handleClose={handleClose} />}
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
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
                <TableCell>
                  <Tooltip title="Редактировать">
                    <IconButton>
                      <EditIcon />
                    </IconButton>
                  </Tooltip>
                  <DeleteCountryButton
                    country={country}
                    deleteCountry={deleteCountry}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
