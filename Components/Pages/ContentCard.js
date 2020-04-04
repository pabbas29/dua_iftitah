import React from 'react';
import { Container, Header, Content, Card, Text, CardItem, Body } from 'native-base';
import { StyleSheet } from 'react-native';

function ContentCard(props) {
  return (
    <Container>
      <Header />
      <Content>
        <Card style={{flex:0}}>
          <CardItem>
            <Body>
              <Text style={styles.arabicText}>{props.dua.ar_ar}</Text>
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <Text style={styles.translationText}>{props.dua.id_id}</Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  arabicText: {
    fontSize: 32,
    alignSelf: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 10,
  },
  translationText: {
    textAlign: 'center',
    paddingBottom: 10,
  },
});

export default ContentCard;
