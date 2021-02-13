import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { BG_COLOR, STORY_GRADIENT } from '../../globals/colors';
import { globalStyles } from '../../globals/styles';
import {MaterialIcons} from '@expo/vector-icons';

export function AddStory() {
  return (
    <View style={{ position: 'relative', height: 95 }}>
      <View style={styles.container}>
        <Image
          source={require('../../assets/face_one.jpg')}
          resizeMode="cover"
          style={globalStyles.storyImage}
        />
      </View>

      <LinearGradient style={styles.gradient} colors={STORY_GRADIENT}>
          <MaterialIcons name="add" color="#fff" size={20} />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E8E8E8',
    ...globalStyles.storyContainer,
    marginLeft: 20,
  },
  gradient: {
    height: 35,
    width: 35,
    borderRadius: 17.5,
    padding: 3,
    borderColor: BG_COLOR,
    borderWidth: 3,
    borderStyle: 'solid',
    position: 'absolute',
    bottom: 0,
    left: 43,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
