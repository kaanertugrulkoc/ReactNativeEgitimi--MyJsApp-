import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, Alert } from 'react-native';

export default function App() {
  return (

    <View style={styles.container}>
      <StatusBar style="auto" />

      const Alarm = () => {
        Alert.alert("Başlık", "Mesaj", [
          { title: "Tamam", onPress: () => console.log("Tamam") },
          { title: "iptal", onPress: () => console.log("iptal") },
        ])
      };


      <Image source={require('./assets/kule.jpg')} style={{ width: 100, height: 100 }} />
      <Image source={{ uri: "https://avatars.githubusercontent.com/u/25131682?v=4" }} style={{ width: 100, height: 100 }} />
      <Text style={{ fontSize: 20, fontWeight: 'bold', margin: 5 }}>Eğitime Başladın mı ?</Text>
      <Text style={{ color: 'red', fontWeight: 'bold' }}>Evet !</Text>

      <Button title="Alarm" onPress={Alarm} touchSoundDisabled={true} color="red" />
      <Button title="tıkla" onPress={() => alert('tıklandı')} touchSoundDisabled={true} />
      <Button title="Giriş Yap" onPress={() => alert('giriş yapıldı')} touchSoundDisabled={true} color="red" />
      <Button title="Kayıt Ol" onPress={() => alert('kayıt yapıldı')} touchSoundDisabled={true} color="blue" />
      <Button title="Çıkış Yap" onPress={() => alert('çıkış yapıldı')} touchSoundDisabled={true} color="green" />
      <Button title="Sıfırla" onPress={() => alert('sıfırlanıldı')} touchSoundDisabled={true} color="orange" />
      <Button title="Kapat !" onPress={() => alert('kapatıldı')} touchSoundDisabled={true} color="black" />

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
});
