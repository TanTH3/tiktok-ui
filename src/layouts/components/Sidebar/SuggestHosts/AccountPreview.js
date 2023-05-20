import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './SuggestHosts.module.scss';
import Image from '~/components/Image';
import { TickBlueIcon } from '~/components/Icons';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function AccountPreview({ data }) {
  const handleFollow = () => {
    console.log(data);
  };
  return (
    <div className={cx('preview')}>
      <div className={cx('avatar-fl')}>
        <Image
          className={cx('avatar')}
          src={data.avatar}
          alt={data.last_name}
          fallback="https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-Viet-Nam.jpg"
        />
        <Button primary onClick={handleFollow}>
          Follow
        </Button>
      </div>
      <Link
        to={`/@${data.nickname}`}
        className={cx('name')}
        state={{ data: data.nickname }}
      >
        <span className={cx('user-name')}>{data.nickname}</span>
        {data.tick && (
          <span className={cx('check')}>
            <TickBlueIcon />
          </span>
        )}
        <br />
        <span className={cx('real-name')}>{data.full_name}</span>
      </Link>
      <div className={cx('follower')}>
        <span className={cx('number')}>{data.followers_count}</span>
        <span className={cx('description')}>Follower</span>
        <span className={cx('number')}>{data.likes_count}</span>
        <span>Likes</span>
      </div>
    </div>
  );
}

AccountPreview.prototype = {
  data: PropTypes.object,
};

export default AccountPreview;
