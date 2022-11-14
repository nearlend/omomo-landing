import React from 'react';
import s from './Achievements.module.scss';

const Achievements = () => {
  return (
    <section className={s.achievements}>
      <div className="container">
        <h2 className={s.achievements__title}>Achievements</h2>

        <div className={s.achievements__list}>
          <div className={s.achievements__item}>
            <div className={s.achievements__item__head}>
              <div>
                <span>Point 1</span>
                <p>Dec 2021</p>
              </div>
              <img src={'/assets/images/icons/ach-1.svg'} alt="icon" />
            </div>
            <div className={s.achievements__item__body}>
              <p>NEARhack Hackathon winner</p>
              <span>(Borrow-Lending protocol)</span>
            </div>
          </div>
          <div className={s.achievements__item}>
            <div className={s.achievements__item__head}>
              <div>
                <span>Point 2</span>
                <p>Q1 2022</p>
              </div>
              <img src={'/assets/images/icons/ach-2.svg'} alt="icon" />
            </div>
            <div className={s.achievements__item__body}>
              <p>Pre-seed investments</p>
            </div>
          </div>
          <div className={s.achievements__item}>
            <div className={s.achievements__item__head}>
              <div>
                <span>Point 3</span>
                <p>Q2 2022</p>
              </div>
              <img src={'/assets/images/icons/ach-3.svg'} alt="icon" />
            </div>
            <div className={s.achievements__item__body}>
              <p>Lending/Borrowing MVP in testnet</p>
            </div>
          </div>
          <div className={s.achievements__item}>
            <div className={s.achievements__item__head}>
              <div>
                <span>Point 4</span>
                <p>Sep 2022</p>
              </div>
              <img src={'/assets/images/icons/ach-4.svg'} alt="icon" />
            </div>
            <div className={s.achievements__item__body}>
              <p>NEARcon hackathon winner</p>
            </div>
          </div>
          <div className={s.achievements__item}>
            <div className={s.achievements__item__head}>
              <div>
                <span>Point 5</span>
                <p>Q4</p>
              </div>
              <img src={'/assets/images/icons/ach-5.svg'} alt="icon" />
            </div>
            <div className={s.achievements__item__body}>
              <p>NEAR Metabuild Hackathon</p>
              <span>(Limit orders on top Ref V2 concentrated liquidity)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
