import { View, Text, Button } from 'react-native';
import { stil } from '../../components/style/style';
import React, { Component, useEffect, useState } from 'react';

export const Sayac = () => {

    useEffect(() => {
        console.log("Sayac: " + sayac);
    }, [sayac]);

    const [sayac, setSayac] = useState(0);
    const [yas, setYas] = useState(40);
    const [isim, setIsim] = useState("Kaan Ertugrul");
    const [telefonno, setTelefonno] = useState("0531 60* ** **");
    const [data, setData] = useState(
        {
            id: 1,
            isim: "Kaan Ertugrul",
            yas: 40,
            telefonno: "0531 60* ** **",
            data: "2026-01-10",
        }
    );


    return (
        <View style={stil.sayac_card}>

            <Text stil={stil.yazi} >{sayac}</Text>
            <Button stil={stil.yazi} title="Artır" onPress={() => setSayac(sayac + 1)} />
            <Button stil={stil.yazi} title="Azalt" onPress={() => setSayac(sayac - 1)} />

        </View>
    );
}