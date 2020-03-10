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
  const {count, addCount, subCount} = useStoreCount();

  return (
    <Container>
      <Title>Contador </Title>
      <ContainerCount>
        <Count>{count}</Count>
      </ContainerCount>
      <ContainerButtons>
        <Buttons red onPress={() => subCount()}>
          <Title>-</Title>
        </Buttons>
        <Buttons onPress={() => addCount()}>
          <Title>+</Title>
        </Buttons>
      </ContainerButtons>
    </Container>
  );
};

export {CountComponent};
