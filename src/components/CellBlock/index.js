import React from 'react';
import { array } from 'prop-types';
import DigitCell from '../DigitCell';
import { StyledBlock } from './styles';

const CellBlock = ({ block }) => (
  <StyledBlock>
    {block.map((cell) => <DigitCell cell={cell} />)}
  </StyledBlock>
);

CellBlock.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  block: array,
};

export default CellBlock;
