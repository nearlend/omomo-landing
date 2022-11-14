import React from 'react';
import { SubscribeForm } from '@components/index';

import s from './Main.module.scss';

const Main = () => {
  return (
    <section className={s.main}>
      <div className="container">
        <div className={s.main__wrap}>
          <div className={s.main__info}>
            <img src={'/assets/images/logo.svg'} alt="logo" className={s.main__logo} />
            <h1>is a money market protocol with native financial tools.</h1>
            {/* eslint-disable-next-line max-len */}
            {/*<a href="https://app.omomo.finance" target="_blank" rel="noreferrer" className={cn("btn green", s.launch__btn)}>Launch App</a>*/}
          </div>
          <SubscribeForm />
        </div>
      </div>
    </section>
  );
};

export default Main;
