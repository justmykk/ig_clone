import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, SafeAreaView, TouchableOpacity, Text, Image, View } from 'react-native';
import { globalStyles } from '../globals/styles';

export default function () {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={globalStyles.safeView}>
      <View style={styles.container}>
        <Image source={require('../assets/ig.png')} resizeMode="contain" style={styles.image} />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>LOGIN WITH GOOGLE</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    height: 45,
    backgroundColor: '#2E384D',
    width: '80%',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: '500',
    color: '#fff',
  },
  image: {
    height: 100,
    marginBottom: 20,
  },
});
