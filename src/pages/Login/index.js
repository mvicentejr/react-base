import React from 'react';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import { Title } from './styled';
import * as exampleActions from '../../store/modules/example/actions';

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    dispatch(exampleActions.clicaBotao());
  }

  return (
    <Container>
      <Title>
        Login
        <small>Oii</small>
      </Title>
      <p>Lorem.</p>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
