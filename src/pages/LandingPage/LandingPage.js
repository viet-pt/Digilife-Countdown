import React, { useEffect, useState } from 'react';
import './style.scss';
import { TimeBox, SlideImg, KCSModal } from 'components';
import logo from 'assets/icons/logo.png';
import icon1 from 'assets/icons/icon1.png';
import icon2 from 'assets/icons/icon2.png';
import icon3 from 'assets/icons/icon3.png';
import icon4 from 'assets/icons/icon4.png';
import gg_play from 'assets/img/gg-play.png';
import background from 'assets/img/background2.png';
import app_store from 'assets/img/app-store.png';

const BoxDes = ({ src, text, isEnd }) => (
  <div className={`des-wrapper ${!isEnd ? 'mr-des' : ''}`}>
    <img
      alt="icon"
      src={src}
      className="des-icon"
    />
    <div className="title">{text}</div>
  </div>
);

const LandingPage = () => {
  const calculateTimeLeft = () => {
    // let difference = 1595744280000 - +new Date();
    const difference = +new Date('2020-08-04') - +new Date();
    let timeLeft = {};

    if (difference >= 0) {
      let days = Math.floor(difference / (1000 * 60 * 60 * 24));
      let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      let minutes = Math.floor((difference / 1000 / 60) % 60);
      let seconds = Math.floor((difference / 1000) % 60);

      days = days < 10 ? `0${days}` : days;
      hours = hours < 10 ? `0${hours}` : hours;
      minutes = minutes < 10 ? `0${minutes}` : minutes;
      seconds = seconds < 10 ? `0${seconds}` : seconds;

      timeLeft = { days, hours, minutes, seconds };
    } else if (!showLiveTream) {
      setShowLiveTream(true);
    }

    return timeLeft;
  };

  const [isOpenModal, setOpenModal] = useState(false);
  const [showLiveTream, setShowLiveTream] = useState(false);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  // const showPopupRegister = () => {
  //   setOpenModal(true);
  // }

  const closePopupRegister = () => {
    setOpenModal(false);
  };

  return (
    <div className="container landing-page">
      <div className="header">
        <img
          alt="logo"
          src={logo}
          className="logo"
        />
        <h1 className="header-title">Tham gia sự kiện</h1>
        <div className="header-des">Mở khóa siêu thị ứng dụng Digilife</div>
      </div>

      {!showLiveTream
        && (
        <>
          {/* <div className="wrapper">
            <span className="btn-register" onClick={showPopupRegister}>ĐĂNG KÝ</span>
          </div> */}

          <div className="wrapper">
            <TimeBox
              number={timeLeft.days}
              text="Ngày"
            />
            <TimeBox
              number={timeLeft.hours}
              text="Giờ"
            />
            <TimeBox
              number={timeLeft.minutes}
              text="Phút"
            />
            <TimeBox
              number={timeLeft.seconds}
              text="Giây"
              isEnd
            />
          </div>
        </>
        )}

      {showLiveTream
        && (
        <img
          alt="img"
          src={background}
          className="img-live"
        />
        )}

      <div className="slide-img">
        <SlideImg />
      </div>

      <div className="wrapper">
        <BoxDes
          src={icon1}
          text="Sở hữa tấm vé đặc biệt chưa từng có"
        />
        <BoxDes
          src={icon2}
          text="Không gian âm nhạc cực đã với phần trình diễn cùng với Bích Phương và Dalab"
        />
        <BoxDes
          src={icon3}
          text="Tải nghiệm ấn tượng với Tatoo và tự mix nhạc"
        />
        <BoxDes
          src={icon4}
          isEnd
          text="Check in, tương tác và nhận quà giá trị"
        />
      </div>

      <div>
        <div className="qr-title">TẢI VỀ</div>
        <div className="qr-des">Digilife dành cho thiết bị di động</div>
        <div className="wrapper">
          <img
            alt="qr-code"
            src={gg_play}
            className="img-QRcode mr-5"
          />
          <img
            alt="qr-code"
            src={app_store}
            className="img-QRcode"
          />
        </div>
      </div>

      <footer> Digi Life @ Bản quyền thuộc về tập đoàn Bưu chính viễn thông - VNPT</footer>

      <KCSModal
        isOpenModal={isOpenModal}
        closeModal={closePopupRegister}
        confirmButton="Join now"
      />
    </div>
  );
};

export default LandingPage;
