import { Navigation } from '../../look/components';

import s from './Header.module.scss';

const Header = () => {
  return (
    <div className={s.header}>
      <div className="container">
        <div className={s.header__row}>
          <div>App logo</div>
          <Navigation />
        </div>
      </div>
    </div>
  );
};

export default Header;
