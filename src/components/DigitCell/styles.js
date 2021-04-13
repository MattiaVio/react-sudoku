import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

export const StyledCell = styled.div`
  display: flex;
  width: 32%;
  height: 32%;
  border: 1px solid lightgrey;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`;

export const StyledInput = styled(TextField)`
  border: 0;
  text-align: center;
  font-size: 2rem;
  font-family: unset;
`;
