import React from 'react';
import styled from 'styled-components';

import { Container, Grid, GridCell } from './Grid';
import ImageSearch from './ImageSearch';

const RecentSearches = styled.ol`
  margin: 0;
  padding: 20px;
  background: #eee;
`;
const SearchItem = styled.li`
  list-style-type: none;
`;

export default function App() {
  return (
    <Container>
      <Grid>
        <GridCell cols="6">
          <ImageSearch />
        </GridCell>

        <GridCell>
          <RecentSearches>
            <SearchItem>
              image
              search query
            </SearchItem>
          </RecentSearches>
        </GridCell>
      </Grid>
    </Container>
  );
}
