import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { GoHome } from 'react-icons/go';
import { BtnWrap, Btn } from 'components/GoBackBtn/GoBackBtn.styled';

function GoBackBtn() {
  const history = useHistory();
  const location = useLocation();
  const handleClickGoHome = () => history.push('/');
  const handleClickGoBack = () => {
    history.push(location?.state?.from ?? '/');
  };

  return (
    <BtnWrap>
      <Btn onClick={handleClickGoHome}>
        <GoHome />
      </Btn>
      <Btn onClick={handleClickGoBack}>
        <RiArrowGoBackFill />
      </Btn>
    </BtnWrap>
  );
}

export default GoBackBtn;

// function GoBackBtn() {
//   const { push, goBack } = useHistory();
//   return (
//     <BtnWrap>
//       <Btn onClick={() => push('/')}>
//         <GoHome />
//       </Btn>
//       <Btn onClick={() => goBack()}>
//         <RiArrowGoBackFill />
//       </Btn>
//     </BtnWrap>
//   );
// }

// export default GoBackBtn;
