import React from 'react';
import { array } from 'prop-types';
import styled from 'styled-components';
import DigitCell from '../DigitCell';

const StyledBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: flex-start;
  flex-direction: row;
  flex-grow: 1;
  border: 1px solid red;
  width: 30%;
  height: 30%;
`;

const CellBlock = ({ digits }) => (
  <StyledBlock>
    {digits.map((digit) => <DigitCell value={digit} />)}
  </StyledBlock>
);

CellBlock.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  digits: array,
};

export default CellBlock;
