import { FC } from 'react';
import Router from 'next/router';
import classNames from 'classnames';
import { Country } from '../../types/Country';

interface CountryTyleProps {
  country: Country;
}

const CountryTile: FC<CountryTyleProps> = ({ country }) => {
  return (
    <div
      className={classNames(
        'bg-white text-very-dark-blue dark:bg-dark-blue dark:text-white rounded-md',
        'drop-shadow-lg'
      )}
      onClick={() => Router.push(`/country/${country.alpha3Code}`)}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={country.flag || country.flags?.svg || country.flags?.png}
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
