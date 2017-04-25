import React from 'react';
import styled from 'styled-components';

import cakeSearch from './cake.json';
import { Container, Row, Cell } from './Grid';

export default function App() {
  const images = cakeSearch.results;
  return (
    <Container>
      <Row>
        {images.map(img => (
          <Cell cols="6" key={img.id}>
            <img src={img.urls.regular} style={{ maxWidth: '100%' }} />
          </Cell>
        ))}
      </Row>
    </Container>
  );
}
