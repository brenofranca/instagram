import {getStatusBarHeight} from 'react-native-status-bar-height';
import Icon from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: ${getStatusBarHeight()};
`;
export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  background-color: #f7f7f7;
  border-bottom-width: 1px;
  border-bottom-color: #ddd;
  height: ${getStatusBarHeight()};
`;

export const DirectMessage = styled.TouchableOpacity``;

export const DirectMessageIcon = styled(Icon).attrs({
  size: 15,
})``;

export const Camera = styled.TouchableOpacity``;

export const CameraIcon = styled(Icon).attrs({
  size: 15,
})``;
