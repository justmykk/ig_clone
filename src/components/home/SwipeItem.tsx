import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { LOVE_ICON_GRADIENT } from '../../globals/colors';

export function SwipeItem({ image, counter }) {
  return (
    <View style={styles.container}>
      <Image source={image} resizeMode="cover" style={styles.swipeImage} />
      <View style={styles.overlay}>
        <View style={styles.counter}>
          <Text style={styles.counterText}>{counter}/3</Text>
        </View>

        <View style={{ ...styles.row, justifyContent: 'space-between' }}>
          <View style={styles.row}>
            <LinearGradient style={styles.gradient} colors={LOVE_ICON_GRADIENT}>
              <Ionicons color="#fff" name="heart" size={20} />
            </LinearGradient>
            <View style={styles.number}>
              <Text style={{ fontSize: 11 }}>4,558</Text>
            </View>
          </View>

          <View style={styles.chat}>
            <Ionicons name="ios-chatbubble-outline" size={20} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  swipeImage: {
    borderRadius: 20,
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.2)',
    width: '100%',
    height: '100%',
    borderRadius: 20,
    padding: 15,
    justifyContent: 'space-between',
  },
  counter: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: 40,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    alignSelf: 'flex-end',
  },
  number: {
    backgroundColor: 'rgba(255,255,255,0.5)',
    width: 50,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  counterText: { color: '#fff', fontSize: 12 },
  row: { flexDirection: 'row', alignItems: 'center' },
  gradient: {
    height: 30,
    width: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  chat: {
    height: 30,
    width: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
