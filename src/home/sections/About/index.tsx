import React from 'react';
import s from './About.module.scss';

const About = () => {
  return (
    <section className={s.about}>
      <div className="container">
        <h2 className={s.about__title}>About us</h2>
        <div className={s.about__row}>
          <div className={s.about__block}>
            <img src={'/assets/images/icons/reward.svg'} alt="Reward" />
            <div className={s.about__block__info}>
              <h4>Near.Hack winner</h4>
              <p>
                The Near.Hack-winning solution is bringing non-custodial borrowing and lending to
                the NEAR MainNet. Are you ready for liquidity protocol on the most user-friendly
                blockchain?
              </p>
            </div>
          </div>

          {/*<div className={s.about__block}>*/}
          {/*  <img src={About1} alt="Reward"/>*/}
          {/*  <div className={s.about__block__info}>*/}
          {/*    <h4>Go live<br />*/}
          {/*      Q2 2022</h4>*/}
          {/*    <p>*/}
          {/* eslint-disable-next-line max-len */}
          {/*      Basic operations for the limited number of markets and provide the liquidation mechanism with partly automated internal processes*/}
          {/*    </p>*/}
          {/*  </div>*/}
          {/*</div>*/}
          {/*<div className={s.about__block}>*/}
          {/*  <img src={About2} alt="Reward"/>*/}
          {/*  <div className={s.about__block__info}>*/}
          {/*    <h4>Grantee Near<br />*/}
          {/*      foundation</h4>*/}
          {/*    <p>*/}
          {/*      Grant will help our team launch the project & pass security audit.*/}
          {/*    </p>*/}
          {/*  </div>*/}
          {/*</div>*/}
          {/*<div className={s.about__block}>*/}
          {/*  <img src={About3} alt="Reward"/>*/}
          {/*  <div className={s.about__block__info}>*/}
          {/*    <h4>Near.Hackbr<br />*/}
          {/*      winner</h4>*/}
          {/*    <p>*/}
          {/*      The Near.Hack-winning solution is bringing*/}
          {/* eslint-disable-next-line max-len */}
          {/*      non-custodial borrowing and lending to the NEAR MainNet. Are you ready for liquidity protocol on the most user-friendly blockchain?*/}
          {/*    </p>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
      </div>
    </section>
  );
};

export default About;
