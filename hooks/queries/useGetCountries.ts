import useSWR from 'swr';
import { Country } from '../../types/Country';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useGetCountries = (search: string, region: string) => {
  const url = region.length
    ? `https://restcountries.com/v2/region/${region}`
    : search?.length
    ? `https://restcountries.com/v2/name/${search}`
    : 'https://restcountries.com/v2/all';

  const result = useSWR<Array<Country>, any, any>(url, fetcher);

  return region?.length && search?.length
    ? {
        ...result,
        data: result.data?.filter(
          (country) =>
            country.name.toLowerCase().includes(search.toLowerCase()) ||
            country.alpha2Code.toLowerCase().includes(search.toLowerCase()) ||
            country.alpha3Code.toLowerCase().includes(search.toLowerCase())
        ),
      }
    : result;
};

export const useGetCountry = (code: string) =>
  useSWR<Country, any, any>(
    `https://restcountries.com/v2/alpha/${code}`,
    fetcher
  );
