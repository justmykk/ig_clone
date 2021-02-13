import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export function Header() {
  return (
    <View style={styles.header}>
        <Ionicons name="add-circle-outline" size={30} />
      <Image source={require('../../assets/ig.png')} resizeMode="center" style={styles.image} />
      <Ionicons name="ios-chatbubble-outline" size={30} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 20,
      paddingHorizontal: 40,
  },
  image: { height: 50, width: 140 },
});
