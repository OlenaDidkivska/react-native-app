import React from 'react';
import { Text } from 'react-native';
import { StyleSheet, View } from 'react-native';

export const MapScreen = () => {

    return (
        <View style={styles.container}>
            <Text>
                MapScreen
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mapStyle: {
        width: '100%',
        heigh: '100%',
    },
});