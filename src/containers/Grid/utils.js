// get the block number for the current row/column combination
// eslint-disable-next-line import/prefer-default-export,consistent-return
export const getBlockNumber = (row, column) => {
  // eslint-disable-next-line default-case
  switch (row) {
    case 0:
    case 1:
    case 2:
      // eslint-disable-next-line default-case
      switch (column) {
        case 0:
        case 1:
        case 2: return 0;
        case 3:
        case 4:
        case 5: return 1;
        case 6:
        case 7:
        case 8: return 2;
      } break;
    case 3:
    case 4:
    case 5:
      // eslint-disable-next-line default-case
      switch (column) {
        case 0:
        case 1:
        case 2: return 3;
        case 3:
        case 4:
        case 5: return 4;
        case 6:
        case 7:
        case 8: return 5;
      } break;
    case 6:
    case 7:
    case 8:
      // eslint-disable-next-line default-case
      switch (column) {
        case 0:
        case 1:
        case 2: return 6;
        case 3:
        case 4:
        case 5: return 7;
        case 6:
        case 7:
        case 8: return 8;
      } break;
  }
};

export const isGridFull = (parsedGrid) => Boolean(Object.keys(parsedGrid).find((key) => parsedGrid[key].value === '.'));

export const checkChunk = (chunk) => new Set(chunk).size === 9;

export const checkSolution = (parsedGrid) => {
  const toCheckRows = [];
  const toCheckColumns = [];
  const toCheckBlocks = [];

  Object.keys(parsedGrid).forEach((key) => {
    for (let i = 0; i < 9; i += 1) {
      // rows
      if (!toCheckRows[i]) {
        toCheckRows[i] = [];
      }
      if (parsedGrid[key].row === i) {
        toCheckRows[i].push(parsedGrid[key].value);
      }

      // columns
      if (!toCheckColumns[i]) {
        toCheckColumns[i] = [];
      }
      if (parsedGrid[key].column === i) {
        toCheckColumns[i].push(parsedGrid[key].value);
      }

      // blocks
      if (!toCheckBlocks[i]) {
        toCheckBlocks[i] = [];
      }
      if (getBlockNumber(parsedGrid[key].row, parsedGrid[key].column) === i) {
        toCheckBlocks[i].push(parsedGrid[key].value);
      }
    }
  });

  return toCheckRows.every(checkChunk)
      && toCheckColumns.every(checkChunk)
      && toCheckBlocks.every(checkChunk);
};
