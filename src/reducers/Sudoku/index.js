import { produce } from 'immer';
import set from 'lodash/set';
import { SOLUTION_SEARCH, SOLUTION_FOUND, UPDATE_CELL } from './constants';

export const initialState = {
  grid: [
    ['.', '9', '.', '.', '4', '2', '1', '3', '6'],
    ['.', '.', '.', '9', '6', '.', '4', '8', '5'],
    ['.', '.', '.', '5', '8', '1', '.', '.', '.'],
    ['.', '.', '4', '.', '.', '.', '.', '.', '.'],
    ['5', '1', '7', '2', '.', '.', '9', '.', '.'],
    ['6', '.', '2', '.', '.', '.', '3', '7', '.'],
    ['1', '.', '.', '8', '.', '4', '.', '2', '.'],
    ['7', '.', '6', '.', '.', '.', '8', '1', '.'],
    ['3', '.', '.', '.', '9', '.', '.', '.', '.'],
  ],
  parsedGrid: {
    r0c0: { row: 0, column: 0, value: '.' },
    r0c1: { row: 0, column: 1, value: '9' },
    r0c2: { row: 0, column: 2, value: '.' },
    r0c3: { row: 0, column: 3, value: '.' },
    r0c4: { row: 0, column: 4, value: '4' },
    r0c5: { row: 0, column: 5, value: '2' },
    r0c6: { row: 0, column: 6, value: '1' },
    r0c7: { row: 0, column: 7, value: '3' },
    r0c8: { row: 0, column: 8, value: '6' },
    r1c0: { row: 1, column: 0, value: '.' },
    r1c1: { row: 1, column: 1, value: '.' },
    r1c2: { row: 1, column: 2, value: '.' },
    r1c3: { row: 1, column: 3, value: '9' },
    r1c4: { row: 1, column: 4, value: '6' },
    r1c5: { row: 1, column: 5, value: '.' },
    r1c6: { row: 1, column: 6, value: '4' },
    r1c7: { row: 1, column: 7, value: '8' },
    r1c8: { row: 1, column: 8, value: '5' },
    r2c0: { row: 2, column: 0, value: '.' },
    r2c1: { row: 2, column: 1, value: '.' },
    r2c2: { row: 2, column: 2, value: '.' },
    r2c3: { row: 2, column: 3, value: '5' },
    r2c4: { row: 2, column: 4, value: '8' },
    r2c5: { row: 2, column: 5, value: '1' },
    r2c6: { row: 2, column: 6, value: '.' },
    r2c7: { row: 2, column: 7, value: '.' },
    r2c8: { row: 2, column: 8, value: '.' },
    r3c0: { row: 3, column: 0, value: '.' },
    r3c1: { row: 3, column: 1, value: '.' },
    r3c2: { row: 3, column: 2, value: '4' },
    r3c3: { row: 3, column: 3, value: '.' },
    r3c4: { row: 3, column: 4, value: '.' },
    r3c5: { row: 3, column: 5, value: '.' },
    r3c6: { row: 3, column: 6, value: '.' },
    r3c7: { row: 3, column: 7, value: '.' },
    r3c8: { row: 3, column: 8, value: '.' },
    r4c0: { row: 4, column: 0, value: '5' },
    r4c1: { row: 4, column: 1, value: '1' },
    r4c2: { row: 4, column: 2, value: '7' },
    r4c3: { row: 4, column: 3, value: '2' },
    r4c4: { row: 4, column: 4, value: '.' },
    r4c5: { row: 4, column: 5, value: '.' },
    r4c6: { row: 4, column: 6, value: '9' },
    r4c7: { row: 4, column: 7, value: '.' },
    r4c8: { row: 4, column: 8, value: '.' },
    r5c0: { row: 5, column: 0, value: '6' },
    r5c1: { row: 5, column: 1, value: '.' },
    r5c2: { row: 5, column: 2, value: '2' },
    r5c3: { row: 5, column: 3, value: '.' },
    r5c4: { row: 5, column: 4, value: '.' },
    r5c5: { row: 5, column: 5, value: '.' },
    r5c6: { row: 5, column: 6, value: '3' },
    r5c7: { row: 5, column: 7, value: '7' },
    r5c8: { row: 5, column: 8, value: '.' },
    r6c0: { row: 6, column: 0, value: '1' },
    r6c1: { row: 6, column: 1, value: '.' },
    r6c2: { row: 6, column: 2, value: '.' },
    r6c3: { row: 6, column: 3, value: '8' },
    r6c4: { row: 6, column: 4, value: '.' },
    r6c5: { row: 6, column: 5, value: '4' },
    r6c6: { row: 6, column: 6, value: '.' },
    r6c7: { row: 6, column: 7, value: '2' },
    r6c8: { row: 6, column: 8, value: '.' },
    r7c0: { row: 7, column: 0, value: '7' },
    r7c1: { row: 7, column: 1, value: '.' },
    r7c2: { row: 7, column: 2, value: '6' },
    r7c3: { row: 7, column: 3, value: '.' },
    r7c4: { row: 7, column: 4, value: '.' },
    r7c5: { row: 7, column: 5, value: '.' },
    r7c6: { row: 7, column: 6, value: '8' },
    r7c7: { row: 7, column: 7, value: '1' },
    r7c8: { row: 7, column: 8, value: '.' },
    r8c0: { row: 8, column: 0, value: '3' },
    r8c1: { row: 8, column: 1, value: '.' },
    r8c2: { row: 8, column: 2, value: '.' },
    r8c3: { row: 8, column: 3, value: '.' },
    r8c4: { row: 8, column: 4, value: '9' },
    r8c5: { row: 8, column: 5, value: '.' },
    r8c6: { row: 8, column: 6, value: '.' },
    r8c7: { row: 8, column: 7, value: '.' },
    r8c8: { row: 8, column: 8, value: '.' },
  },
  loading: false,
  solution: 'keep dreaming you cheater',
};

export default produce((draft, action) => {
  // eslint-disable-next-line default-case
  switch (action?.type) {
    case SOLUTION_SEARCH:
      set(draft, 'loading', true);
      break;
    case SOLUTION_FOUND:
      set(draft, 'warehouse', action.value);
      set(draft, 'loading', false);
      break;
    case UPDATE_CELL: {
      const { row, column } = action.value;

      set(draft, `parsedGrid.r${row}c${column}`, action.value);
      set(draft, 'loading', false);
      break;
    }
  }
}, initialState);
