import React from 'react';
import { Socials, SubscribeForm } from '@components/index';

import s from './Contact.module.scss';

const Contact = () => {
  return (
    <section className={s.contact}>
      <div className="container">
        <div className={s.contact__block}>
          <h2>Contact us</h2>
          <p className={s.description}>
            To learn more about our products
            <br /> and stay on top of the news
          </p>
          <div className={s.contact__block__socials}>
            <Socials />
          </div>
          <SubscribeForm isContact />
        </div>
      </div>
    </section>
  );
};

export default Contact;
