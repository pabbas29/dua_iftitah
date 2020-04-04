import React from 'react';
import ContentCard from './ContentCard';
import DuaIftitah from '../Data/DuaIftitah';
import { View, Container, Content } from 'native-base';
import { StyleSheet } from 'react-native';

function DuaPage() {
  const duaContent = DuaIftitah.map(dua => (
    <ContentCard key={dua.id} dua={dua} />
  ));

  return (
    <Container>
      <Content>
        <View style={styles.container}>
          {duaContent}
        </View>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
  },
});

export default DuaPage;
