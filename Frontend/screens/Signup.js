import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';




import {Formik} from 'formik';
import {View , TouchableOpacity} from 'react-native'

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

} from '/home/balzen/Desktop/POTHOLE/FRONTEND/Components/styles.js';



//color
const {brand , darklight, primary} = Colors;
//datetimepicker
import DateTimePicker from '@react-native-community/datetimepicker';

import KeyboardAvoidingWrapper from '/home/balzen/Desktop/POTHOLE/FRONTEND/Components/KeyboardAvoidingWrapper.js';


const Signup = () => {
    const [hidePassword , setHidePassword] = useState(true);
    const [show,setShow] = useState(false);
    const [date,setDate] = useState(new Date(2000, 0, 1));


    //actual date of birth to be sent
    const [dob, setDob] = useState();

    const onChange = (event,selecteDate) => {
        const currentDate = selecteDate || date;
        setShow(false);
        setDate(currentDate);
        setDob(currentDate);
    }

    const showDatePicker = () => {
        setShow(true);
    }

    return (
        <KeyboardAvoidingWrapper><StyledContainer>
            <StatusBar style="dark"/>
            <InnerContainer>
                <PageTitle> Smart RIMS </PageTitle>
                <SubTitle>Account Signup</SubTitle>

                {show && (
                    <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode='date'
                    is24Hour={true}
                    onChange={onChange}
                    />
                )}

                <Formik
                    initialValues={{fullName: '',email: '',dateOfBirth: '',confirmPassword: '',password: ''}}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >
                    
                    {({handleChange , handleBlur, handleSubmit, values}) => (
                    <StyledFormArea>
                        <MyTextInput 
                            label= "Full Name"
                            icon="person"
                            placeholder = "Limpho Makula"
                            placeholderTextColor= {darklight}
                            onChangeText = {handleChange('fullName')}
                            onBlur= {handleBlur('fullName')}
                            value = {values.fullName}
                        />

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
                            label= "Date of Birth"
                            icon="calendar"
                            placeholder = "YYYY - MM - DD"
                            placeholderTextColor= {darklight}
                            onChangeText = {handleChange('dateOfBirth')}
                            onBlur= {handleBlur('dateOfBirth')}
                            value = {dob ? dob.toDateString() : ''}
                            isDate={true}
                            editable={false}
                            showDatePicker = {showDatePicker}
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

                            <MyTextInput 
                            label = " Confirm Password"
                            icon = "lock"
                            placeholder = "* * * * * * * *"
                            placeholderTextColor = {darklight}
                            onChangeText = {handleChange('confirmPassword')}
                            onBlur = {handleBlur('confirmPassword')}
                            value = {values.confirmPassword}
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
                        <ExtraView>
                            <ExtraText>Already have an account?</ExtraText>
                            <TextLink>
                                <TextLinkContent>Login</TextLinkContent>
                            </TextLink>
                        </ExtraView>

                    </StyledFormArea>)
                }

                </Formik>
            </InnerContainer>
        </StyledContainer></KeyboardAvoidingWrapper>
    );

};
const MyTextInput = ({label, icon, isPassword , hidePassword , setHidePassword,isDate ,showDatePicker, ...props}) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={brand}/>
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            {!isDate && <StyledTextInput {...props} />}
            {isDate && <TouchableOpacity onPress={showDatePicker}>
                <StyledTextInput {...props} />
                </TouchableOpacity>}
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)} >
                    <Ionicons name ={hidePassword ? 'md-eye-off' : 'md-eye'} size = {30} color={darklight}/>
                </RightIcon>
            )}
        </View>
    );
};



export default Signup;