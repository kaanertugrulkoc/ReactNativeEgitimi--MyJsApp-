import { View, Text, Image, Linking, TouchableOpacity, TextInput } from 'react-native';
import { stil, styles } from '../../components/style/style';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';


export const Sayfa2 = () => {

    return (
        <View >
            <View style={{ justifyContent: 'center', alignItems: 'center', margin: 10 }}>
                <Text style={stil.baslik}>KİŞİLER</Text>
            </View>

            <View style={{ flexDirection: 'column', height: 20, width: 350, margin: 20, justifyContent: 'center', alignItems: 'center' }}>

                <TextInput placeholder="Ad Soyad" style={stil.yazi} />
                <TextInput placeholder="Telefon" autoCapitalize="decimals" autoCorrect={false} style={stil.yazi} />
                <TextInput placeholder="Email" keyboardType="email-address" autoCapitalize="none" autoCorrect={false} style={stil.yazi} />

            </View>

            <View style={{ flexDirection: 'row', height: 120, width: 350, margin: 20 }}>
                <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={{ uri: "https://avatars.githubusercontent.com/u/25131682?v=4" }} style={{ width: 100, height: 100, borderRadius: 50 }} />
                </View>
                <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center' }}>

                    <Text style={styles.yazi}>Kaan Ertugrul Koc</Text>
                    <Text style={styles.yazi}>kaanertugrulkoc.com.tr</Text>
                    <Text style={styles.yazi}>info@kaanertugrulkoc.com.tr</Text>
                    <Text style={styles.yazi}>+90 531 60* ** **</Text>
                    <Text style={styles.yazi}>www.x.com/kaanertugrulkoc</Text>
                    <Text style={styles.yazi}>https://www.blogger.com/kaanertugrulkoc</Text>


                </View>


                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <TouchableOpacity onPress={() => Linking.openURL('https://github.com/kaanertugrulkoc')}>
                        <AntDesign name="github" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Linking.openURL('https://kaanertugrulkoc.blogspot.com/')}>
                        <FontAwesome5 name="blogger-b" size={24} color="black" style={{ marginTop: 10 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Linking.openURL('https://www.apple.com/tr')}>
                        <AntDesign name="apple" size={24} color="black" />
                    </TouchableOpacity>
                </View>



            </View>

        </View>









    );
};
