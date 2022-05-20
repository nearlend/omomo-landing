import cn from 'classnames';
import { Twitter, Medium, GitHub } from '@components/Icons';

import s from './socials.module.scss';

const Socials = ({ isHeader = false }) => {
  return (
    <div className={s.socials}>
      <div className={cn('flex align-center', { [s.socials__header]: isHeader })}>
        <a href="https://twitter.com/omomo_finance" target="_blank" rel="noreferrer">
          <Twitter />
        </a>
        <a href="https://medium.com/omomo" target="_blank" rel="noreferrer">
          <Medium />
        </a>
        <a href="https://github.com/omomo-finance" target="_blank" rel="noreferrer">
          <GitHub />
        </a>
      </div>
    </div>
  );
};

export default Socials;
