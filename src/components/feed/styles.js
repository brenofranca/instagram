import Icon from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components/native';

export const Items = styled.FlatList`
  height: 100%;
  width: 100%;
`;

export const Content = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #ddd;
  padding-bottom: 10px;
`;

export const Header = styled.View`
  height: 50px;
  flex-direction: row;
  align-items: center;
  padding: 0 10px;
`;

export const Profile = styled.View`
  flex-direction: row;
  flex: 1;
  align-items: center;
`;

export const ImageProfile = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 50px;
`;

export const User = styled.Text`
  width: 80px;
  font-weight: bold;
  font-size: 11px;
  margin-left: 5px;
`;

export const ProfileMoreAction = styled.TouchableOpacity``;

export const ProfileMoreActionIcon = styled(Icon)``;

export const ImageFeed = styled.Image`
  width: 100%;
  aspect-ratio: ${600 / 700};
`;

export const Footer = styled.View`
  /* background-color: orange;
  height: 100px; */
  flex-direction: row;
  padding-right: 10px;
  margin-top: 10px;
  align-items: center;
`;

export const FooterAction = styled.TouchableOpacity`
  margin-left: 10px;
`;

export const ActionsLeft = styled.View`
  flex-direction: row;
  flex: 1;
`;
