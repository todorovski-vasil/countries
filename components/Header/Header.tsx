import { FC, useEffect, useState } from 'react';
import Router from 'next/router';
import classNames from 'classnames';
import { HiMoon, HiOutlineMoon } from 'react-icons/hi';

interface HeaderProps {
  updateDarkMode?: any;
}

const Header: FC<HeaderProps> = ({ updateDarkMode }) => {
  const [darkMode, setDarkMode] = useState<boolean>(
    typeof window !== 'undefined' &&
      window.localStorage.getItem('darkMode') === 'true'
  );

  useEffect(() => {
    updateDarkMode ? updateDarkMode(darkMode) : null;
  }, [darkMode]);

  return (
    <header
      className={classNames(
        'bg-white text-very-dark-blue dark:bg-dark-blue dark:text-white',
        'drop-shadow-xl'
      )}
    >
      <h1
        className="px-14 py-4 font-semibold text:md md:text-xl inline-block"
        onClick={() => Router.push('/countries')}
      >
        Where in the world?
      </h1>
      <button
        className="px-14 py-4 inline-block float-right outline-none focus:outline-none"
        onClick={() =>
          setDarkMode((darkMode) => {
            localStorage.setItem('darkMode', darkMode ? 'false' : 'true');
            return !darkMode;
          })
        }
      >
        {darkMode ? (
          <HiMoon className="inline-block mr-2 mt-1 align-top" />
        ) : (
          <HiOutlineMoon className="inline-block mr-2 mt-1 align-top" />
        )}
        <span className="text-sm">Dark Mode</span>
      </button>
    </header>
  );
};

export default Header;
