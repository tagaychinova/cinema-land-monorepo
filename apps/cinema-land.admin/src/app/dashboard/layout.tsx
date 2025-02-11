import { Stack } from '@mui/material';
import { Box } from '@mui/material';
import { Navbar } from '../../ui/navbar';
import { Toolbar } from '../../ui/toolbar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Stack sx={{ height: '100vh' }}>
        <Toolbar />
        <Box sx={{ display: 'flex', flexGrow: 1 }}>
          <Navbar />
          <main>{children}</main>
        </Box>
      </Stack>
    </>
  );
}
