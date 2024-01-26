import React, { useContext } from "react"
import { Image, ImageSourcePropType, StyleProp, StyleSheet, TouchableOpacity, View, ViewStyle } from "react-native"

//COMPONENTS
import Text from "./Text"

//CONTEXT
import { ThemeContext } from "../context"

//CONSTANT & ASSETS
import { getScaleSize } from '../constant'
import { FONTS } from "../assets"

interface ButtonProps {
    type?: 'social' | undefined
    style?: StyleProp<ViewStyle> | undefined
    title?: string | '',
    leftIcon?: ImageSourcePropType,
    isDisable?: true | false | undefined,
    onPress?: () => void,
}

function Button(props: ButtonProps) {

    const { theme } = useContext(ThemeContext)

    if (props.type == 'social') {
        return (
            <TouchableOpacity style={[styles(theme).container, styles(theme).socialContainer, props.style]}
                onPress={props.onPress}>
                {props.leftIcon &&
                    <View style={styles(theme).socialIconContainer}>
                        <Image style={styles(theme).socialIcon}
                            source={props.leftIcon} />
                    </View>
                }
                <Text
                    style={{ flex: 1.0, textAlign: 'center' }}
                    align='center'
                    font={FONTS.Roboto.Bold}
                    color={theme._AFAFAF}
                    size={getScaleSize(14)}>
                    {props.title}
                </Text>
                {props.leftIcon &&  
                    <View style={styles(theme).socialIconContainer}/>
                }
            </TouchableOpacity>
        )
    }

    const background = props.isDisable ? styles(theme).disable : styles(theme).enable
    return (
        <TouchableOpacity style={[styles(theme).container, background, props.style]}
            onPress={props.onPress}>
            <Text
                font={FONTS.Roboto.Bold}
                color={theme._FFF}
                size={getScaleSize(14)}>
                {props.title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = (theme: any) => StyleSheet.create({
    container: {
        height: getScaleSize(40),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: getScaleSize(20)
    },
    socialContainer: {
        borderWidth: 1,
        borderColor: theme._AFAFAF,
        paddingHorizontal: getScaleSize(15)
    },
    socialIconContainer: {
        height: getScaleSize(40),
        width: getScaleSize(40),
        justifyContent: 'center',
        alignItems: 'center',
    },
    socialIcon: {
        height: getScaleSize(20),
        width: getScaleSize(20),
    },
    disable: {
        backgroundColor: theme._AFAFAF
    },
    enable: {
        backgroundColor: theme._E31837
    }
})

export default Button