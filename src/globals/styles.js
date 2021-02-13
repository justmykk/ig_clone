import { StyleSheet } from 'react-native';
import { BG_COLOR } from './colors';

export const globalStyles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: BG_COLOR,
  },
  storyImage: {
    height: '100%',
    width: '100%',
    borderRadius: 40,
  },
  storyContainer: {
    height: 80,
    width: 80,
    borderRadius: 40,
    padding: 3,
  }
});
