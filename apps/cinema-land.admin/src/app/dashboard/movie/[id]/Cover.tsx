'use client';

import { Box, Button, Typography } from '@mui/material';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import { useId, useState } from 'react';

export default function Cover() {
  const id = useId();

  const [selectedFile, setSelectedFile] = useState<string | ArrayBuffer | null>(
    null,
  );

  const handleUploadClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) {
      return;
    }

    const file = files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setSelectedFile(reader.result);
    };
  };

  return (
    <label htmlFor={id}>
      {selectedFile ? (
        <Box
          component="img"
          sx={{
            display: 'block',
            height: 600,
            width: 400,
            objectFit: 'cover',
            mb: 2,
          }}
          src={selectedFile as string}
        />
      ) : (
        <Box
          sx={(theme) => ({
            height: 600,
            width: 400,
            bgcolor: theme.palette.grey[300],
            mb: 2,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          })}
        >
          <Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <FileUploadOutlinedIcon
                sx={(theme) => ({
                  display: 'block',
                  width: 80,
                  height: 80,
                  color: theme.palette.grey[500],
                })}
              />
            </Box>
            <Typography
              sx={(theme) => ({
                color: theme.palette.grey[600],
              })}
            >
              Нажмите для загрузки обложки
            </Typography>
          </Box>
        </Box>
      )}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Button variant="contained" component="span">
          Загрузить обложку
          <Box
            component="input"
            sx={{ display: 'none' }}
            accept="image/*"
            id={id}
            type="file"
            onChange={handleUploadClick}
          />
        </Button>
        <Button variant="contained" color="secondary">
          Удалить обложку
        </Button>
      </Box>
    </label>
  );
}
