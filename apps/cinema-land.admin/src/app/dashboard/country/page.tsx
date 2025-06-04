import { Box } from '@mui/material';
import List from './List';
import { countryStore } from '@stores';
import { AddButton } from './buttons';

export default async function Page() {
  const countries = await countryStore.getCountries();

  return (
    <>
      <Box sx={{ ml: 2, mt: 1, mb: 1.5 }}>
        <AddButton />
      </Box>
      <List countries={countries} />;
    </>
  );
}
