export interface Country {
  name: string;
  population: number;
  region: string;
  subregion: string;
  capital: string;
  alpha2Code: string;
  alpha3Code: string;
  borders?: Array<string>;
  nativeName: string;
  topLevelDomain: Array<string>;
  currencies?: Array<{
    code: string;
    name: string;
    symbol: string;
  }>;
  languages: Array<{
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
  }>;
  flags?: {
    svg?: string;
    png?: string;
  };
  flag?: string;
}
