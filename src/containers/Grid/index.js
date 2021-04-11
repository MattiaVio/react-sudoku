import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectGrid } from './selectors';
import { getBlockNumber } from './utils';
import CellBlock from '../../components/CellBlock';

const StyledGrid = styled.div`
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  width: 30rem;
  height: 30rem;
`;

export const formatBlocks = (grid) => {
  const blocks = [[], [], [], [], [], [], [], [], []];

  for (let row = 0; row < 9; row += 1) {
    for (let column = 0; column < 9; column += 1) {
      blocks[getBlockNumber(row, column)].push(grid[row][column]);
    }
  }

  return blocks;
};

const Grid = () => {
  const grid = useSelector(selectGrid);
  const blocks = formatBlocks(grid);

  return (
    <StyledGrid>
      {blocks.map((block) => <CellBlock digits={block} />)}
    </StyledGrid>
  );
};

export default Grid;
