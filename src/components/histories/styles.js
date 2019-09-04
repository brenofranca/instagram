import Icon from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #f7f7f7;
  border-bottom-width: 1px;
  border-bottom-color: #ddd;
  flex-direction: row;
  align-items: center;
`;

export const MyHistoryList = styled.FlatList`
  padding: 10px;
`;

export const MyHistory = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  margin-bottom: 10px;
  margin-right: 10px;
  border: 2px solid ${props => (props.withBorder ? '#e1306c' : 'transparent')};
`;

export const MyHistoryImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 30px;
  margin-bottom: 5px;
`;

export const MyHistoryBadge = styled(Icon).attrs({
  color: '#5395eb',
  size: 17,
})`
  position: absolute;
  left: 70%;
  top: 70%;
`;

export const User = styled.Text`
  font-size: 10px;
`;
