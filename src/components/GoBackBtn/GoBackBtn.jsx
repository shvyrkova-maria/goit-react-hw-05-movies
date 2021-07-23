import React from 'react';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { GoHome } from 'react-icons/go';

function GoBackBtn() {
  return (
    <>
      <button>
        <GoHome /> Home
      </button>
      <button>
        <RiArrowGoBackFill /> Return
      </button>
    </>
  );
}

export default GoBackBtn;
