import { FC } from 'react';
import Router from 'next/router';
import classNames from 'classnames';
import { Country } from '../../types/Country';
import CountryDataPoint from '../CountryDataPoint/CountryDataPoint';

interface CountryTyleProps {
  country: Country;
}

const CountryTile: FC<CountryTyleProps> = ({ country }) => {
  return (
    <div
      className={classNames(
        'bg-white text-very-dark-blue dark:bg-dark-blue dark:text-white rounded-md',
        'drop-shadow-lg text-md'
      )}
      onClick={() => Router.push(`/country/${country.alpha3Code}`)}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={country.flag || country.flags?.svg || country.flags?.png}
        alt="unknown flag"
        className="rounded-t-md w-full"
      />
      <div className="p-6 text-sm">
        <div className="mb-4 font-semibold text-xl">{country.name || '/'}</div>
        <CountryDataPoint
          label="Population"
          value={country.population.toLocaleString('en', { useGrouping: true })}
        />
        <CountryDataPoint label="Region" value={country.region} />
        <CountryDataPoint label="Capital" value={country.capital} />
      </div>
    </div>
  );
};

export default CountryTile;
