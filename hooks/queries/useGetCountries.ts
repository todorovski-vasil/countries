import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useGetCountries = (search: string) => {
  const url = search?.length
    ? `https://restcountries.com/v2/name/${search}`
    : 'https://restcountries.com/v2/all';

  const { data, error } = useSWR(url, fetcher);

  return { data, error };
};
