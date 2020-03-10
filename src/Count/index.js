import React, {useState, useEffect, useRef} from 'react';
import {useStoreCount} from '../store';

import {
  Container,
  ContainerCount,
  Title,
  Count,
  ContainerButtons,
  Buttons,
} from './styles';

const CountComponent = ({}) => {
  const {count, increase, reset} = useStoreCount();

  return (
    <Container>
      <Title>Contador </Title>
      <ContainerCount>
        <Count>{count}</Count>
      </ContainerCount>
      <ContainerButtons>
        <Buttons red onPress={() => reset()}>
          <Title>-</Title>
        </Buttons>
        <Buttons onPress={() => increase()}>
          <Title>+</Title>
        </Buttons>
      </ContainerButtons>
    </Container>
  );
};

export {CountComponent};
