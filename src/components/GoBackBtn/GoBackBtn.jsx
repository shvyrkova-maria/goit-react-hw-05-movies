import React from 'react';
import { useHistory } from 'react-router-dom';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { GoHome } from 'react-icons/go';

function GoBackBtn() {
  // const history = useHistory();
  // const handleClickGoHome = () => history.push('/');
  // const handleClickGoBack = () => history.goBack();

  const { push, goBack } = useHistory();
  return (
    <>
      <button onClick={() => push('/')}>
        <GoHome /> Home
      </button>
      <button onClick={() => goBack()}>
        <RiArrowGoBackFill /> Back
      </button>
    </>
  );
}

export default GoBackBtn;
