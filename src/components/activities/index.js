import React from 'react';
import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import { Container, Header,Title,Card,CardHeader,Avatar, 
    Description, 
    Bold,CardBody,UserName,
    CardFooter,
    Details,
    Value,
    Divider,
    Date,
    Actions,
    Option,
    OptionLabel,
    
 } from './styles';
import avatar from '../../images/avatar.png';

export default function Ativities(){
    return (
        <Container>
            <Header>
                <Title>Atividades</Title>

            </Header>
            <Card>
                <CardHeader>
                    <Avatar source={avatar} />
                    <Description>
                        <Bold>Você</Bold> pagou a <Bold>@matheusRodrigues</Bold>
                    </Description>
                </CardHeader>
                <CardBody>
                    <UserName>Matheus Rodrigues</UserName>
                </CardBody>
                <CardFooter>
                <Details>
                    <Value>R$ 18,00</Value>
                    <Divider />
                    <Feather name="lock" color="#fff" syze={14} />
                        <Date>há 2 anos</Date>
                </Details>

                <Actions>
                    <Option>
                        <MaterialCommunityIcons name="comment-outline" syze={14} color="#fff" />
                        <OptionLabel>0</OptionLabel>
                    </Option>
                    <Option>
                        <AntDesign name="hearto" syze={14} color="#fff" />
                        <OptionLabel>0</OptionLabel>
                    </Option>

                </Actions>

                </CardFooter>
            </Card>
        </Container>
    );
}