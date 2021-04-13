import React, { useCallback, useEffect, useState } from 'react';
import { object } from 'prop-types';
import { useDispatch } from 'react-redux';
import { UPDATE_CELL } from '../../reducers/Sudoku/constants';
import { StyledCell, StyledInput } from './styles';

const DigitCell = ({ cell }) => {
  const { value, row, column } = cell;
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const [newValue, setNewValue] = useState(undefined);

  useEffect(() => {
    if (!error && newValue) {
      dispatch({ type: UPDATE_CELL, value: { row, column, value: String(newValue) } });
    }
  }, [useDispatch, error, newValue, row, column]);

  const validateInput = useCallback((event) => {
    const enteredValue = parseInt(event.target.value, 10);

    setNewValue(enteredValue);

    if (enteredValue !== undefined) {
      setError(enteredValue < 1 || enteredValue > 9);
    }
  }, []);

  if (value === '.' && !error) {
    return (
      <StyledCell>
        <StyledInput type="number" onChange={validateInput} />
      </StyledCell>
    );
  }

  if (error) {
    return (
      <StyledCell>
        <StyledInput type="number" error label="Error" onChange={validateInput} />
      </StyledCell>
    );
  }

  return <StyledCell>{value}</StyledCell>;
};

DigitCell.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  cell: object,
};

export default DigitCell;
