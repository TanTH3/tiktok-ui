import { useRef } from 'react';
import Header from '~/layouts/components/Header';
import Sidebar from '~/layouts/components/Sidebar';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  const sidebarRef = useRef();

  // const heightScroll =
  //   sidebarRef.current.offsetHeight ** 2 / sidebarRef.current.scrollHeight;
  // console.log(sidebarRef.current.scrollHeight, sidebarRef);
  // const handleScroll = () => {
  //   console.log(sidebarRef.current.offsetHeight, sidebarRef.current.offsetTop);
  // };

  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
       <div
          ref={sidebarRef}
          className={cx('side-bar')}
          // onScroll={handleScroll}
        >
          {createPortal(
            <Sidebar />
          , document.body)}
          <div
            className={cx('scroll-sidebar')}
            // style={{ height: `${heightScroll}px` }}
          />
        </div>
        <div className={cx('content')}>{children}</div>
      </div>
    </div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
