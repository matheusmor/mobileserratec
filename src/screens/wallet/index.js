import React,{useState} from 'react';
import {Switch} from 'react-native';
import {Feather,MaterialCommunityIcons,FontAwesome, AntDesign} from '@expo/vector-icons';
import { Wrapper,
     Header,
    HeaderContainer,
    Title,
    BalanceContainer,
    Value,
    Bold,
    EyeButton,
    Info,
    Actions,
    Action,
    ActionLabel,
    UseBalance,
    UsebalanceTitle,
    PaymentMehods,
    PaymentMethodsTitle,
    Card,
    CardDetails,
    CardInfo,
    CardTitle,
    Img,
    CardBody,
    AddButton,
    AddLabel,
    UseTicketButton,
    UseTicketLabel,
    UseTicketcontainer,
 } from './style';

 import creditCard from '../../images/credit-card.png';

export default function Wallet(){

    const [isVisible,setIsVisible]=useState(true);
    const [useBalance,setUseBalance]=useState(true);

    function handleToggleVisible(){
        setIsVisible((prevState)=>!prevState);
    }
    function handleToggleUsebalance(){
        setUseBalance((prevState)=>!prevState);

    }

    return (
        <Wrapper>
            <Header colors={useBalance ?[ '#52e78c','#1ab563']:['#d3d3d3','#868686'] }>
                <HeaderContainer>
                    <Title>Saldo Picpay</Title>

                    <BalanceContainer>
                        <Value>
                            R$<Bold>{isVisible ?'0,00':'----'}</Bold>
                        </Value>
                        <EyeButton onPress={handleToggleVisible} >
                            <Feather name={isVisible?'eye':'eye-off'} size={28} color="#fff" />
                        </EyeButton>
                    </BalanceContainer>
                    <Info>
                        Seu saldo está rendendo 100% do CDI
                    </Info>
                    <Actions>
                        <Action>
                            <MaterialCommunityIcons name="cash" size={26} color="#fff" />
                            <ActionLabel>Adicionar</ActionLabel>
                        </Action>
                        <Action>
                            <FontAwesome name="bank" size={20} color="#fff" />
                            <ActionLabel>Retirar</ActionLabel>
                        </Action>
                    </Actions>
                </HeaderContainer>
            </Header>
            <UseBalance>
                <UsebalanceTitle>
                    Usar saldo ao pagar
                </UsebalanceTitle>
                <Switch
                 value={useBalance}
                 onValueChange={handleToggleUsebalance}
                 />
            </UseBalance>
            <PaymentMehods>
                <PaymentMethodsTitle>
                    Formas de pagamento
                </PaymentMethodsTitle>
                <Card>
                   <CardBody>
                   <CardDetails>
                        <CardTitle>Cadastre seu cartão de crédito</CardTitle>
                        <CardInfo>
                            Cadastre um cartão de crédito para poder fazer pagamentos mesmo quando não tiver saldo no seu PicPay.
                        </CardInfo>
                    </CardDetails>
                    <Img source={creditCard} resizeMode="contain" />
                   </CardBody>
                   <AddButton>
                       <AntDesign name="pluscircleo" size={30} color="#0db060" />
                       <AddLabel>Adicionar cartão de crédito</AddLabel>
                   </AddButton>
                </Card>
               <UseTicketcontainer>
               <UseTicketButton>
                    <MaterialCommunityIcons name="ticket-outline" size={20} color="#0db060" />
                    <UseTicketLabel>
                        Usar código promocional
                    </UseTicketLabel>

                </UseTicketButton>
               </UseTicketcontainer>
            </PaymentMehods>
        </Wrapper>
    );
}
