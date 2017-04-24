import styled from 'styled-components';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 30px 0;
`;

export const Grid = styled.div`
  display: flex;
  margin: 0 -1em;
`;

export const GridCell = styled.div`
  ${props => (props.cols ? `width: ${props.cols / 12 * 100}%` : 'flex: 1')};
  padding: 0 1em;
`;