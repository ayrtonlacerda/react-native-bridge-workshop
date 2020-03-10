import React, {useState, useEffect, useRef} from 'react';

// redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Actions} from '../store/actions';

import {
  Container,
  ContainerCount,
  Title,
  Count,
  ContainerButtons,
  Buttons,
} from './styles';

const CountComponent = ({count, addCount, subCount}) => {
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

const mapStateToProps = state => ({
  ...state.reducer,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...Actions,
    },
    dispatch,
  );

const Connected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CountComponent);

export {Connected as CountComponent};
