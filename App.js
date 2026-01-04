import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, Alert } from 'react-native';
import { Foo } from './companents/foo/foo';
import { styles } from './companents/foo/style';
import { Sayfa1 } from './companents/sayfa1/sayfa1';

export default function App() {
  return (

    <View style={styles.container}>
      <StatusBar style="auto" />
      <Foo />
      <Sayfa1 />


    </View>



  );
}

