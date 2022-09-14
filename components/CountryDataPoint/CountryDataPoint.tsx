import { FC } from 'react';

interface CountryDataPointProps {
  label: string;
  value: string;
  type?: string;
}

const CountryDataPoint: FC<CountryDataPointProps> = ({
  label,
  value,
  type = 'text',
}) => (
  <div className="text-sm mb-1">
    <b>{`${label}: `}</b>
    {type === 'text' ? value : value}
  </div>
);

export default CountryDataPoint;
