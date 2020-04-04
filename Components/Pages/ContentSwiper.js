import React from 'react';
import {StyleSheet} from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Body, Text, Left, Icon } from 'native-base';
import DuaIftitah from '../Data/DuaIftitah';

function ContentSwiper() {
  return (
    <Container style={styles.container}>
      <View>
        <DeckSwiper
          dataSource={DuaIftitah}
          renderItem={item =>
            <Card style={{backgroundColor: 'transparent', top: 150}}>
              <CardItem style={{backgroundColor: 'green'}}>
                <Body>
                  <Text style={styles.arabicText}>{item.ar_ar}</Text>
                </Body>
              </CardItem>
              <CardItem style={{backgroundColor: 'green'}}>
                <Body>
                  <Text style={styles.translationText}>{item.translation.id_id}</Text>
                </Body>
              </CardItem>
            </Card>
          }
        />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    marginBottom: 100,
    marginLeft: 5,
    marginRight: 5,
    height: 250,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
  card: {
    backgroundColor: 'transparent',
  },
  arabicText: {
    fontSize: 32,
    color: '#ffb74d',
    alignSelf: 'center',
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 10,
  },
  translationText: {
    textAlign: 'center',
    color: '#ffb74d',
    paddingBottom: 10,
    alignSelf: 'center',
  },
});

export default ContentSwiper;
