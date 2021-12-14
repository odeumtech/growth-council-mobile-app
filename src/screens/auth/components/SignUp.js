import React, {useState} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView,
    StatusBar,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import {Button} from 'native-base';
import {useFormik} from 'formik';
import * as Yup from 'yup';

import {CommonStyles, Colors, Typography} from '../../../theme';
import FlatTextInput from '../../../shared/form/FlatTextInput';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const signUpSchema = Yup.object().shape({
    email: Yup.string().email('Please enter a valid email.').required('Email is required.'),
    password: Yup
        .string()
        .min(6, ({min}) => `Password must be at least ${min} characters.`)
        .required('Password is required.'),
});

const SignUpForm = (props) => {

    const [hidePass, setHidePass] = useState(true);

    const {navigation} = props;

    const {
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        isValid,
    } = useFormik({
        validationSchema: signUpSchema,
        initialValues: {email: 'krishna@gmail.com', password: '123456'},
        onSubmit: values => {
            navigation.navigate('SignUpNext', {
                screen: 'SignUpNext',
                params: {customer: values},
            });
        },
    });

    return (
        <ScrollView contentContainerStyle={{flexGrow: 1, height: screenHeight}}>
            <View style={styles.container}>

                <StatusBar barStyle="dark-content" backgroundColor={Colors.PRIMARY_BACKGROUND_COLOR}/>

                <View style={styles.header}>
                    <Text style={styles.headingText1}>Register</Text>
                </View>

                <View style={styles.body}>
                    <FlatTextInput
                        value={values.email}
                        onChangeText={handleChange('email')}
                        onFocus={handleBlur('email')}
                        error={errors.email}
                        touched={touched.email}
                    />

                    <FlatTextInput
                        value={values.password}
                        isPassword={true}
                        secureTextEntry={hidePass}
                        onChangeText={handleChange('password')}
                        onFocus={handleBlur('password')}
                        error={errors.password}
                        touched={touched.password}
                    />

                </View>
                <View style={styles.loginButtonWrapper}>
                    <Button style={styles.loginButton} onPress={handleSubmit} disabled={!isValid}>
                        <Text style={styles.loginButtonText}>NEXT</Text>
                    </Button>
                </View>

                <View style={styles.signUpLinkWrapper}>
                    <Text style={{color: Colors.NONARY_TEXT_COLOR}}>Do you have already an account?</Text>
                    <TouchableOpacity>
                        <Text style={styles.signUpButtonText} onPress={() => navigation.navigate('SignIn')}>Click
                            Here</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        ...CommonStyles.container,
        alignItems: 'center',
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        marginTop: Platform.OS === 'ios' ? 60 : 70,
        marginBottom: 20,
    },
    body: {
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    message: {
        ...CommonStyles.message,
    },
    profileImage: {
        marginBottom: 10,
        height: 50,
        width: 50,
    },
    headingText1: {
        ...CommonStyles.headingText1,
        fontFamily: Typography.FONT_NORMAL,
        color: Colors.NONARY_TEXT_COLOR,
    },
    headingText2: {
        ...CommonStyles.headingText2,
        fontFamily: Typography.FONT_NORMAL,
        width: 210,
        textAlign: 'center',
    },
    loginButtonWrapper: {
        ...CommonStyles.buttonWrapper,
        width: '90%',
    },
    loginButton: {
        ...CommonStyles.button,
        height: 50,
        marginBottom: 20,
        backgroundColor: Colors.QUATERNARY_BACKGROUND_COLOR,
    },
    loginButtonText: {
        ...CommonStyles.buttonText,
    },
    signUpLinkWrapper: {
        ...CommonStyles.linkWrapper,
        marginTop: 10,
        alignItems: 'center',
    },
    signUpButtonText: {
        color: Colors.SENDENARY_TEXT_COLOR,
        fontFamily: Typography.FONT_NORMAL,
        paddingLeft: 5,
    },
    errorText: {
        ...CommonStyles.errorText,
        textAlign: 'left',
    },
});


export default SignUpForm;
