import React, { createContext, useEffect, useState } from 'react'

//ASSETS
import { LIGHT_THEME_COLOR, DARK_THEME_COLOR } from '../assets'


interface ThemeProviderProps {
    children: JSX.Element
}

interface ThemeContextType {
    theme: any
};

export const ThemeContext = createContext<ThemeContextType | undefined | any>(undefined);


export function ThemeProvider(props: ThemeProviderProps): JSX.Element {

    const [currentTheme, setCurrentTheme] = useState('light')

    useEffect(() => {

    }, [currentTheme])

    function getTheme() {
        if (currentTheme == 'dark') {
            return DARK_THEME_COLOR
        }
        else {
            return LIGHT_THEME_COLOR
        }
    }

    const theme = getTheme()

    const contextValue: ThemeContextType = {
        theme: theme
    };

    return (
        <ThemeContext.Provider
            value={contextValue}>
            {props.children}
        </ThemeContext.Provider >
    )
}
