import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, Alert } from 'react-native';

export default function App() {

  // işlem yapmak için onay sorma 
  const sil = () => {
    Alert.alert("Dikkat !!!", "Silme İşlemini Onaylıyormusunuz...", [
      { text: "Evet", onPress: () => alert("Onaylama", "Silindi") },
      { text: "Hayır", onPress: () => alert("iptal edildi") },
    ])
  };

  return (

    <View style={styles.container}>
      <StatusBar style="auto" />


      <Image source={require('./assets/kule.jpg')} style={{ width: 100, height: 100 }} />
      <Image source={{ uri: "https://avatars.githubusercontent.com/u/25131682?v=4" }} style={{ width: 100, height: 100 }} />


      <Text style={styles.yaziTipi}>Eğitime Başladın mı ?</Text>
      <Text style={{ color: 'red', fontWeight: 'bold' }}>Evet </Text>

      <Button title="Sil" onPress={sil} touchSoundDisabled={true} color="red" />
      <Button title="tıkla" onPress={() => alert('tıklandı')} touchSoundDisabled={true} />

      <View style={{
        backgroundColor: '#B8B8F5',
        width: 300,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
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
        <Text>Çerçeve</Text>
      </View>





    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  yaziTipi: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 5,
    color: 'black',
    backgroundColor: 'green',
    width: 250,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    padding: 5,
    borderWidth: 1,
    borderColor: 'black',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,

  },
});
