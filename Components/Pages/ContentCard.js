import React from 'react';
import { Card, Text, CardItem, Body } from 'native-base';
import { StyleSheet } from 'react-native';

function ContentCard(props) {
  return (
    <Card style={styles.container}>
      <CardItem style={styles.card}>
        <Body>
          <Text style={styles.arabicText}>{props.dua.ar_ar}</Text>
        </Body>
      </CardItem>
      <CardItem style={styles.card}>
        <Body>
          <Text style={styles.translationText}>
            {props.dua.translation.id_id}
          </Text>
        </Body>
      </CardItem>
    </Card>
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

export default ContentCard;
