import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import classNames from 'classnames';
import CountryTile from '../components/CountryTile/CountryTile';
import Header from '../components/Header/Header';
import { useGetCountries } from '../hooks/queries/useGetCountries';

const Countries: NextPage = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [searchInput, setSearchInput] = useState<string>('');

  const { data: countries, error } = useGetCountries(searchInput);

  return (
    <div
      className={classNames(
        darkMode ? 'dark bg-midnight-blue' : 'bg-very-light-gray',
        'font-nunito min-h-screen'
      )}
    >
      <Head>
        <title>Countries</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header updateDarkMode={setDarkMode} />

      <main className="bg-very-light-gray text-very-dark-blue dark:bg-midnight-blue dark:text-white">
        <div className="pl-14 pt-12">
          <input
            className="rounded-md h-12 w-1/3 px-4 dark:bg-dark-blue outline-none focus:outline-none drop-shadow-lg"
            value={searchInput}
            type="search"
            onInput={(event: any) => setSearchInput(event?.target?.value || '')}
            placeholder="Search for a country..."
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-16 px-14 py-12">
          {error ? (
            <div>Error fetching data...</div>
          ) : countries?.length ? (
            countries?.map((country) => (
              <CountryTile key={country.name} country={country} />
            ))
          ) : (
            <div>Fetching data...</div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Countries;
