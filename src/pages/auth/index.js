import React, {useState} from 'react';
import {
  Button,
  ButtonText,
  Container,
  Form,
  Logo,
  Password,
  Username,
} from './styles';

export default function auth({navigation}) {
  const [email, setEmail] = useState('franciscobreno.si@gmail.com');
  const [password, setPassword] = useState('secret');

  function authenticate() {
    // call api
    navigation.navigate('HomeScreen');
  }

  return (
    <Container behavior="padding">
      <Form>
        <Logo
          source={require('../../assets/images/logo_auth.png')}
          resizeMode="contain"
        />
        <Username
          autoCapitalize="none"
          autoCorrect={false}
          autoFocus={true}
          returnKeyType="next"
          placeholder="Usuário"
          value={email}
          onChangeText={setEmail}
          onSubmitEditing={() => this.PasswordInputRef.focus()}
        />
        <Password
          autoCapitalize="none"
          autoCorrect={false}
          autoFocus={true}
          secureTextEntry={true}
          placeholder="Senha"
          returnKeyType="done"
          ref={passwordRef => (this.PasswordInputRef = passwordRef)}
          value={password}
          onChangeText={setPassword}
          onSubmitEditing={() => authenticate()}
        />
        <Button onPress={() => authenticate()}>
          <ButtonText>Acessar</ButtonText>
        </Button>
      </Form>
    </Container>
  );
}
