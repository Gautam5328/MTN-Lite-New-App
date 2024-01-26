import React, { useContext, useEffect } from "react"
import { Image, ImageBackground, StyleSheet, View } from 'react-native'

//CONTEXT
import { ThemeContext } from "../context"

//ASSETS & CONSTANT
import { IMAGES } from "../assets"
import { getScaleSize } from "../constant"

//PACKAGES
import { CommonActions } from "@react-navigation/native"

//SCREENS
import { SCREENS } from "../screens"

function Splash(props: any) {

    const { theme } = useContext(ThemeContext)

    useEffect(() => {
        setTimeout(() => {
            props.navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [
                        { name: SCREENS.Leading.identifier }
                    ],
                })
            );
        }, 2000);
    }, [])

    return (
        <View style={styles(theme).container}>
            <ImageBackground
                style={styles(theme).imgContainer}
                source={IMAGES.background}>
                <Image
                    style={styles(theme).imgLogo}
                    resizeMode="contain"
                    source={IMAGES.logo} />
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
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgLogo: {
        height: getScaleSize(50),
        width: getScaleSize(183)
    }
})

export default Splash