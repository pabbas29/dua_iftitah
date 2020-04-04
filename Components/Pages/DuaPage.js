import React from 'react';
import ContentCard from './ContentCard';
import DuaIftitah from '../Data/DuaIftitah';
import { View } from 'native-base';
import { ScrollView } from 'react-native';

function DuaPage() {
  const duaContent = DuaIftitah.map(dua => (
    <ContentCard key={dua.id} dua={dua} />
  ));

  return (
    <View>
      <ScrollView>
        {duaContent}
      </ScrollView>
    </View>
  );
}

export default DuaPage;
