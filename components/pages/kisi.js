import { View, Text, Button } from 'react-native';


export const Kisi = (props) => {
    return (
        <View style={{
            backgroundColor: 'gray',
            width: 300,
            height: 100,
            borderRadius: 20,
            margin: 5,
            padding: 5,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 1,
            borderColor: 'black',
            shadowColor: 'black',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,



        }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{props.ad}</Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{props.soyad}</Text>
            <Button style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'black',
                backgroundColor: 'green',
                borderRadius: 20,
                margin: 5,
                padding: 5,
                borderWidth: 1,
                borderColor: 'black',
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
            }} title="Bilgi" onPress={() => console.log('Bilgi')} />

        </View>
    );
}