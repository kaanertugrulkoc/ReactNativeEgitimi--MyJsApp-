import React from 'react';
import { View, Text } from 'react-native';

class Kalem extends React.Component {
    constructor() {
        this.isim = "Kalem";
        this.renk = "Mavi";
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

    render() {
        return (
            <View>
                <Text>{this.state.isim}</Text>
                <Text>{this.state.renk}</Text>
                <Text>{this.state.boyut}</Text>
                <Text>{this.state.sayac}</Text>
                <Button title="Arttır" onPress={() => this.artir()} />
                <Button title="Azalt" onPress={() => this.azalt()} />
            </View>
        );
    }
}

export default Kalem;