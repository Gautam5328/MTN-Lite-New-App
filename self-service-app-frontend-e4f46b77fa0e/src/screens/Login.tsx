import React, { useContext, useEffect, useState } from "react"
import { Dimensions, Image, ImageBackground, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'

//ASSETS & CONSTANT
import { FONTS, IMAGES } from "../assets"
import { STRINGS, getScaleSize } from "../constant"

//CONTEXT
import { ThemeContext } from "../context"

//COMPONENTS
import { Button, CountryCodePicker, Header, Text } from "../components"
import { Country, CountryCode } from "react-native-country-picker-modal"

function Login(props: any) {

    const { theme } = useContext(ThemeContext)

    const [countryCode, setCountryCode] = useState<CountryCode>('IN')
    const [country, setCountry] = useState<Country | null>(null)
    const [isCountryPickerVisible, setCountryPickerVisible] = useState<boolean>(false)

    useEffect(() => {

    }, [])

    function onContinue() {

    }

    function onApple() {

    }

    function onFacebook() {

    }

    function onGoogle() {

    }

    return (
        <View style={styles(theme).container}>
            <Header
                onBack={() => { props.navigation.goBack() }} />
            <View style={styles(theme).detailsContainer}>
                <Text
                    style={styles(theme).titleText}
                    font={FONTS.Roboto.Regular}
                    color={theme._333333}
                    size={getScaleSize(18)}>
                    {STRINGS.welcome_to}
                    <Text
                        font={FONTS.Roboto.Black}
                        color={theme._E31837}
                        size={getScaleSize(18)}>
                        {STRINGS.telecom}
                    </Text>
                </Text>
                <Text
                    style={styles(theme).subtitleText}
                    font={FONTS.Roboto.Medium}
                    color={theme._AFAFAF}
                    size={getScaleSize(16)}>
                    {STRINGS.insert_your_phone_number_to_continue}
                </Text>
                <View style={styles(theme).inputContainer}>
                    <CountryCodePicker
                        countryCode={countryCode}
                        visible={isCountryPickerVisible}
                        onOpen={() => setCountryPickerVisible(true)}
                        onClose={() => setCountryPickerVisible(false)}
                        onSelect={(country: Country) => {
                            setCountryCode(country.cca2)
                            setCountry(country)
                        }} />
                    <TouchableOpacity onPress={() => setCountryPickerVisible(true)}>
                        <Image style={styles(theme).inputDropDown} source={IMAGES.down} />
                    </TouchableOpacity>
                    <TextInput
                        style={styles(theme).numberInput}
                        placeholder={STRINGS.mobile_number} />
                </View>
                <Button
                    title={STRINGS.continue}
                    onPress={() => onContinue()} />
                <View style={styles(theme).orDeviderContainer}>
                    <View style={styles(theme).orDevider} />
                    <Text
                        style={styles(theme).orText}
                        font={FONTS.Roboto.Regular}
                        color={theme._AFAFAF}
                        size={getScaleSize(14)}>
                        {STRINGS.or}
                    </Text>
                    <View style={styles(theme).orDevider} />
                </View>
                <Button
                    type="social"
                    leftIcon={IMAGES.apple}
                    title={STRINGS.continue_with_apple}
                    onPress={() => onApple()} />
                <Button
                    type="social"
                    style={styles(theme).socialButton}
                    leftIcon={IMAGES.facebook}
                    title={STRINGS.continue_with_facebook}
                    onPress={() => onFacebook()} />
                <Button
                    type="social"
                    style={styles(theme).socialButton}
                    leftIcon={IMAGES.google}
                    title={STRINGS.continue_with_google}
                    onPress={() => onGoogle()} />
            </View>
        </View>
    )
}

const styles = (theme: any) => StyleSheet.create({
    container: {
        flex: 1.0,
        backgroundColor: theme._FFF
    },
    detailsContainer: {
        flex: 1.0,
        paddingHorizontal: getScaleSize(24)
    },
    titleText: {
        marginTop: getScaleSize(20)
    },
    subtitleText: {
        marginTop: getScaleSize(4)
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: getScaleSize(40)
    },
    inputCountryContainer: {
        flexDirection: 'row',
        height: getScaleSize(40)
    },
    inputCountry: {
        height: getScaleSize(40),
        width: getScaleSize(40),
        borderRadius: getScaleSize(20),
        backgroundColor: theme._D3D3D3
    },
    inputDropDown: {
        height: getScaleSize(15),
        width: getScaleSize(15),
    },
    numberInput: {
        flex: 1.0,
        borderWidth: 1,
        borderColor: theme._D3D3D3,
        height: '100%',
        marginLeft: getScaleSize(12),
        paddingHorizontal: getScaleSize(8),
        fontFamily: FONTS.Roboto.Regular
    },
    socialButton: {
        marginTop: getScaleSize(12),
    },
    orDeviderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: getScaleSize(30)
    },
    orDevider: {
        height: 1,
        backgroundColor: theme._D3D3D3,
        width: Dimensions.get('window').width / 6
    },
    orText: {
        marginHorizontal: getScaleSize(12)
    }
})

export default Login