import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

const StyledCell = styled.div`
  display: flex;
  width: 32%;
  height: 32%;
  border: 1px solid lightgrey;
  justify-content: center;
  align-items: center;
`;

const DigitCell = ({ value }) => <StyledCell>{value}</StyledCell>;

DigitCell.propTypes = {
  value: string,
};

export default DigitCell;
