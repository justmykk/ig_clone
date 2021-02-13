import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

export function PostTab() {
  return (
    <View style={styles.row}>
      <View style={{...styles.imageContainer, marginRight: 5}}>
        <Image
          source={require('../../assets/swipe1.jpg')}
          style={styles.imageOne}
          resizeMode="cover"
        />
      </View>

      <View style={{...styles.imageContainer, marginLeft: 5}}>
        <Image
          source={require('../../assets/swipe2.jpg')}
          style={{...styles.image, marginBottom: 5}}
          resizeMode="cover"
        />
        <Image
          source={require('../../assets/swipe3.jpg')}
          style={{...styles.image, marginTop: 5}}
          resizeMode="cover"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    height: 300,
  },
  imageContainer: {
    flex: 1,
  },
  imageOne: {
    height: '100%',
    width: '100%',
    borderRadius: 15,
  },
  image: {
      flex: 1,
      width: '100%',
      borderRadius: 15,
  }
});
