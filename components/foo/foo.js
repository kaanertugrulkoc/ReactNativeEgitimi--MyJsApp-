import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../style/style';

export const Foo = () => {
    return (
        <View style={styles.box}>
            <Text style={styles.text}>Foo</Text>
        </View>
    );
};

