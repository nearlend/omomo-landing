import React from 'react';
import Socials from '@components/Socials';
import cn from 'classnames';

import s from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.footer__block}>
          <div className={s.footer__block__links}>
            <img src={'/assets/images/logo-footer.svg'} alt="" />
            {/*<a href="#">Terms of use</a>*/}
            {/*<a href="#">Privacy policy</a>*/}
          </div>
          <div className={s.footer__block__socials}>
            <a
              href="https://omomo.gitbook.io/omomo/general/readme"
              target="_blank"
              rel="noreferrer"
              className={cn('btn', s.footer__doc)}
            >
              Docs
            </a>
            <Socials />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
