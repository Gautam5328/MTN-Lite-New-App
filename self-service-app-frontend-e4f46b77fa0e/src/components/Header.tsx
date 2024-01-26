import React, { useContext } from "react"
import { Image, Platform, SafeAreaView, StyleProp, StyleSheet, TouchableOpacity, View, ViewStyle } from "react-native"

//COMPONENTS
import Text from "./Text"

//CONTEXT
import { ThemeContext } from "../context"

//CONSTANT & ASSETS
import { getScaleSize } from '../constant'
import { FONTS, IMAGES } from "../assets"

interface HeaderProps {
    style?: StyleProp<ViewStyle> | undefined
    title?: string | '',
    isHome?: boolean
    onBack?: () => void,
    onNotification?: () => void,
    onProfile?: () => void,
}

function Header(props: HeaderProps) {

    const { theme } = useContext(ThemeContext)

    return (
        <View>
            <SafeAreaView />
            <View style={[styles(theme).container, props.style]}>
                {props.onBack &&
                    <TouchableOpacity style={styles(theme).iconContainer}
                        onPress={props.onBack}>
                        <Image style={styles(theme).icon}
                            source={IMAGES.back} />
                    </TouchableOpacity>
                }
                <View style={styles(theme).titleContainer}>
                    {props.isHome &&
                        <Image
                            style={styles(theme).titleLogo}
                            resizeMode="contain"
                            source={IMAGES.logo} />
                    }
                    {props.title &&
                        <Text
                            font={FONTS.Roboto.Bold}
                            color={theme._E31837}
                            size={getScaleSize(18)}>
                            {props.title}
                        </Text>
                    }
                </View>
                {props.onNotification &&
                    <TouchableOpacity style={styles(theme).iconContainer}
                        onPress={props.onBack}>
                        <Image style={styles(theme).icon}
                            source={IMAGES.notification} />
                    </TouchableOpacity>
                }
                {props.onProfile &&
                    <TouchableOpacity style={styles(theme).iconContainer}
                        onPress={props.onBack}>
                        <Image style={styles(theme).icon}
                            source={IMAGES.profile} />
                    </TouchableOpacity>
                }
            </View>
        </View>
    )
}

const styles = (theme: any) => StyleSheet.create({
    container: {
        height: Platform.OS == 'ios' ? getScaleSize(44) : getScaleSize(56),
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: theme._FFF,
        marginHorizontal: getScaleSize(8),
    },
    titleContainer: {
        flex: 1.0,
        flexDirection: 'row',
    },
    iconContainer: {
        height: Platform.OS == 'ios' ? getScaleSize(44) : getScaleSize(56),
        width: Platform.OS == 'ios' ? getScaleSize(44) : getScaleSize(56),
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        height: Platform.OS == 'ios' ? getScaleSize(22) : getScaleSize(27),
        width: Platform.OS == 'ios' ? getScaleSize(22) : getScaleSize(27),
    },
    titleLogo: {
        marginLeft: getScaleSize(10),
        height: getScaleSize(40),
        width: getScaleSize(120)
    }
})

export default Header