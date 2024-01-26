import React, { useContext, useEffect } from "react"
import { Image, ImageBackground, SafeAreaView, StyleSheet, View } from 'react-native'

//CONTEXT
import { ThemeContext } from "../context"

//ASSETS & CONSTANT
import { FONTS, IMAGES } from "../assets"
import { STRINGS, getScaleSize } from "../constant"

//COMPONENTS
import { Button, Text } from "../components"

//SCREENS
import { SCREENS } from "../screens"

//PACKAGES
import { useNavigation } from "@react-navigation/native"

function Leading(props: any) {

    const { theme } = useContext(ThemeContext)


    function onGetStarted() {
        props.navigation.navigate(SCREENS.Login.identifier)
    }

    return (
        <View style={styles(theme).container}>
            <ImageBackground
                style={styles(theme).imgContainer}
                source={IMAGES.background}>
                <Image
                    style={styles(theme).imgLogo}
                    resizeMode="contain"
                    source={IMAGES.logo} />
                <Text
                    font={FONTS.Roboto.Bold}
                    color={theme._000}
                    size={getScaleSize(34)}>
                    {STRINGS.your_one_stop_application}
                </Text>
                <Text
                    style={styles(theme).subtitle}
                    font={FONTS.Roboto.Regular}
                    color={theme._AFAFAF}
                    size={getScaleSize(16)}>
                    {STRINGS.your_one_stop_application}
                </Text>
                <Button
                    style={styles(theme).btnGetStarted}
                    title={STRINGS.let_get_started}
                    onPress={() => onGetStarted()} />

                <SafeAreaView />
            </ImageBackground>
        </View>
    )
}

const styles = (theme: any) => StyleSheet.create({
    container: {
        flex: 1.0,
        backgroundColor: theme._FFF
    },
    imgContainer: {
        flex: 1.0,
        backgroundColor: theme._FFF,
        justifyContent: 'flex-end',
        paddingHorizontal: getScaleSize(24)
    },
    subtitle: {
        marginTop: getScaleSize(16)
    },
    btnGetStarted: {
        marginTop: getScaleSize(40),
        marginBottom: getScaleSize(30)
    },
    imgLogo: {
        marginLeft: getScaleSize(-5),
        height: getScaleSize(52),
        width: getScaleSize(183),
        marginBottom: getScaleSize(50)
    }
})

export default Leading