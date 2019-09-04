import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: #8a3ab9;
`;

export const Form = styled.View`
  height: 100%;
  padding: 30px;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  width: 300px;
  height: 100px;
`;

export const Username = styled.TextInput`
  height: 40px;
  width: 100%;
  border-radius: 2px;
  background-color: rgba(255, 255, 255, 0.3);
  padding: 10px;
`;
export const Password = styled.TextInput`
  height: 40px;
  width: 100%;
  border-radius: 2px;
  background-color: rgba(255, 255, 255, 0.3);
  padding: 10px;
  margin-top: 10px;
`;

export const Button = styled.TouchableOpacity`
  border-radius: 2px;
  border: 0.5px solid #fff;
  width: 100%;
  height: 40px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
`;
