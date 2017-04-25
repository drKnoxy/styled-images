import styled from 'styled-components';

const gutter = '1%';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 30px 0;
`;

export const Row = styled.div`
  position: relative;
  width: 100%
  margin: .5rem -${gutter};
  
  &::after {
    content: '';
    display: table;
    clear: both;
  }
`;

export const Cell = styled.div`
  width: ${props => props.cols / 12 * 100}%;
  float: left;
  padding: 0.5rem ${gutter};
  min-height: 0.125rem;
`;
