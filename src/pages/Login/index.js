import React from 'react';

import { Container } from '../../styles/GlobalStyles';
import { Title } from './styled';

export default function Login() {
  return (
    <Container>
      <Title>
        Login
        <small>Oii</small>
      </Title>
      <p>Lorem.</p>
      <button type="button">Enviar</button>
    </Container>
  );
}
