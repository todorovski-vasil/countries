import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const url = "https://restcountries.com/v2/all";

export const useGetCountries = () => {
  const { data, error } = useSWR(url, fetcher);

  return { data, error };
};
