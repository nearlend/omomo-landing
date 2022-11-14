import React from 'react';
import s from './Clients.module.scss';

const Clients = () => {
  return (
    <section className={s.clients}>
      <div className="container">
        <h2>Who is behind the project</h2>

        <div className={s.clients__desc}>
          <p>
            OMOMO is a spin-off product of{' '}
            <a href="https://blaize.tech/" target="_blank">
              Blaize.tech
            </a>
          </p>
          <p>
            <strong>Blaize</strong> is a blockchain development company with 5+ years of experience
            and 60 people on board. <strong>Core expertise</strong>: DeFi, dApp development, smart
            contracts development, and security audits.
          </p>
        </div>

        <div className={s.clients__block}>
          <h3>Top clients</h3>
          <div className={s.clients__block__list}>
            <div className={s.clients__block__list__item}>
              <img src={'/assets/images/client-1.svg'} alt="client-icon" />
            </div>
            <div className={s.clients__block__list__item}>
              <img src={'/assets/images/client-2.svg'} alt="client-icon" />
            </div>
            <div className={s.clients__block__list__item}>
              <img src={'/assets/images/client-3.svg'} alt="client-icon" />
            </div>
            <div className={s.clients__block__list__item}>
              <img src={'/assets/images/client-4.svg'} alt="client-icon" />
            </div>
            <div className={s.clients__block__list__item}>
              <img src={'/assets/images/client-5.svg'} alt="client-icon" />
            </div>
            <div className={s.clients__block__list__item}>
              <img src={'/assets/images/client-6.svg'} alt="client-icon" />
            </div>
            <div className={s.clients__block__list__item}>
              <img src={'/assets/images/client-7.svg'} alt="client-icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
