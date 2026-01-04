import { View, Text, Image, Button, Alert } from 'react-native';
import { styles } from './components/foo/style';

export const Sayfa1 = () => {

    const sil = () => {
        Alert.alert("Dikkat !!!", "Silme İşlemini Onaylıyormusunuz...", [
            { text: "Evet", onPress: () => alert("Silindi") },
            { text: "Hayır", onPress: () => alert("iptal edildi") },
        ]);


    };

    return (
        <View style={styles.container}>
            <Image source={require('./assets/kule.jpg')} style={{ width: 100, height: 100 }} />
            <Image source={{ uri: "https://avatars.githubusercontent.com/u/25131682?v=4" }} style={{ width: 100, height: 100 }} />


            <Text style={styles.yaziTipi}>Eğitime Başladın mı ?</Text>
            <Text style={[styles.yaziTipi, { backgroundColor: 'red', color: 'white' }]}>Evet </Text>

            <Button title="Sil" onPress={sil} touchSoundDisabled={true} color="red" />
            <Button title="tıkla" onPress={() => alert('tıklandı')} touchSoundDisabled={true} />

            <View style={{

            }}>
                <Text style={[styles.yeniTip, styles.yeniTip2, { fontWeight: 'bold', color: 'blue', fontSize: 30 }]}>İletişim</Text>
                <Text style={styles.yeniTip}>https://kaanertugrulkoc.blogspot.com/</Text>
                <Text style={styles.yeniTip}>https://github.com/kaanertugrulkoc</Text>
                <Text style={[styles.yeniTip, { fontWeight: 'bold', color: 'blue', fontSize: 30 }]}>+90 531 605 60 65</Text>
            </View>
        </View>
    );
};
