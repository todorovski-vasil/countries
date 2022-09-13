import { FC, useState } from 'react';
import classNames from 'classnames';

interface Country {
  name: string;
  population: number;
  region: string;
  capital: string;
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
        'bg-white text-very-dark-blue dark:bg-dark-blue dark:text-white'
      )}
    >
      <img src={country.flag || country.flags.svg} alt="unknown flag" />
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
