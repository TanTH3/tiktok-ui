import { useState, useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Content.module.scss';
import Image from '~/components/Image';
import Video from '~/components/Video';
import Button from '~/components/Button';
import { TickBlueIcon } from '~/components/Icons';
import {
  PlayIcon,
  PauseIcon,
  MusicIcon,
  FlagIcon,
  VolumeOnIcon,
  VolumeOffIcon,
  HeartIcon,
  CommentIcon,
  ShareIcon,
} from '~/components/Icons';

const cx = classNames.bind(styles);

function Content() {
  const inputRef = useRef();
  const videoRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentVolume, setCurrentVolume] = useState(1);
  const [isMute, setIsMute] = useState(false);

  const handlePlay = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };
  const handlePause = () => {
    videoRef.current.pause();
    setIsPlaying(false);
  };

  const handleMute = () => {
    setIsMute((prev) => !prev);
    setCurrentVolume(0);
  };
  const handleUnmute = () => {
    setIsMute((prev) => !prev);
    setCurrentVolume(() => {
      const storageIndex = JSON.parse(localStorage.getItem('jsonIndex')) || 1;
      console.log(storageIndex);
      return storageIndex;
    });
  };

  const handleVolumeChange = () => {
    setCurrentVolume(() => {
      const prevVolume = inputRef.current.value / 100;
      const jsonIndex = JSON.stringify(prevVolume);
      localStorage.setItem('jsonIndex', jsonIndex);
      if (prevVolume === 0) {
        setIsMute(true);
      } else {
        setIsMute(false);
      }
      return prevVolume;
    });
  };

  return (
    <div className={cx('container')}>
      <Image
        src="signature=SYVhIq8ZgXOiv%2F5UHX5xt13X%2Fmk%3D"
        className={cx('avatar')}
        alt="123"
        fallback="https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-Viet-Nam.jpg"
      />
      <div className={cx('content')}>
        <div className={cx('info')}>
          <div>
            <span className={cx('user-name')}>pusheen</span>
            <span className={cx('check')}>
              <TickBlueIcon />
            </span>
            <span className={cx('real-name')}>pusheen</span>
          </div>
          <div className={cx('hashtag')}>
            <Link className={cx('item')} to="/">
              #Pusheen
            </Link>
            <Link className={cx('item')} to="/">
              #pusheenthecat
            </Link>
            <Link className={cx('item')} to="/">
              #toebeans🐾
            </Link>
            <Link className={cx('item')} to="/">
              #fyp
            </Link>
          </div>
          <div className={cx('music')}>
            <MusicIcon />
            <Link className={cx('item')} to="/">
              original sound - Pusheen
            </Link>
          </div>
        </div>

        <div className={cx('show')}>
          <div className={cx('video')} onMouseOut={console.log(123)}>
            <Video currentVolume={currentVolume} ref={videoRef} />
            <div className={cx('btn')}>
              <>
                {isPlaying ? (
                  <button className={cx('pause')} onClick={handlePause}>
                    <PauseIcon />
                  </button>
                ) : (
                  <button className={cx('play')} onClick={handlePlay}>
                    <PlayIcon />
                  </button>
                )}
              </>
              <div className={cx('volume')}>
                {!isMute ? (
                  <button className={cx('on-off-volume')} onClick={handleMute}>
                    <VolumeOnIcon />
                  </button>
                ) : (
                  <button
                    className={cx('on-off-volume')}
                    onClick={handleUnmute}
                  >
                    <VolumeOffIcon />
                  </button>
                )}

                <input
                  className={cx('seek-volume')}
                  onChange={handleVolumeChange}
                  ref={inputRef}
                  type="range"
                  name="volume"
                  step="0.01"
                  min="0"
                  max="100"
                  value={currentVolume * 100}
                />
              </div>
              <button className={cx('report')}>
                <FlagIcon className={cx('flag')} />
                Report
              </button>
            </div>
          </div>
          <div className={cx('interact')}>
            <>
              <button className={cx('interact-btn')}>
                <span className={cx('Wrapper-btn')}>
                  <HeartIcon />
                </span>
              </button>
              <span className={cx('count')}>5.7M</span>
            </>
            <>
              <button className={cx('interact-btn')}>
                <span className={cx('Wrapper-btn')}>
                  <CommentIcon />
                </span>
              </button>
              <span className={cx('count')}>33k</span>
            </>
            <>
              <button className={cx('interact-btn')}>
                <span className={cx('Wrapper-btn')}>
                  <ShareIcon />
                </span>
              </button>
              <span className={cx('count')}>568</span>
            </>
          </div>
        </div>
      </div>
      <Button outline small>
        Follow
      </Button>
    </div>
  );
}

export default Content;
