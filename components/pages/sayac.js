import { View, Text } from 'react-native';
import { stil } from '../../components/style/style';


export const Sayac = () => {
    return (
        <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: 300,
            height: 75,
            backgroundColor: 'gray',
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
        }}>

            <Text style={stil.sayac_card}>Sayac</Text>
        </View>
    );
}