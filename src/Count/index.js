import React, {useContext} from 'react';
import {StoreContext} from '../store';

import {
  Container,
  ContainerCount,
  Title,
  Count,
  ContainerButtons,
  Buttons,
} from './styles';

const CountComponent = ({}) => {
  const [count, setCount] = useContext(StoreContext);
  console.log(setCount);
  return (
    <Container>
      <Title>Contador </Title>
      <ContainerCount>
        <Count>{count}</Count>
      </ContainerCount>
      <ContainerButtons>
        <Buttons red onPress={() => setCount(count - 1)}>
          <Title>-</Title>
        </Buttons>
        <Buttons onPress={() => setCount(count + 1)}>
          <Title>+</Title>
        </Buttons>
      </ContainerButtons>
    </Container>
  );
};

export {CountComponent};
