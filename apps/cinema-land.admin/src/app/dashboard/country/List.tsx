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
import { AddCountryModal, EditCountryModal } from './modals';
import { deleteCountry } from './actions';
import DeleteButton from './DeleteButton';
import { useState } from 'react';

interface Props {
  countries: Country[];
}

export default function List({ countries }: Props) {
  const [openAddModal, setOpenAddModal] = useState(false);

  const [openEditModal, setOpenEditModal] = useState(false);
  const [editCountry, setEditCountry] = useState<Country | null>(null);

  const addModal = {
    open: openAddModal,

    handleClickOpen: () => {
      setOpenAddModal(true);
    },

    handleClickClose: () => {
      setOpenAddModal(false);
    },
  };

  const editModal = {
    open: openEditModal,

    handleClickOpen: (country: Country) => {
      setOpenEditModal(true);
      setEditCountry(country);
    },

    handleClickClose: () => {
      setOpenEditModal(false);
      setEditCountry(null);
    },
  };

  return (
    <>
      <Button variant="contained" onClick={addModal.handleClickOpen}>
        Добавить
      </Button>
      {addModal.open && (
        <AddCountryModal handleClose={addModal.handleClickClose} />
      )}
      {editModal.open && editCountry && (
        <EditCountryModal
          country={editCountry}
          handleClose={editModal.handleClickClose}
        />
      )}
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
                    <IconButton
                      onClick={() => editModal.handleClickOpen(country)}
                    >
                      <EditIcon />
                    </IconButton>
                  </Tooltip>
                  <DeleteButton
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
