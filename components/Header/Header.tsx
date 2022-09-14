import { FC } from 'react';
import Router from 'next/router';
import { useTheme } from 'next-themes';
import classNames from 'classnames';
import { HiMoon, HiOutlineMoon } from 'react-icons/hi';

const Header: FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header
      className={classNames(
        'bg-white text-very-dark-blue dark:bg-dark-blue dark:text-white',
        'drop-shadow-lg'
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
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {theme === 'dark' ? (
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
