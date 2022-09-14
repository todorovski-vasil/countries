import { FC, useEffect, useState } from 'react';
import classNames from 'classnames';

interface DropDownProps {
  selected: string;
  onSelect: any;
  options: Array<{
    value: string;
    label: string;
  }>;
  placeholder: string;
}

const DropDown: FC<DropDownProps> = ({
  selected,
  onSelect,
  options,
  placeholder,
}) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div id="my-select" className="inline-block float-right mr-14">
      <button
        type="button"
        className={classNames(
          'p-3 rounded-md drop-shadow-lg',
          'bg-white dark:bg-dark-blue outline-none focus:outline-none'
        )}
        onClick={() => setOpen((open) => !open)}
      >
        <span id="selected">
          {options.find((option) => option.value === selected)
            ? selected
            : placeholder}
        </span>{' '}
        <span className="caret"></span>
      </button>
      {open ? (
        <ul className="absolute bg-white drop-shadow-lg rounded-md z-10">
          <li
            className={classNames(
              'block p-3 w-46 text-left',
              'bg-white dark:bg-dark-blue outline-none focus:outline-none',
              'hover:bg-dark-blue hover:text-very-light-gray dark:hover:text-dark-blue dark:hover:bg-very-light-gray'
            )}
            onClick={() => {
              onSelect('');
              setOpen((open) => !open);
            }}
          >
            -
          </li>
          {options?.map((option) => (
            <li
              key={option.value}
              className={classNames(
                'block p-3 w-46 text-left',
                'bg-white dark:bg-dark-blue outline-none focus:outline-none',
                'hover:bg-dark-blue hover:text-very-light-gray dark:hover:text-dark-blue dark:hover:bg-very-light-gray'
              )}
              onClick={() => {
                onSelect(option.value);
                setOpen((open) => !open);
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default DropDown;
