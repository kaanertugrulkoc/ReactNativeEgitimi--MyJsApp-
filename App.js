import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (

    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text style={{ fontSize: 20, fontWeight: 'bold', margin: 5 }}>Eğitime Başladın mı ?</Text>
      <Text style={{ color: 'red', fontWeight: 'bold' }}>Evet !</Text>


      <Button title="tıkla" onPress={() => alert('tıklandı')} />

      <View style={{
        backgroundColor: '#B8B8F5',
        width: 100,
        height: 100,
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
