import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, Alert } from 'react-native';
import { Foo } from './companents/foo/foo';
import { styles } from './companents/foo/style';

export default function App() {

  // işlem yapmak için onay sorma 
  const sil = () => {
    Alert.alert("Dikkat !!!", "Silme İşlemini Onaylıyormusunuz...", [
      { text: "Evet", onPress: () => alert("Silindi") },
      { text: "Hayır", onPress: () => alert("iptal edildi") },
    ])
  };

  return (

    <View style={styles.container}>
      <StatusBar style="auto" />
      <Foo />



    </View>



  );
}

