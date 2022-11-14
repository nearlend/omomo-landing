import React from 'react';
import { HtmlMeta } from '@components/index';
import { Main, About, WhyChoose, Contact, Achievements, Clients } from './sections';

import s from './Home.module.scss';

const Home = () => {
  return (
    <>
      <HtmlMeta />
      <main className={s.main}>
        <Main />
        <div className={s.main__bg}>
          <About />
          <WhyChoose />
          <Achievements />
          <Clients />
          <Contact />
        </div>
      </main>
    </>
  );
};

export default Home;
