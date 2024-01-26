/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { LogBox, StyleSheet, View } from 'react-native';

//CONTEXT
import { ThemeProvider } from './src/context'

//SCREENS
import { SCREENS } from './src/screens';

//TRANSLATION
import './src/translation'

//PACKAGES
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import _ from 'lodash'

LogBox.ignoreAllLogs(true);

const { Navigator, Screen } = createStackNavigator();

function App(): JSX.Element {
  return (
    <ThemeProvider>
      <View style={styles.container}>
        <NavigationContainer>
          <Navigator
            screenOptions={{
              headerShown: false,
              gestureEnabled: false
            }}
            initialRouteName={SCREENS.Splash.identifier}>
            {_.toArray(SCREENS).map((item: any, index: number) => {
              return (
                item.component ? <Screen key={item.identifier} name={item.identifier} component={item.component} /> : null
              )
            })}
          </Navigator >
        </NavigationContainer>
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1.0
  }
});

export default App;
