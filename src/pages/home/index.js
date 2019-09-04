import React from 'react';
import HeaderLogo from '../../components/headerLogo';
import Histories from '../../components/histories';
import {
  Camera,
  CameraIcon,
  Container,
  DirectMessage,
  DirectMessageIcon,
  Header,
} from './styles';

export default function home() {
  return (
    <Container>
      <Header>
        <Camera>
          <CameraIcon name="camera" />
        </Camera>
        <HeaderLogo />
        <DirectMessage>
          <DirectMessageIcon name="send" />
        </DirectMessage>
      </Header>
      <Histories />
    </Container>
  );
}
