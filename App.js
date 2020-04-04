import React from 'react';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';
import { StyleProvider, Container, Content } from 'native-base';
import platform from './native-base-theme/variables/platform';
import DuaPage from './Components/Pages/DuaPage';

function App() {
  return (
    <StyleProvider style={getTheme(platform)}>
      <DuaPage />
    </StyleProvider>
  );
}

export default App;
