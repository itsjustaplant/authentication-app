/* eslint-disable require-jsdoc, max-len, no-unused-vars */

import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import TweenMax from 'gsap';

function EditStyled(props) {
  let elementRef = useRef(null);
  let Tween;

  useEffect(() => {
    Tween = TweenMax.to(
        elementRef,
        {
          opacity: 1,
          y: -10,
        },
    );
  }, []);
  return (
    <h1
      className={props.className}
      ref={(element) => {
        elementRef = element;
      }}
    >
      SA
    </h1>
  );
};

export const Edit = styled(EditStyled)`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #bdbdbd;
  border-radius: 24px;
  padding: 60px 0;
  width: clamp(360px, 60%, 480px);
  opacity: 0;
`;

EditStyled.propTypes = {
  className: PropTypes.string.isRequired,
};
