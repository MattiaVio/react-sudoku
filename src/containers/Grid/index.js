import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectGrid, selectParsedGrid } from './selectors';
import { isGridFull, checkSolution, getBlockNumber } from './utils';
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
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    setButtonDisabled(isGridFull(parsedGrid));
  }, [parsedGrid]);

  return (
    <>
      <StyledGrid>
        {blocks.map((block) => <CellBlock block={block} />)}
      </StyledGrid>
      <input type="button" value="Check Solution" onClick={() => checkSolution(parsedGrid)} disabled={buttonDisabled} />
    </>
  );
};

export default Grid;
