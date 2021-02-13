import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { STORY_GRADIENT } from '../../globals/colors';
import { globalStyles } from '../../globals/styles';

interface Props {
  index: number;
}

export const StoryItem: React.FC<Props> = ({ index }) => {
  return (
    <LinearGradient
      style={{ ...globalStyles.storyContainer, marginRight: 15, marginLeft: index === 0 && 15 }}
      colors={STORY_GRADIENT}
    >
      <Image
        source={require('../../assets/face_two.jpg')}
        resizeMode="cover"
        style={globalStyles.storyImage}
      />
    </LinearGradient>
  );
};
