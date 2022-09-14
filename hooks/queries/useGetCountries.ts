import useSWR from 'swr';
import { Country } from '../../types/Country';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useGetCountries = (search: string) => {
  const url = search?.length
    ? `https://restcountries.com/v2/name/${search}`
    : 'https://restcountries.com/v2/all';

  const { data, error } = useSWR<Array<Country>, any>(url, fetcher);

  return { data, error };
};

export const useGetCountry = (code: string) => {
  const url = `https://restcountries.com/v2/alpha/${code}`;

  const { data, error } = useSWR<Country, any>(url, fetcher);

  return { data, error };
};
