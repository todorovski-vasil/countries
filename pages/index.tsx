import type { NextPage } from 'next';
import Head from 'next/head';
import { useTheme } from 'next-themes';
import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import classNames from 'classnames';
import CountryTile from '../components/CountryTile/CountryTile';
import Header from '../components/Header/Header';
import { useGetCountries } from '../hooks/queries/useGetCountries';
import useDebounce from '../hooks/useDebounce';
import DropDown from '../components/DropDown/DropDown';

const regions = [
  'Asia',
  'Europe',
  'Africa',
  'Oceania',
  'Americas',
  'Polar',
  'Antarctic Ocean',
  'Antarctic',
];

const Countries: NextPage = ({}) => {
  const { theme } = useTheme();
  const [searchInput, setSearchInput] = useState<string>('');
  const [region, setRegion] = useState<string>('');
  const debouncedSearchInput = useDebounce(searchInput, 300);

  const {
    data: countries,
    error,
    isValidating,
  } = useGetCountries(debouncedSearchInput, region);

  return (
    <div
      className={classNames(
        theme === 'dark' ? 'dark bg-midnight-blue' : 'bg-very-light-gray',
        'font-nunito min-h-screen'
      )}
    >
      <Head>
        <title>Countries</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="bg-very-light-gray text-very-dark-blue dark:bg-midnight-blue dark:text-white">
        <div className="pl-10 md:pl-14 pt-12">
          <div className="relative inline-block h-12 w-full pr-10 md:pr-14 md:w-1/2">
            <BiSearch className="absolute inset-y-0 left-0 ml-4 mt-4 text-very-dark-blue dark:text-white pointer-events-none z-10" />
            <input
              className={classNames(
                'rounded-md h-12 w-full lg:w-2/3 px-4 pl-12',
                'outline-none focus:outline-none drop-shadow-lg',
                'bg-white text-very-dark-blue dark:bg-dark-blue dark:text-white'
              )}
              value={searchInput}
              type="search"
              onInput={(event: any) =>
                setSearchInput(event?.target?.value || '')
              }
              placeholder="Search for a country..."
            />
          </div>

          <DropDown
            options={regions.map((region) => ({
              value: region,
              label: region,
            }))}
            placeholder="Filter by region"
            selected={region}
            onSelect={setRegion}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-16 px-10 md:px-14 py-12">
          {error ? (
            <div>Error fetching data...</div>
          ) : isValidating ? (
            <div>Fetching data...</div>
          ) : countries?.length ? (
            countries?.map((country) => (
              <CountryTile key={country.name} country={country} />
            ))
          ) : (
            <div>No countries found!</div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Countries;
