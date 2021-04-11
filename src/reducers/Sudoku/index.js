import { produce } from 'immer';
import set from 'lodash/set';
import { SOLUTION_SEARCH, SOLUTION_FOUND } from './constants';

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
  }
}, initialState);
