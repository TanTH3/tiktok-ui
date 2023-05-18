import classNames from 'classnames/bind';
import styles from './Profile.module.scss';

const cx = classNames.bind(styles);

function Profile() {
  return <h2 className={cx('Profile')}>Profile page</h2>;
}

export default Profile;
