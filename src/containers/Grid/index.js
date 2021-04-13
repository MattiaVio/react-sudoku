import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectGrid, selectParsedGrid } from './selectors';
import { checkGridIsFull, getBlockNumber } from './utils';
import CellBlock from '../../components/CellBlock';
import { StyledGrid } from './styles';

export const formatBlocks = (grid) => {
  const blocks = [[], [], [], [], [], [], [], [], []];

  for (let row = 0; row < 9; row += 1) {
    for (let column = 0; column < 9; column += 1) {
      const block = getBlockNumber(row, column);
      blocks[block].push({
        row, column, block, value: grid[row][column],
      });
    }
  }

  return blocks;
};

const Grid = () => {
  const grid = useSelector(selectGrid);
  const blocks = formatBlocks(grid);
  const parsedGrid = useSelector(selectParsedGrid);

  useEffect(() => {
    console.log(checkGridIsFull(parsedGrid));
  }, [parsedGrid]);

  return (
    <StyledGrid>
      {blocks.map((block) => <CellBlock block={block} />)}
    </StyledGrid>
  );
};

export default Grid;
