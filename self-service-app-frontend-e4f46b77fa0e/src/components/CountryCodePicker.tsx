import React, { useContext, useState } from "react";
import { Platform } from 'react-native'

//CONSTANT
import { getScaleSize } from "../constant";

//CONTEXT
import { ThemeContext } from "../context";

//PACKAGES
import CountryPicker, { Country, CountryCode } from 'react-native-country-picker-modal'

interface CountryCodePickerProps {
    visible: boolean,
    countryCode: CountryCode
    onSelect: (country: Country) => void,
    onClose?: () => void,
    onOpen?: () => void,
}

function CountryCodePicker(props: CountryCodePickerProps) {

    const { theme } = useContext(ThemeContext)

    return (
        <CountryPicker
            countryCode={props.countryCode}
            visible={props.visible}
            withModal={true}
            withFilter={true}
            withCallingCode={true}
            withCallingCodeButton={true}
            onClose={props.onClose}
            onOpen={props.onOpen}
            theme={{
                primaryColor: theme._121212,
                primaryColorVariant: theme._121212,
                backgroundColor: theme._fff,
                onBackgroundTextColor: theme._000,
                fontSize: getScaleSize(14),
                fontFamily: Platform.select({
                    ios: 'Roboto',
                    android: 'Roboto'
                }),
                filterPlaceholderTextColor: theme._A3A3A3,
                activeOpacity: 0.7,
            }}
            onSelect={props.onSelect} />
    )
}

export default CountryCodePicker