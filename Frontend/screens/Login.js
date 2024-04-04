import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';




import {Formik} from 'formik';
import {View} from 'react-native'

//icons
import {Octicons , Ionicons, Fontisto} from '@expo/vector-icons';


import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    RightIcon,
    StyledInputLabel,
    StyledTextInput,
    Colors,
    StyledButton,
    ButtonText,
    MsgBox,
    Line,
    ExtraView,
    ExtraText,
    TextLink,
    TextLinkContent

} from '../Components/styles';



//color
const {brand , darklight, primary} = Colors;

import KeyboardAvoidingWrapper from '/home/balzen/Desktop/POTHOLE/FRONTEND/Components/KeyboardAvoidingWrapper.js';

const Login = ({navigation}) => {
    const [hidePassword , setHidePassword] = useState(true);
    return (
        <KeyboardAvoidingWrapper><StyledContainer>
            <StatusBar style="dark"/>
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('./../assets/logo.png')}/>
                <PageTitle> Smart RIMS </PageTitle>
                <SubTitle>Account Login</SubTitle>
                <Formik
                    initialValues={{email: '',password: ''}}
                    onSubmit={(values) => {
                        console.log(values);
                        navigation.navigate("Welcome");
                    }}
                >
                    
                    {({handleChange , handleBlur, handleSubmit, values}) => (
                    <StyledFormArea>
                        <MyTextInput 
                            label= "Email Address"
                            icon="mail"
                            placeholder = "keketsobale@gmail.com"
                            placeholderTextColor= {darklight}
                            onChangeText = {handleChange('email')}
                            onBlur= {handleBlur('email')}
                            value = {values.email}
                            keyBoardType= "email-address"
                        />
                        <MyTextInput 
                            label = "Password"
                            icon = "lock"
                            placeholder = "* * * * * * * *"
                            placeholderTextColor = {darklight}
                            onChangeText = {handleChange('password')}
                            onBlur = {handleBlur('password')}
                            value = {values.password}
                            secureTextEntry = {hidePassword}
                            isPassword = {true}
                            hidePassword = {hidePassword}
                            setHidePassword = {setHidePassword}
                        />
                        <MsgBox>...</MsgBox>
                        <StyledButton  onPress={handleSubmit}>
                            <ButtonText> Login</ButtonText>
                        </StyledButton>
                        <Line />
                        <StyledButton google = {true} onPress={handleSubmit}>
                            <Fontisto name="google" color={primary} size = {25} />
                            <ButtonText > Sign in with google </ButtonText>
                        </StyledButton>
                        <ExtraView>
                            <ExtraText>Don't have account already?</ExtraText>
                            <TextLink onPress={() =>  navigation.navigate("Signup")}>
                                <TextLinkContent>Signup</TextLinkContent>
                            </TextLink>
                        </ExtraView>

                    </StyledFormArea>)
                }

                </Formik>
            </InnerContainer>
        </StyledContainer></KeyboardAvoidingWrapper>
    );

};
const MyTextInput = ({label, icon, isPassword , hidePassword , setHidePassword, ...props}) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={brand}/>
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props} />
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)} >
                    <Ionicons name ={hidePassword ? 'md-eye-off' : 'md-eye'} size = {30} color={darklight}/>
                </RightIcon>
            )}
        </View>
    );
};



export default Login;