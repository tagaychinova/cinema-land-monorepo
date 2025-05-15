'use client';

import { IconButton, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

interface Props {
  onClick: () => void;
}

export function EditButton({ onClick }: Props) {
  return (
    <Tooltip title="Редактировать">
      <IconButton onClick={onClick}>
        <EditIcon />
      </IconButton>
    </Tooltip>
  );
}
