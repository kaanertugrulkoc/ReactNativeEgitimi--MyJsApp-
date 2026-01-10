import React from 'react';
import { View, Text } from 'react-native';

class Kalem {
    constructor() {
        this.isim = "Kalem";
        this.renk = "Kirmizi";
        this.boyut = 10;

        super();
        this.state = {
            isim: "Kalem",
            renk: "Kirmizi",
            boyut: 10,
            sayac: 0,
        };
    }

    artir() {
        this.setState({ sayac: this.state.sayac + 1 });
    }

    azalt() {
        this.setState({ sayac: this.state.sayac - 1 });
    }
}