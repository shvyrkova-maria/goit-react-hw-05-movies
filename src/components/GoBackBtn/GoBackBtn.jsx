import React from 'react';
import { useHistory } from 'react-router-dom';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { GoHome } from 'react-icons/go';
import { BtnWrap, Btn } from 'components/GoBackBtn/GoBackBtn.styled';

function GoBackBtn() {
  const { push, goBack } = useHistory();
  return (
    <BtnWrap>
      <Btn onClick={() => push('/')}>
        <GoHome />
      </Btn>
      <Btn onClick={() => goBack()}>
        <RiArrowGoBackFill />
      </Btn>
    </BtnWrap>
  );
}

export default GoBackBtn;

// const history = useHistory();
// const handleClickGoHome = () => history.push('/');
// const handleClickGoBack = () => history.goBack();
