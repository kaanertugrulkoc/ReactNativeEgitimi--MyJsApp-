import { View, Text, Button } from 'react-native';
import { stil } from '../../components/style/style';
import React, { useState } from 'react';

export const Sayac = () => {
    const [sayac, setSayac] = useState(0);


    return (
        <View style={stil.sayac_card}>

            <Text stil={stil.yazi} >{sayac}</Text>

            <Button stil={stil.yazi} title="Artır" onPress={() => setSayac(sayac + 1)} />
            <Button stil={stil.yazi} title="Azalt" onPress={() => setSayac(sayac - 1)} />

        </View>
    );
}