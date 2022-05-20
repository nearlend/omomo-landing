import React from 'react';
import s from './WhyChoose.module.scss';

const WhyChoose = () => {
  return (
    <section className={s.why}>
      <div className="container">
        <h2 className={s.why__title}>Why choose us?</h2>
        <div className={s.why__list}>
          <div className={s.why__list__item}>
            <div className={s.why__list__item__img}>
              <img src={'/assets/images/icons/w1.svg'} alt="icon" />
            </div>
            <p>Liquidity market of NEAR ecosystem</p>
          </div>
          <div className={s.why__list__item}>
            <div className={s.why__list__item__img}>
              <img src={'/assets/images/icons/w2.svg'} alt="icon" />
            </div>
            <p>Flexible deposit management</p>
          </div>
          <div className={s.why__list__item}>
            <div className={s.why__list__item__img}>
              <img src={'/assets/images/icons/w3.svg'} alt="icon" />
            </div>
            <p>Easy-to-use</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
