import React from 'react';
import Socials from '@components/Socials';
import cn from 'classnames';

import s from './header.module.scss';

const Header = () => {
  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.header__block}>
          <img className={s.header__logo} src={'/assets/images/logo.svg'} alt="logo" />

          <div className="flex align-center">
            <a
              href="https://omomo.gitbook.io/omomo/general/readme"
              target="_blank"
              rel="noreferrer"
              className={cn('btn', s.header__doc)}
            >
              Docs
            </a>
            {/* eslint-disable-next-line max-len */}
            {/*<a href="https://app.omomo.finance" target="_blank" rel="noreferrer" className={cn("btn green", s.header__launch)}>Launch App</a>*/}

            <Socials isHeader />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
