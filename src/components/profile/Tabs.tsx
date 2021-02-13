import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { CARDS_BLACK, CARDS_GREY } from '../../globals/colors';

export let STATUS: 'post' | 'videos' | 'igtv';

interface Props {
  active: typeof STATUS;
  onPress: (val: typeof STATUS) => void;
}

export function ProfileTabs(props: Props) {
  return (
    <View style={styles.row}>
      <TouchableOpacity
        onPress={() => props.onPress('post')}
        style={[props.active === 'post' && styles.button, styles.btn]}
      >
        <Text style={{ ...styles.text, color: props.active === 'post' ? CARDS_BLACK : CARDS_GREY }}>
          Post
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => props.onPress('videos')}
        style={[props.active === 'videos' && styles.button, styles.btn]}
      >
        <Text
          style={{ ...styles.text, color: props.active === 'videos' ? CARDS_BLACK : CARDS_GREY }}
        >
          Videos
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => props.onPress('igtv')}
        style={[props.active === 'igtv' && styles.button, styles.btn]}
      >
        <Text style={{ ...styles.text, color: props.active === 'igtv' ? CARDS_BLACK : CARDS_GREY }}>
          IGTV
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 40,
  },
  btn: { paddingHorizontal: 20, paddingBottom: 5 },
  button: {
    borderBottomColor: '#FC0B7B',
    borderBottomWidth: 3,
    borderStyle: 'solid',
  },
  text: {
    fontWeight: '700',
    fontSize: 16,
  },
});
