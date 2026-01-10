import { View, Text } from 'react-native';
import { stil } from '../../components/style/style';


export const Sayac = () => {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>

            <Text style={stil.sayac_card}>Sayac</Text>
        </View>
    );
}