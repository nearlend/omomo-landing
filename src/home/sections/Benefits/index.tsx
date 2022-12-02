import React from 'react';
import s from './Benefits.module.scss';

const Benefits = () => {
  return (
    <section className={s.why}>
      <div className="container">
        <h2 className={s.why__title}>Benefits</h2>
        <div className={s.why__list}>
          <div className={s.why__list__item}>
            <img
              className={s.why__list__item__img}
              src={'/assets/images/icons/check.svg'}
              alt="icon"
            />

            <p>Permissionless listing on the money market</p>
          </div>
          <div className={s.why__list__item}>
            <img
              className={s.why__list__item__img}
              src={'/assets/images/icons/check.svg'}
              alt="icon"
            />
            <p>All operations executed on-chain and managed by smart contracts </p>
          </div>
          <div className={s.why__list__item}>
            <img
              className={s.why__list__item__img}
              src={'/assets/images/icons/check.svg'}
              alt="icon"
            />
            <p>
              No fees on the DEX <span>(got it back as a liquidity provider)</span>
            </p>
          </div>
          <div className={s.why__list__item}>
            <img
              className={s.why__list__item__img}
              src={'/assets/images/icons/check.svg'}
              alt="icon"
            />

            <p>No slippage while swapping on the DEX</p>
          </div>
          <div className={s.why__list__item}>
            <img
              className={s.why__list__item__img}
              src={'/assets/images/icons/check.svg'}
              alt="icon"
            />
            <p>DAO-governed asset tiers and protocol parameters</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
