import { Stack } from '@mui/material';
import { Box } from '@mui/material';
import { Navbar } from '../../ui/navbar';
import { Toolbar } from '../../ui/toolbar';
import { auth } from '../../auth';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <>
      <Stack sx={{ height: '100vh' }}>
        <Toolbar username={session?.user?.email || ''} />
        <Box sx={{ display: 'flex', flexGrow: 1 }}>
          <Navbar />
          <main>{children}</main>
        </Box>
      </Stack>
    </>
  );
}
