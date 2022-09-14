import type { GetServerSidePropsContext, NextPage } from 'next';
import Head from 'next/head';
import Router, { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import { BsArrowLeftShort } from 'react-icons/bs';
import classNames from 'classnames';
import { useGetCountry, fetcher } from '../../hooks/queries/useGetCountries';
import Header from '../../components/Header/Header';
import CountryDataPoint from '../../components/CountryDataPoint/CountryDataPoint';
import { Country } from '../../types/Country';

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const code = context.params?.code;
  const data = await fetcher(`https://restcountries.com/v2/alpha/${code}`);

  return { props: { fallbackData: data, code } };
}

const CountryPage: NextPage<{ fallbackData: Country; code: string }> = ({
  fallbackData,
  code,
}) => {
  const router = useRouter();
  const { theme } = useTheme();
  const { data: country, error } = useGetCountry(code as string, fallbackData);

  return (
    <div
      className={classNames(
        theme === 'dark' ? 'dark bg-midnight-blue' : 'bg-very-light-gray',
        'font-nunito min-h-screen'
      )}
    >
      <Head>
        <title>{country?.name || code}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="bg-very-light-gray text-very-dark-blue dark:bg-midnight-blue dark:text-white">
        <button
          className={classNames(
            'inline-block px-8 py-1 ml-10 md:ml-14 mt-10',
            'bg-white text-very-dark-blue dark:bg-dark-blue dark:text-white',
            'rounded-md drop-shadow-lg'
          )}
          onClick={() => router.back()}
        >
          <BsArrowLeftShort className="inline-block" />
          <span className="text-md px-2">Back</span>
        </button>

        <div className="px-10 md:px-14 py-12">
          {error ? (
            <div>Error fetching data...</div>
          ) : country ? (
            <div className={classNames('grid grid-cols-1 md:grid-cols-2')}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={country.flag || country.flags?.svg || country.flags?.png}
                alt="unknown flag"
                className="shadow-2xl w-full"
              />
              <div className="md:ml-16">
                <div className="pt-6 grid grid-cols-1">
                  <div className="mb-4 font-semibold text-xl">
                    {country.name || '/'}
                  </div>
                </div>
                <div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 text-md">
                    <div>
                      <CountryDataPoint
                        label="Native name"
                        value={country.nativeName}
                      />
                      <CountryDataPoint
                        label="Population"
                        value={country.population?.toLocaleString('en', {
                          useGrouping: true,
                        })}
                      />
                      <CountryDataPoint label="Region" value={country.region} />
                      <CountryDataPoint
                        label="Sub region"
                        value={country.subregion}
                      />
                      <CountryDataPoint
                        label="Capital"
                        value={country.capital}
                      />
                    </div>
                    <div>
                      <CountryDataPoint
                        label="Top Level Domain"
                        value={country.topLevelDomain.join(' ')}
                      />
                      <CountryDataPoint
                        label="Currencies"
                        value={
                          country.currencies
                            ?.map((cur) => cur.name)
                            .join(', ') || '/'
                        }
                      />
                      <CountryDataPoint
                        label="Languages"
                        value={country.languages
                          .map((lang) => lang.name)
                          .join(', ')}
                      />
                    </div>
                  </div>
                </div>
                <div className="pt-6">
                  {country.borders?.length ? (
                    <>
                      <div className="mb-4 mr-2 font-semibold text-md inline-block">
                        Border Countries:
                      </div>
                      {country.borders?.map((border) => (
                        <button
                          key={border}
                          className={classNames(
                            'inline-block px-3 py-1 mx-1 mb-2',
                            'bg-white text-very-dark-blue dark:bg-dark-blue dark:text-white',
                            'rounded-md drop-shadow-lg'
                          )}
                          onClick={() => Router.push(`/country/${border}`)}
                        >
                          {border}
                        </button>
                      ))}
                    </>
                  ) : (
                    <div className="mb-4 mr-2 font-semibold text-md inline-block">
                      No borders found!
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div>Fetching data...</div>
          )}
        </div>
      </main>
    </div>
  );
};

export default CountryPage;
