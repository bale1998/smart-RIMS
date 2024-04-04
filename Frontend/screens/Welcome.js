import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';




import {Formik} from 'formik';
import {View} from 'react-native'

//icons
import {Octicons , Ionicons, Fontisto} from '@expo/vector-icons';


import {
    InnerContainer,
    PageTitle,
    SubTitle,
    StyledFormArea,
    StyledButton,
    ButtonText,
    Line,
    WelcomeContainer,
    WelcomeImage,
    Avatar

} from '../Components/styles';


const Welcome = () => {
    return (
        <>
            <StatusBar style="light"/>
            <InnerContainer>
                
                <WelcomeImage resizeMode="cover" source={require('./../assets/logo.png')} />
                <WelcomeContainer>
                    <PageTitle Welcome={true}> Welcome! </PageTitle>
                    <SubTitle Welcome={true}>To SMART RIMS</SubTitle>   
                
                    <StyledFormArea>
                    <Avatar resizeMode="cover" source={require('./../assets/logo.png')}/>
                    <Line />
                        <StyledButton  onPress={() => {}}>
                            <ButtonText> START</ButtonText>
                        </StyledButton>
                        
                       

                    </StyledFormArea>
                </WelcomeContainer>
            </InnerContainer>
        </>
    );

};



export default Welcome;