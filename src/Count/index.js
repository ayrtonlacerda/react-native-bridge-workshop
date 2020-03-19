import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
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
  const {count, increase, reset, data, asyncFunction} = useStoreCount();

  console.log({data});
  return (
    <Container>
      <Title>Contador </Title>
      <ContainerCount>
        <Count>{data || count}</Count>
      </ContainerCount>
      <ContainerButtons>
        {!data && (
          <>
            <Buttons red onPress={() => reset()}>
              <Title>-</Title>
            </Buttons>
            <Buttons onPress={() => asyncFunction()}>
              <Title>+</Title>
            </Buttons>
          </>
        )}
      </ContainerButtons>
    </Container>
  );
};

export {CountComponent};
