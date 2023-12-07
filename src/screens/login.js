import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import TextBox from "../components/textBox";
import { Formik } from "formik";
import * as yup from 'yup';


export default function Login({ navigation }) {
    const validationSchema = yup.object().shape({
        mobile_number: yup.string().trim().label('mobile number').required(),
        password: yup.string().trim().label('password').required(),
       
      });
    
    return (
        <ScrollView>
            <View style={styles.container}>

                <Image source={require("../../assets/images/Images.png")} style={styles.backgroundImage} />
                <Image source={require("../../assets/images/Logo.png")} style={styles.overlayIcon} />
                <Formik
                 initialValues={{
                    mobile_number: '',
                    password: '',
                  }}
                  validationSchema={validationSchema}
                  onSubmit={(values, actions) => {
                     navigation.navigate('Home');
                  }}
                >
                     {(formikProps) => (
                <View style={styles.loginCard}>
                    <Text style={styles.loginHead}
                    >You're Welcome</Text><Text style={styles.loginSubhead}
                    >Enter your Login Details</Text>
                    
                    <>
                    <TextBox
                        placeholder="Dealer ID/ Mobile number"
                        icon={true}
                    value={formikProps.values.mobile_number}
                    error={
                      formikProps.touched['mobile_number'] &&
                      formikProps.errors['mobile_number']
                    }
                    onChangeText={(value) => {
                      formikProps.setFieldValue('mobile_number', value);
                    }}
                    />
                    <TextBox
                        placeholder="Password"

                        value={formikProps.values.password}
                        error={
                          formikProps.touched['password'] &&
                          formikProps.errors['password']
                        }
                        onChangeText={(value) => {
                          formikProps.setFieldValue('password', value);
                        }}
                    />
                  
                    <TouchableOpacity style={styles.button} onPress={formikProps.handleSubmit}>
                        <Text style={styles.buttonText}>Log In</Text>
                    </TouchableOpacity>
                    <Text style={styles.logIntext}>Log in with OTP | Forgot Password?</Text>
                    <Text style={styles.logIntext}>Or</Text>
                    <TouchableOpacity
                        style={styles.outLinedbutton}
                    // onPress={}
                    >
                        <Text style={styles.outLinedbuttonText}>Register</Text>
                    </TouchableOpacity>
                    </>
                </View>)}
                </Formik>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',

    },
    backgroundImage: {
        alignSelf: 'center',
        width: '100%',
        position: 'relative',
        marginBottom: 20,
    },
    overlayIcon: {
        position: 'absolute',
        top: '8%',
        left: '25%'
    },
    shadowOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 10, // Adjust the height of the shadow as needed
        backgroundColor: 'rgba(0, 0, 0, 0.1)', // Adjust the shadow color and opacity
        zIndex: 1, // Make sure it's above the content
    },
    loginCard: {
        padding: 20,
        marginTop: '-91%',
        backgroundColor: '#fff',
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
        height: '70%',
        // shadowColor: 'black',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.5,
        // shadowRadius: 2,
        elevation: 10, // changed to a greater value
        // zIndex:1,
        // borderTopWidth:2
    },
    loginHead: {
        textAlign: 'center',
        marginTop: 20,
        color: "#000",
        fontWeight: 'bold',
        fontSize: 28,
        fontFamily: 'Inter'
    },
    loginSubhead: {
        textAlign: 'center',
        marginTop: 5,
        color: "#000",
        fontWeight: '400',
        fontSize: 14,
        fontFamily: 'Inter',
        marginBottom: 20
    },
    button: {
        backgroundColor: "#F7B40D",
        // color: '#F7B40D',
        paddingVertical: 16,
        paddingHorizontal: 16,
        borderRadius: 10,

        marginTop: 15,
        // padding:10
        // position: 'relative',
        // height: 44,
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 14,
        fontWeight: '700',

    },
    logIntext: {
        textAlign: 'center',
        fontSize: 12,
        fontWeight: '500',
        marginTop: 15,
    },
    outLinedbutton: {
        borderWidth: 1,
        paddingVertical: 16,
        paddingHorizontal: 16,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
        marginBottom: 30,
        borderColor: '#9A9EA7'
    },
    outLinedbuttonText: {
        textAlign: 'center',
        color: 'black',
        fontSize: 14,
        fontWeight: '700',

    },
});