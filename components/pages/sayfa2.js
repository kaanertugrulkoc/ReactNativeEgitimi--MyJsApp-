import { View, Text, Image } from 'react-native';
import { styles } from '../../components/style/style';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export const Sayfa2 = () => {


    return (
        <View >
            <View style={{ justifyContent: 'center', alignItems: 'center', margin: 10, textAlign: 'center' }}>
                <Text style={styles.baslik}>KİŞİLER</Text>
            </View>


            <View style={{ flexDirection: 'row', height: '120 ', width: '350', margin: 20 }}>
                <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={{ uri: "https://avatars.githubusercontent.com/u/25131682?v=4" }} style={{ width: 100, height: 100, borderRadius: 50 }} />
                </View>
                <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center' }}>

                    <Text style={styles.yazi}>Kaan Ertugrul Koc</Text>
                    <Text style={styles.yazi}>kaanertugrulkoc.com.tr</Text>
                    <Text style={styles.yazi}>info@kaanertugrulkoc.com.tr</Text>
                    <Text style={styles.yazi}>+90 531 605 ** **</Text>

                </View>
                <View style={{ flex: 1, textAlign: 'center', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <AntDesign name="github" size={35} color="black" />
                    <FontAwesome5 name="blogger-b" size={35} color="black" />

                </View>

            </View>

        </View>









    );
};
