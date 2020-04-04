import React from 'react';
import ContentCard from './ContentCard';
import ContentSwiper from './ContentSwiper';
import DuaIftitah from '../Data/DuaIftitah';
import { View, Container, Content } from 'native-base';
import { StyleSheet, ImageBackground } from 'react-native';

function DuaPage() {
  const duaContent = DuaIftitah.map(dua => (
    <ContentCard key={dua.id} dua={dua} />
  ));

  return (
    <Container style={styles.container}>
      <Content>
        <View style={styles.content}>
          <ContentSwiper />
        </View>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  content: {
    backgroundColor: 'transparent',
  },
});

export default DuaPage;
