import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export function UserFaceName() {
    return (
        <View style={styles.row}>
            <Image source={require('../../assets/face_one.jpg')} style={styles.face} />

            <View>
                <Text style={styles.name}>Maoo.lopez</Text>
                <Text style={styles.time}>Hace 20 min</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    face: {
        height: 50,
        width: 50,
        borderRadius: 25,
        marginRight: 20,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    name: {
        fontSize: 16,
        fontWeight: '800',
    },
    time: {
        fontSize: 12, 
        color: 'rgba(0,0,0,0.5)'
    }
})