import React from 'react';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/fontawesome-free-solid';
import { withRouter } from 'react-router';
import { LOGIN, HOME_PAGE } from 'global/routes';

const Header = (props) => {
  const handleLogin = () => {
    props.history.push(LOGIN);
  }

  const goToHomePage = () => {
    props.history.push(HOME_PAGE);
  }

  return (
    <div className="container header">
      <h3 onClick={goToHomePage} className="pointer">HOME</h3>
      <FontAwesomeIcon
        color="#fff"
        icon={faUserCircle}
        onClick={handleLogin}
        size="2x"
      />
    </div>
  );
}

export default withRouter(Header);
