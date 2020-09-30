import React from 'react';

import {Container, Details, Img,Title,Description} from './style';

import img14 from '../../images/13.png';

export default function Banner(){
    return (
        <Container>
            <Details>
<Title>Cobre um amigo</Title>
<Description>
Matenha suas parcerias em dia, use o picpay para fazer suas cobranças.
</Description>
            </Details>
            <Img source={img14} />
        </Container>

    );

}