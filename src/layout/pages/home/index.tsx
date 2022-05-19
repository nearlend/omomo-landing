import HtmlMeta from '@layout/look/components/HtmlMeta';

import s from './Home.module.scss';

const Home = () => {
  return (
    <>
      <HtmlMeta />
      <div className={s.home}>
        <div className="container">Home page layout</div>
      </div>
    </>
  );
};

export default Home;
