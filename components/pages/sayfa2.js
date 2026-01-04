import { View, Text, Image } from 'react-native';
import { styles } from '../../components/style/style';

export const Sayfa2 = () => {


    return (
        <View >
            <View>
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
                <View style={{ backgroundColor: 'blue', flex: 1 }}></View>

            </View>

        </View>









    );
};
