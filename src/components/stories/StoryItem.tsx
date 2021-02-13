import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { STORY_GRADIENT } from '../../globals/colors';
import { globalStyles } from '../../globals/styles';

interface Props {
  index: number;
  showText?: boolean
}

export const StoryItem: React.FC<Props> = ({ index, showText }) => {
  return (
    <View style={styles.container}>
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
      {showText && <Text style={styles.text}>First Last</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: {
    color: '#737476',
    marginTop: 5,
    fontSize: 12
  }
});
