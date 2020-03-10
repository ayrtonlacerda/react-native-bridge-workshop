import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #444;
`;

export const ContainerCount = styled.View`
  align-items: center;
  justify-content: center;
  background-color: #00c49f;
  padding-top: 10;
  padding-bottom: 10;
  padding-horizontal: 25;
  border-radius: 10;
  elevation: 15;
  margin-top: 20;
`;

export const ContainerButtons = styled.View`
  display: flex;
  width: 200;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 10;
  padding-bottom: 10;
  padding-horizontal: 25;
  margin-top: 30;
`;

export const Buttons = styled.TouchableOpacity`
  display: flex;
  height: 50;
  width: 50;
  border-radius: 25;
  align-items: center;
  justify-content: center;
  margin-top: 30;
  background-color: ${props => (props.red ? '#e40505' : '#05aa07')};
`;

export const Title = styled.Text`
  font-size: 35;
  color: #fff;
`;

export const Count = styled.Text`
  font-size: 50;
  font-weight: bold;
  color: #fff;
`;
