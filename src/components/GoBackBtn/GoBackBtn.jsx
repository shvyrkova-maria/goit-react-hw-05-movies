import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { GoHome } from 'react-icons/go';

function GoBackBtn() {
  const history = useHistory();
  const location = useLocation();
  console.log(location);

  const handleClickGoHome = () => {
    history.push('/');
  };

  const handleClickGoBack = () => {
    history.goBack();
  };

  return (
    <>
      <button onClick={handleClickGoHome}>
        <GoHome /> Home
      </button>
      <button onClick={handleClickGoBack}>
        <RiArrowGoBackFill /> Return
      </button>
    </>
  );
}

export default GoBackBtn;
