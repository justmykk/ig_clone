import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export function Header() {
  return (
    <View style={styles.header}>
      <Ionicons name="add-circle-outline" size={30} />
      <Image source={require('../../assets/ig.png')} resizeMode="center" style={styles.image} />
      <View style={{ position: 'relative' }}>
        <Ionicons name="ios-chatbubble-outline" size={30} />
        <View style={styles.counterView}>
          <Text style={styles.counter}>2</Text>
        </View>
      </View>
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
  counterView: {
    height: 15,
    width: 15,
    borderRadius: 7.5,
    backgroundColor: '#DD2A7B',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
  },
  counter: { fontSize: 12, color: '#fff', fontWeight: '700' },
});
