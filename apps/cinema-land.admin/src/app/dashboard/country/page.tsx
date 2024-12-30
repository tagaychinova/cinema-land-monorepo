import List from './List';
import { countryStore } from '@stores';

export default async function Page() {
  const countries = await countryStore.getCountries();

  return (
    <>
      <List countries={countries} />
    </>
  );
}
