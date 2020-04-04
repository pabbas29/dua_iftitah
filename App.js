import React from 'react';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';
import {StyleProvider} from 'native-base';
import platform from './native-base-theme/variables/platform';
import DuaPage from './Components/Pages/DuaPage';
import {ImageBackground, StyleSheet, View} from 'react-native';
import imgBG from './assets/background.jpg';

function App() {
  return (
    <StyleProvider style={getTheme(platform)}>
      <View>
        <ImageBackground source={imgBG} style={styles.image}>
          <DuaPage />
        </ImageBackground>
      </View>
    </StyleProvider>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    position: 'absolute',
    resizeMode: 'cover',
    justifyContent: 'center',
    height: 900,
    width: '100%',
    zIndex: -1,
  },
});

export default App;
