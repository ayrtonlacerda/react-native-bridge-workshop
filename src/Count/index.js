import React from 'react';

// redux
import {useSelector, useDispatch} from 'react-redux';
import {Actions} from '../store/actions';

import {
  Container,
  ContainerCount,
  Title,
  Count,
  ContainerButtons,
  Buttons,
} from './styles';

const CountComponent = ({addCount}) => {
  const {count} = useSelector(state => state.reducer);
  const dispatche = useDispatch();

  return (
    <Container>
      <Title>Contador </Title>
      <ContainerCount>
        <Count>{count}</Count>
      </ContainerCount>
      <ContainerButtons>
        <Buttons red onPress={() => dispatche(Actions.subCount())}>
          <Title>-</Title>
        </Buttons>
        <Buttons onPress={() => dispatche(Actions.addCount())}>
          <Title>+</Title>
        </Buttons>
      </ContainerButtons>
    </Container>
  );
};

export {CountComponent};
