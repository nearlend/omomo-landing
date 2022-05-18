import React from 'react';
import s from './header.module.scss';
import Logo from '../../assets/images/logo.svg';
import Socials from "../socials";
import cn from "classnames";

const Header = () => {
    return (
        <header className={s.header}>
          <div className="container">
            <div className={s.header__block}>
              <img className={s.header__logo} src={Logo} alt="logo"/>

              <div className="flex align-center">
                <a href="https://omomo.gitbook.io/omomo/general/readme" target="_blank" rel="noreferrer" className={cn("btn", s.header__doc)}>Docs</a>
                {/*<a href="https://app.omomo.finance" target="_blank" rel="noreferrer" className={cn("btn green", s.header__launch)}>Launch App</a>*/}

                  <Socials isHeader />
              </div>
            </div>
          </div>
        </header>
    );
};

export default Header;