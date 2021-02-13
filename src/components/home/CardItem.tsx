import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CardSwipe } from './CardSwipe';
import { UserFaceName } from './UserFaceName';

export function CardItem() {
  return (
    <View style={styles.container}>
      <UserFaceName />

      <CardSwipe />

      <Text style={styles.text}>Les gusta a danieldelax y 4,588 personas más</Text>
      <Text style={{ fontSize: 12, marginBottom: 10 }}>
        <Text style={{ fontWeight: '700' }}>SACRIFICE | VIRUS </Text>
        <Text>this photomanipulation inspired in the virus</Text>
      </Text>
      <Text style={{ ...styles.text, ...styles.comment }}>Over 500 comments</Text>
      <Text style={{ fontSize: 12 }}>
        <Text style={{ fontWeight: '700' }}>Perla_Pipol </Text>
        <Text>Esta edición está super genial, que pro!!</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: 500,
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  text: {
    fontSize: 12,
    lineHeight: 27,
  },
  comment: {
    color: 'rgba(86, 86, 86, 0.35)',
  },
});
