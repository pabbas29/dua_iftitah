import React from 'react';
import Container from '../../native-base-theme/components/Container';
import { Header, View, DeckSwiper, Card, CardItem, Body, Text, Left, Icon } from 'native-base';

const DuaIftitah = [
  {
    "name": "بِسْمِ اللّهِ الرَّحْمَنِ الرَّ حِيْمِ",
    "text": "Dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang",
  },
];

function ContentSwiper() {
  return (
    <Container>
      <Header />
      <View>
        <DeckSwiper
          dataSource={DuaIftitah}
          renderItem={item =>
            <Card style={{ elevation: 3 }}>
              <CardItem>
                <Left>
                  <Body>
                    <Text>{item.text}</Text>
                    <Text note>NativeBase</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Icon name="heart" style={{ color: '#ED4A6A' }} />
                <Text>{item.name}</Text>
              </CardItem>
            </Card>
          }
        />
      </View>
    </Container>
  );
}

export default ContentSwiper;
