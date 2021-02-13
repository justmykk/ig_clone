import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Swiper from 'react-native-swiper';
import { DOT_COLOR } from '../../globals/colors';
import { SwipeItem } from './SwipeItem';

export function CardSwipe() {
  return (
    <View style={styles.container}>
      <Swiper activeDotColor="#fff" dotColor={DOT_COLOR}>
        <SwipeItem counter={1} image={require('../../assets/swipe1.jpg')} />
        <SwipeItem counter={2} image={require('../../assets/swipe2.jpg')} />
        <SwipeItem counter={3} image={require('../../assets/swipe3.jpg')} />
      </Swiper>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
  },
});
