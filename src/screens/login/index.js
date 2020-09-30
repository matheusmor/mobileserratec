import React,{useState} from 'react';
import {Container,Header,HeaderTitle,BodyContainer,Img,Info,InputInfo,LoginButton,LoginText} from './style'
import imglogo from '../../images/picpaylogo.png'

export default function Login({navigation}){
  const [name, setName] = useState('Usuário');
  const [password, setPassword] = useState('Senha');

return(
    <Container colors={[ '#52e78c','#1ab563']} >
    <Header>
      <HeaderTitle>Faça seu login</HeaderTitle>
      <Img source={imglogo} />
    </Header>
    <BodyContainer>
      <InputInfo value={name} onChangeText={text=>setName(text)} />
      <InputInfo value={password} onChangeText={text=>setPassword(text)} />
      <Info/>
      <LoginButton onPress={() => navigation.navigate('Wallet')} ><LoginText>Entrar</LoginText></LoginButton>
    </BodyContainer>
      </Container>
);

}