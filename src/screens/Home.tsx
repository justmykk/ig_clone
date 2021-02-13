import React from 'react';
import { StyleSheet, SafeAreaView, View, ScrollView, Text } from 'react-native';
import { CardItem } from '../components/home/CardItem';
import { Header } from '../components/home/Header';
import { StoryList } from '../components/stories/StoryList';
import { globalStyles } from '../globals/styles';

export default function () {
  return (
    <SafeAreaView style={globalStyles.safeView}>
      <View style={{ flex: 1 }}>
        <Header />

        <ScrollView>
          <StoryList />

          <View style={{ paddingHorizontal: 20, marginTop: 40 }}>
            <Text style={styles.title}>Explorar</Text>
            <CardItem />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 20,
  },
});
