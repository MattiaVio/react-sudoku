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

export const checkGridIsFull = (parsedGrid) => Boolean(Object.keys(parsedGrid).find((key) => parsedGrid[key].value === '.'));
