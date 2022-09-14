import { FC, useState } from 'react';
import Router from 'next/router';
import classNames from 'classnames';

interface Country {
  name: string;
  population: number;
  region: string;
  capital: string;
  alpha2Code: string;
  alpha3Code: string;
  flags: {
    svg: string;
  };
  flag: string;
}

interface CountryTyleProps {
  country: Country;
}

const CountryTile: FC<CountryTyleProps> = ({ country }) => {
  return (
    <div
      className={classNames(
        'bg-white text-very-dark-blue dark:bg-dark-blue dark:text-white rounded-md'
      )}
      onClick={() => Router.push(`/country/${country.name}`)}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={country.flag || country.flags.svg}
        alt="unknown flag"
        className="rounded-t-md"
      />
      <div className="p-6">
        <div className="mb-4 font-semibold text-xl">{country.name || '/'}</div>
        <div className="text-sm">
          <b>Population: </b>
          {country.population.toLocaleString('en', { useGrouping: true })}
        </div>
        <div className="text-sm">
          <b>Region: </b>
          {country.region}
        </div>
        <div className="text-sm">
          <b>Capital: </b>
          {country.capital}
        </div>
      </div>
    </div>
  );
};

export default CountryTile;
