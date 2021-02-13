import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CARDS_BLACK } from '../../globals/colors';

export function ProfileAnalytics() {
    return (
        <View style={styles.row}>
            <View>
                <Text style={styles.title}>735</Text>
                <Text style={styles.subtitle}>Posts</Text>
            </View>

            <View>
                <Text style={styles.title}>876</Text>
                <Text style={styles.subtitle}>Followers</Text>
            </View>

            <View>
                <Text style={styles.title}>568</Text>
                <Text style={styles.subtitle}>Following</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        color: CARDS_BLACK,
        fontWeight: '800',
        textAlign: 'center'
    },
    subtitle: {
        color: '#A3A3A3',
        fontSize: 12,
        textAlign: 'center'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: 40,
    }
})