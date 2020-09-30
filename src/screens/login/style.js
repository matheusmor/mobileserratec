import styled from 'styled-components/native'
import {LinearGradient} from 'expo-linear-gradient'

export const Container=styled(LinearGradient)`
flex:1;

`;
export const Header=styled.View`
padding-top:30px;
align-items:center;

`;
export const HeaderTitle=styled.Text`
color:#fff;
font-size:18px;
`;
export const Img=styled.Image`

`;

export const BodyContainer=styled.View`
text-align:center;
justify-content:center;
`;
export const InputInfo=styled.TextInput`
background:#0db060;
height: 40;
width:330px;
border-color: gray;
border-width: 1;
margin-bottom:30px;
margin-left:40px;
border-radius:100px;
color: rgba(255,255,255,0.8);
text-align:center;
`;
export const Info=styled.Text``;
export const LoginButton=styled.TouchableOpacity`
background:#000;
height:60px;
margin-left:40px;
border-radius:100px;
width:330px;
color:#fff;
justify-content:center;
`;
export const LoginText=styled.Text`
color:#fff;
text-align:center;

`;