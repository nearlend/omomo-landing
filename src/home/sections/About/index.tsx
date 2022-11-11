import React from 'react';
import s from './About.module.scss';

const About = () => {
  return (
    <section className={s.about}>
      <div className="container">
        <h2 className={s.about__title}>What is OMOMO finance</h2>
        <div className={s.about__row}>
          <div className={s.about__block}>
            <div className={s.about__block__product}>
              <img src={'/assets/images/icons/omomo.svg'} alt="omomo" />
              ОМОМО <br /> finance
            </div>

            <img
              src={'/assets/images/triple-arrow.svg'}
              className={s.about__block__arrow}
              alt="arrow"
            />
            <div className={s.about__block__features}>
              <div className={s.about__block__features__item}>
                <img src={'/assets/images/icons/drop-left.svg'} alt="omomo" />
                Lending/Borrowing Protocol
              </div>
              <div className={s.about__block__features__item}>
                <img src={'/assets/images/icons/circle.svg'} alt="omomo" />
                Decentralised Leverage trading
              </div>
              <div className={s.about__block__features__item}>
                <img src={'/assets/images/icons/circle.svg'} alt="omomo" />
                Limit orders on DEX
              </div>
              <div className={s.about__block__features__item}>
                <img src={'/assets/images/icons/drop-right.svg'} alt="omomo" />
                Derivatives and yield farming strategies
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
