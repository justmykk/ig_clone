import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, View, Platform, Text, TouchableOpacity } from 'react-native';
import { CARDS_BLACK, HASH_COLOR, STORY_GRADIENT } from '../../globals/colors';
import { StoryItem } from '../stories/StoryItem';
import { ProfileAnalytics } from './ProfileAnalytics';

export const TopCard = () => {
  return (
    <View style={styles.card}>
      <StoryItem />

      <View style={styles.textContainer}>
        <Text style={styles.name}>App Lopez</Text>
        <Text style={{ fontSize: 12, color: CARDS_BLACK }}>Diseño ui/ux y Fotografia, Mexico</Text>
        <Text style={{ fontSize: 12, color: HASH_COLOR }}>
          #LifeStyle #Design #Photography #Urban #Art
        </Text>
      </View>

      <ProfileAnalytics />

      <LinearGradient
        end={{ x: 1, y: 0 }}
        start={{ x: 0, y: 1 }}
        colors={STORY_GRADIENT}
        style={styles.buttonGradient}
      >
        <TouchableOpacity style={styles.button}>
          <Text style={styles.btnText}>Post</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: 400,
    backgroundColor: '#fff',
    marginBottom: 40,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 10.0,
    shadowOffset: { height: 2, width: 3 },
    shadowColor: '#000',
    shadowRadius: 15,
    shadowOpacity: 0.4,
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
  },
  textContainer: { alignItems: 'center', marginTop: 10 },
  name: { fontSize: 25, fontWeight: '700', marginBottom: 5 },
  buttonGradient: {
    height: 50,
    width: '50%',
    alignSelf: 'center',
    marginTop: 30,
    borderRadius: 25,
  },
  button: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 16,
  },
});
