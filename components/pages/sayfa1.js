import { View, Text, Image, Button, Alert } from 'react-native';
import { styles } from '../style/style';
import { Sayfa2 } from './sayfa2';

export const Sayfa1 = () => {

    const sil = () => {
        Alert.alert("Dikkat !!!", "Silme İşlemini Onaylıyormusunuz...", [
            { text: "Evet", onPress: () => alert("Silindi") },
            { text: "Hayır", onPress: () => alert("iptal edildi") },
        ]);


    };

    return (


        <><View style={[styles.container, { flexDirection: 'row', width: 300, height: 200 }]}>


            <Image source={require('../../assets/kule.jpg')} style={{ width: 50, height: 150, flex: 1 }} />
            <Image source={{ uri: "https://avatars.githubusercontent.com/u/25131682?v=4" }} style={{ width: 50, height: 150, flex: 1 }} />



        </View >

            <View style={styles.container}>


                <Text style={styles.yaziTipi}>Eğitime Başladın mı ?</Text>
                <Text style={[styles.yaziTipi, { backgroundColor: 'red', color: 'white' }]}>Evet </Text>

                <Button title="Sil" onPress={sil} touchSoundDisabled={true} color="red" />
                <Button title="Sayfa2 ye git " onPress={(Sayfa2) => alert("Sayfa2 ye gidiyoruz")} touchSoundDisabled={true} />

                <View style={{}}>
                    <Text style={[styles.yeniTip, styles.yeniTip2, { fontWeight: 'bold', color: 'blue', fontSize: 30 }]}>İletişim</Text>
                    <Text style={styles.yeniTip}>https://kaanertugrulkoc.blogspot.com/</Text>
                    <Text style={styles.yeniTip}>https://github.com/kaanertugrulkoc</Text>
                    <Text style={[styles.yeniTip, { fontWeight: 'bold', color: 'blue', fontSize: 30 }]}>+90 531 605 60 65</Text>
                </View>
            </View></>
    );
};
